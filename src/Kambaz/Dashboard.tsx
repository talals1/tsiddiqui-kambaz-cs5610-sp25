import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addCourse, updateCourse } from "./Courses/reducer";
import { useEffect, useState } from "react";

import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [course, setCourse] = useState({ _id: '', name: '', description: '', enrolled: true });
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);

  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  }

  const addNewCourse = async () => {
    // const newCourse = await userClient.createCourse(course);
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const useStateUpdateCourse = async () => {
    await courseClient.updateCourse(course);

    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    }))
  };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
        {enrolling ? "My Courses" : "All Courses"}
      </button>

      {(currentUser.role === "ADMIN" || currentUser.role === "FACULTY") &&
        <>
          <h5>New Course
            <button className="btn btn-primary float-end me-2"
              id="wd-add-new-course-click"
              onClick={() => {
                addNewCourse()
                dispatch(addCourse(course))
              }} > Add </button>
            <button className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={() => {
                useStateUpdateCourse()
                dispatch(updateCourse(course))
              }} >
              Update
            </button>
          </h5><hr /><br />
          <FormControl value={course.name} className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <FormControl value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        </>
      }

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">

        <Row xs={1} md={5} className="g-4">
          {courses.map((c: any) => (
            <Col className="wd-dashboard-course" style={{ width: "350px" }}>
              <Card>
                <Card.Img src="/images/reactjs.png" variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {c.name}
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {c.description} </Card.Text>

                  {!enrolling
                    ?
                    (<Link to={`/Kambaz/Courses/${c._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-light" >
                      <Button className="me-2" variant="primary">
                        Go
                      </Button>
                    </Link>)
                    :
                    (<Link to={c.enrolled ? `/Kambaz/Courses/${c._id}/Home` : `/Kambaz/Dashboard`}
                      className="wd-dashboard-course-link text-decoration-none text-light" >
                      <Button className="me-2" variant="primary">
                        Go
                      </Button>
                    </Link>)
                  }

                  {enrolling && (
                    <button className={`btn ${c.enrolled ? "btn-danger" : "btn-success"}`}
                      onClick={(event) => {
                        event.preventDefault();
                        updateEnrollment(c._id, !c.enrolled);
                      }} >
                      {c.enrolled ? "Unenroll" : "Enroll"}
                    </button>
                  )}

                  {(currentUser.role === "ADMIN" || currentUser.role === "FACULTY") &&
                    <>
                      <Button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(c._id);
                        // This function below is for the Redux/reducer deleteCourse
                        // dispatch(deleteCourse(c._id));
                      }} className="btn btn-danger float-end me-2"
                        id="wd-delete-course-click">
                        Delete
                      </Button >

                      <Button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(c)
                        }}
                        className="btn btn-warning me-2 float-end" >
                        Edit
                      </Button>
                    </>
                  }

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div >
  );
}

import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { useEffect, useState } from "react";

import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

export default function Dashboard() {
  const dispatch = useDispatch();

  const [course, setCourse] = useState({ _id: '', name: '', description: '' });
  const [showAllCourses, setShowAllCourses] = useState(false);

  const [courses, setCourses] = useState<any[]>([]);
  const [unenrolledCourses, setUnenrolledCourses] = useState<any[]>([]);

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);

      if (showAllCourses) {
        const allCourses = await courseClient.fetchAllCourses();

        const filteredCourses = allCourses.filter(
          (c: any) => !courses.some((mc: any) => mc._id === c._id)
        );
        setUnenrolledCourses(filteredCourses);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const useStateUpdateCourse = async () => {
    await courseClient.updateCourse(course);

    setCourses(courses.map((c) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    }))
  };

  const joinCourse = async (cid: string) => {
    const status = await userClient.enrollUser(cid);
    const courseBeingJoined = unenrolledCourses.find((c) => c._id === cid)
    setCourses([...courses, courseBeingJoined]);
    setUnenrolledCourses(unenrolledCourses.filter((c) => c._id !== cid))
  }

  const leaveCourse = async (cid: string) => {
    const status = await userClient.unenrollUser(cid);
    const courseBeingLeft = courses.find((c) => c._id === cid)
    setCourses(courses.filter((c) => c._id !== cid));
    setUnenrolledCourses([...unenrolledCourses, courseBeingLeft])
  }

  useEffect(() => {
    fetchCourses();
  }, [currentUser, showAllCourses]);


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <button className="btn btn-primary float-end"
        onClick={() => setShowAllCourses(!showAllCourses)}>
        Enrollments
      </button>
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
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">

        <Row xs={1} md={5} className="g-4">
          {courses.map((c: any) => (

            <Col className="wd-dashboard-course" style={{ width: "350px" }}>
              <Card>
                <Card.Img src="/images/reactjs.png" variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {c.name} </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {c.description} </Card.Text>

                  <Link to={`/Kambaz/Courses/${c._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    {/* This link used to be around the whole card. I 
                      refactored it to just be around this button since clicking on the
                      Unenroll button would make you attempt to go to the course. */}
                    <Button className="me-2" variant="primary"> Go </Button>
                  </Link>

                  <Button className="me-2" variant="danger"
                    onClick={() => {
                      leaveCourse(c._id)
                      // dispatch(deleteEnrollment(findEnrollmentId(c._id))
                    }}>
                    Unenroll
                  </Button>

                  {/* {isEnrolled &&
                      <Button className="me-2" variant="danger"
                        onClick={() => dispatch(deleteEnrollment(findEnrollmentId(c._id)))}>
                        Unenroll
                      </Button>}

                    {!isEnrolled &&
                      <Button className="me-2" variant="success"
                        onClick={() => dispatch(addEnrollment({ user: currentUser._id, course: c._id }))}>
                        Enroll
                      </Button>} */}

                  <Button onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(c._id);
                    // This function below is for the Redux/reducer deleteCourse
                    // dispatch(deleteCourse(c._id));
                  }} className="btn btn-danger float-end me-2"
                    id="wd-delete-course-click">
                    Delete
                  </Button>

                  <Button id="wd-edit-course-click"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(c)
                    }}
                    className="btn btn-warning me-2 float-end" >
                    Edit
                  </Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {showAllCourses &&
          <Row xs={1} md={5} className="g-4">
            {unenrolledCourses.map((c: any) => (

              <Col className="wd-dashboard-course" style={{ width: "350px" }}>
                <Card>
                  <Card.Img src="/images/reactjs.png" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {c.description} </Card.Text>

                    <Link to={`/Kambaz/Courses/${c._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      {/* This link used to be around the whole card. I 
                    refactored it to just be around this button since clicking on the
                    Unenroll button would make you attempt to go to the course. */}
                      <Button className="me-2" variant="primary"> Go </Button>
                    </Link>


                    {/* {isEnrolled &&
                    <Button className="me-2" variant="danger"
                      onClick={() => dispatch(deleteEnrollment(findEnrollmentId(c._id)))}>
                      Unenroll
                    </Button>}

                  {!isEnrolled &&
                    <Button className="me-2" variant="success"
                      onClick={() => dispatch(addEnrollment({ user: currentUser._id, course: c._id }))}>
                      Enroll
                    </Button>} */}

                    <Button className="me-2" variant="success"
                      onClick={() => {
                        joinCourse(c._id)
                        // dispatch(addEnrollment({ user: currentUser._id, course: c._id }))
                      }}>
                      Enroll
                    </Button>

                    <Button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(c._id);
                      // This function below is for the Redux/reducer deleteCourse
                      // dispatch(deleteCourse(c._id));
                    }} className="btn btn-danger float-end me-2"
                      id="wd-delete-course-click">
                      Delete
                    </Button>

                    <Button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(c)
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </Button>

                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        }
      </div>
    </div>
  );
}

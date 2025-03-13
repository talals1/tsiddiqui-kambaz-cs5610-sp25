import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { useState } from "react";
import { addEnrollment, deleteEnrollment } from "./Account/enrollmentsReducer";

export default function Dashboard() {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [course, setCourse] = useState({ name: '', description: '' });
  const [showAllCourses, setShowAllCourses] = useState(false);

  function findEnrollmentId(courseId: any) {
    // Assumes that the current user is enrolled in the specified course
    const e = enrollments.find((e: any) => e.course === courseId && e.user === currentUser._id)
    return e._id
  }

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
          onClick={() => dispatch(addCourse(course))} > Add </button>
        <button className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))} >
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
          {courses.map((c: any) => {
            const isEnrolled = enrollments.some((e: any) => e.user === currentUser._id && e.course === c._id);
            console.log([c, isEnrolled])
            return [c, isEnrolled]
          }).
            filter(([c, isEnrolled]: [any, boolean]) => isEnrolled || showAllCourses).
            map(([c, isEnrolled]: [any, boolean]) => (

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

                    {isEnrolled &&
                      <Button className="me-2" variant="danger"
                        onClick={() => dispatch(deleteEnrollment(findEnrollmentId(c._id)))}>
                        Unenroll
                      </Button>}

                    {!isEnrolled &&
                      <Button className="me-2" variant="success"
                        onClick={() => dispatch(addEnrollment({ user: currentUser._id, course: c._id }))}>
                        Enroll
                      </Button>}

                    <Button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(c._id));
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
      </div>
    </div>
  );
}

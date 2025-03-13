import { Button, Col, FormControl, InputGroup, ListGroup, Modal, Row, Stack } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdEditNote } from "react-icons/md";
import { FaMagnifyingGlass, FaTrash } from "react-icons/fa6";

import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { deleteAssignment } from "./reducer";
import { useState } from "react";
import DeleteAssignmentModal from "../../Account/DeleteAssignmentModal";


export default function Assignments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currAssignmentName, setCurrAssignmentName] = useState('');
  const [currAsnId, setCurrAsnId] = useState('');

  const handleCreateAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/newAssignment`);
  };

  const handleDeleteAssignment = (assignmentName: any, asnId: any) => {
    setCurrAssignmentName(assignmentName);
    setCurrAsnId(asnId);
    handleShow();
  }

  function getFormattedDate(dateString: string) {
    // Source: https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options)
  }

  return (
    <div id="wd-assignments">

      <Row>
        <Col xs={4}>
          <InputGroup className="mb-3">
            <InputGroup.Text><FaMagnifyingGlass /></InputGroup.Text>
            <FormControl id="wd-search-assignment" type="email" placeholder="Search..." className="wd-grid-col-third-page fa" />
          </InputGroup>
        </Col>
        <Col xs={8}>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
            + Group
          </Button>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment"
            onClick={() => handleCreateAssignment()}>
            + Assignment
          </Button>
        </Col>
      </Row>

      <br /><br />

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            (40% of Total)
            {/* TODO maybe create an AssignmentsControlButtons instead of using the modules one */}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">

            {assignments
              .filter((asn: any) => asn.course === cid)
              .map((asn: any) => (
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <Stack direction="horizontal">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdEditNote className="me-2 fs-3" color="green" />
                    <FaTrash className="text-danger me-2 mb-1" onClick={() => handleDeleteAssignment(asn.title, asn._id)} />
                    <Stack>
                      <a href={`#/Kambaz/Courses/${cid}/Assignments/${asn._id}`} className="wd-assignment-link" >
                        {asn.title}
                      </a>
                      {/* <div style={{ "color": "gray" }}><b>Due</b> Wednesday, January 22nd 2025 at 11:59pm</div> */}
                      <div style={{ "color": "gray" }}><b>Due</b> {getFormattedDate(asn.dueDate)} at 11:59pm</div>
                    </Stack>
                    <LessonControlButtons />
                  </Stack>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>

      <DeleteAssignmentModal
        show={show} handleClose={handleClose}
        assignmentName={currAssignmentName} asnId={currAsnId} 
        deleteAssignment={(asnId: any) => { dispatch(deleteAssignment(asnId)) }} />
    </div>
  );
}

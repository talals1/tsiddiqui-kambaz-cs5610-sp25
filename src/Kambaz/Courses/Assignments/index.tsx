import { Button, Col, FormControl, InputGroup, ListGroup, Row, Stack } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { MdEditNote } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";

import * as db from "../../Database";
import { useParams } from "react-router";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

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
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
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
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            
            {assignments
              .filter((asn: any) => asn.course === cid)
              .map((asn) => (
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <Stack direction="horizontal">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdEditNote className="me-2 fs-3" color="green" />
                    <Stack>
                      <a href={`#/Kambaz/Courses/${cid}/Assignments/${asn._id}`} className="wd-assignment-link" >
                        {asn.title}
                      </a>
                      <div style={{ "color": "gray" }}><b>Due</b> Wednesday, January 22nd 2025 at 11:59pm</div>
                    </Stack>
                    <LessonControlButtons />
                  </Stack>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

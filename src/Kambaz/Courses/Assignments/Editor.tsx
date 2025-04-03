import { Button, Card, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";

import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const asn = assignments.find((a: any) => a._id === aid);

    let modifiedAsn = asn ? asn : {course: cid};

    const handleSaveAssignment = async (asn: any, modifiedAsn: any) => {
        if (asn) {
            console.log("updating assn!!!")
            await assignmentsClient.updateAssignment(modifiedAsn);
            dispatch(updateAssignment(modifiedAsn));
        } else {
            console.log("adding assn!")
            await coursesClient.createAssignmentForCourse(cid as string, modifiedAsn);
            dispatch(addAssignment(modifiedAsn));
        }
        navigate(`/Kambaz/Courses/${cid}/Assignments/`);
        console.log(assignments)
    }

    return (
        <div id="wd-assignments-editor" >
            <Button onClick={() => handleSaveAssignment(asn, modifiedAsn)}>Save</Button>
            <Button onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/`)}>Cancel</Button>
            <FormGroup className="mb-3">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl
                    readOnly={false}
                    defaultValue={asn && asn?.title}
                    onChange={(e) => {
                        e.target
                        modifiedAsn = { ...modifiedAsn, title: e.target.value }
                    }} />
            </FormGroup>

            <FormGroup className="mb-3" controlId="wd-textarea">
                <FormLabel>Description</FormLabel>
                <FormControl as="textarea" rows={3}
                    defaultValue={asn && asn?.description}
                    onChange={(e) => { modifiedAsn = { ...modifiedAsn, description: e.target.value } }} />
            </FormGroup>

            <FormGroup as={Row} className="mb-3">
                <FormLabel column sm={2}>
                    Points
                </FormLabel>
                <Col sm={10}>
                    <FormControl defaultValue={asn && asn?.points}
                        onChange={(e) => { modifiedAsn = { ...modifiedAsn, points: e.target.value } }} />
                </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-3">
                <FormLabel column sm={2}>
                    Assignment Group
                </FormLabel>
                <Col sm={10}>
                    <FormSelect>
                        <option selected>ASSIGNMENTS</option>
                    </FormSelect>
                </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-3">
                <FormLabel column sm={2}>
                    Display Grade as
                </FormLabel>
                <Col sm={10}>
                    <FormSelect>
                        <option selected>Percentage</option>
                        <option>Points</option>
                    </FormSelect>
                </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-3">
                <FormLabel column sm={2}>
                    Submission Type
                </FormLabel>
                <Col sm={10}>
                    <Form.Check type="radio" label="Text Entry"
                        checked name="formHorizontalRadios" />
                    <Form.Check type="radio" label="Website URL"
                        name="formHorizontalRadios" />
                    <Form.Check type="radio" label="Media Recording"
                        name="formHorizontalRadios" />
                    <Form.Check type="radio" label="Student Annotation"
                        name="formHorizontalRadios" />
                    <Form.Check type="radio" label="File Upload"
                        name="formHorizontalRadios" />
                </Col>
            </FormGroup>

            <Card>
                <Card.Body>
                    <Card.Title>Dates</Card.Title>
                    <FormGroup as={Row} className="mb-3">
                        <FormLabel column sm={2}>
                            Available From
                        </FormLabel>
                        <Col sm={10}>
                            <FormControl type="date" defaultValue={asn && asn?.availableFrom}
                                onChange={(e) => { modifiedAsn = { ...modifiedAsn, availableFrom: e.target.value } }} />
                        </Col>
                    </FormGroup>

                    <FormGroup as={Row} className="mb-3">
                        <FormLabel column sm={2}>
                            Available Until
                        </FormLabel>
                        <Col sm={10}>
                            <FormControl type="date" defaultValue={asn && asn?.availableUntil}
                                onChange={(e) => { modifiedAsn = { ...modifiedAsn, availableUntil: e.target.value } }} />
                        </Col>
                    </FormGroup>

                    <FormGroup as={Row} className="mb-3">
                        <FormLabel column sm={2}>
                            Due Date
                        </FormLabel>
                        <Col sm={10}>
                            <FormControl type="date" defaultValue={asn && asn?.dueDate}
                                onChange={(e) => { modifiedAsn = { ...modifiedAsn, dueDate: e.target.value } }} />
                        </Col>
                    </FormGroup>
                </Card.Body>
            </Card>

        </div>
    );
}    
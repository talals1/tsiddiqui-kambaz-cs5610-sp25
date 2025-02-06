import { Col, Form, FormControl, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">

            <FormGroup className="mb-3">
                <FormLabel>Assignment Name</FormLabel>
                <FormControl />
            </FormGroup>

            <FormGroup className="mb-3" controlId="wd-textarea">
                <FormLabel>Description</FormLabel>
                <FormControl as="textarea" rows={3} />
            </FormGroup>

            <FormGroup as={Row} className="mb-3">
                <FormLabel column sm={2}>
                    Points
                </FormLabel>
                <Col sm={10}>
                    <FormControl />
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

            <FormGroup as={Row} className="mb-3">
                <FormLabel column sm={2}>
                    Available From
                </FormLabel>
                <Col sm={10}>
                    <FormControl type="date"/>
                </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-3">
                <FormLabel column sm={2}>
                    Available Until
                </FormLabel>
                <Col sm={10}>
                    <FormControl type="date"/>
                </Col>
            </FormGroup>


        </div>
    );
}    
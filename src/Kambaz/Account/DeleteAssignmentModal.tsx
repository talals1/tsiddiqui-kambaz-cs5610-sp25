import { Button, Modal } from "react-bootstrap";

export default function DeleteAssignmentModal(
    { show, handleClose, assignmentName, asnId, deleteAssignment }: {
        show: boolean;
        handleClose: () => void;
        assignmentName: string;
        asnId: string;
        deleteAssignment: (asnId: string) => void;
    }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Assignment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you really want to delete "{assignmentName}"?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                <Button variant="danger"
                    onClick={() => {
                        deleteAssignment(asnId);
                        handleClose();
                    }} > Yes </Button>
            </Modal.Footer>
        </Modal>
    );
}

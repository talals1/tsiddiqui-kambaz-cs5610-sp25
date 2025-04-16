import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function AssignmentViewer() {
    const { aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const asn = assignments.find((a: any) => a._id === aid);

    function shortDate(dateStr: string) {
        const date = new Date(dateStr);
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
        const abbreviatedDate = date.toLocaleDateString('en-US', options);

        return abbreviatedDate;
    }

    return (
        <Container>
            <br/>
            <h2>{asn.title}</h2>
            <hr />
            <h5 className="my-1">
                <b>Due</b> &nbsp; {shortDate(asn.dueDate)} by 11:59pm
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <b>Points</b> &nbsp; {asn.points}
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <b>Available</b> &nbsp; {shortDate(asn.availableFrom)} at 8:00am {" - "} {shortDate(asn.availableUntil)} by 11:59pm
            </h5>
            <hr />
            <p>
                {asn.description}
            </p>
        </Container>
    )
}
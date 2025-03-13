import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function CourseProtectedRoute({ children }: { children: any }) {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    const isEnrolled = enrollments.find((e: any) => e.user === currentUser._id && e.course === cid)

    if (isEnrolled) {
        return children;
    } else {
        return <Navigate to="/Kambaz/Dashboard" />;
    }
}

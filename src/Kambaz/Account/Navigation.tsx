import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation">
      {links.map((linkName) => (
        <>
          <Link to={`/Kambaz/Account/${linkName}`}> {linkName} </Link>
          <br />
        </>
      ))}
    </div>
  );
}
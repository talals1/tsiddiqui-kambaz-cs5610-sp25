import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="list-group">
      {links.map((linkName) => (
        <>
          <Link to={`/Kambaz/Account/${linkName}`} className={`list-group-item ${active(linkName)}`}> {linkName} </Link>
        </>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link>)}
    </div>
  );
}
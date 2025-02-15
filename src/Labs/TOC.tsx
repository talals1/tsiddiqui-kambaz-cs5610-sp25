import { Nav } from "react-bootstrap";
import { useLocation } from "react-router";
import { Link } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    // <ul>
    //   <li><Link to="/Labs">Labs</Link></li>
    //   <li><Link to="/Labs/Lab1">Lab 1</Link></li>
    //   <li><Link to="/Labs/Lab2">Lab 2</Link></li>
    //   <li><Link to="/Labs/Lab3">Lab 3</Link></li>
    //   <li><Link to="/Kambaz">Kambaz</Link></li>
    // </ul>
    <Nav variant="pills" id="wd-toc">
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs">Labs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs/Lab1" id="wd-a1"
          active={pathname.includes("Lab1")}>Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs/Lab2" id="wd-a2" 
          active={pathname.includes("Lab2")}>Lab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs/Lab3" id="wd-a3" 
          active={pathname.includes("Lab3")}>Lab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Kambaz">Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/talals1/tsiddiqui-kambaz-cs5610-sp25">My GitHub</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
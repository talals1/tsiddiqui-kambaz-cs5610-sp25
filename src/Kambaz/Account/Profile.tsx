import { FormControl, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>

      <FormControl id="wd-username"
        defaultValue="alice"
        placeholder="username"
        className="mb-2" />

      <FormControl id="wd-password"
        defaultValue="123"
        placeholder="password"
        className="mb-2" />

      <FormControl id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-2" />

      <FormControl id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2" />

      <FormControl id="wd-dob"
        defaultValue="2000-01-01"
        type="date"
        className="mb-2" />

      <FormControl id="wd-email"
        defaultValue="alice@wonderland.com"
        type="email"
        className="mb-2" />

      <FormSelect  id="wd-role">
        <option selected>User</option>
        <option value="1">Admin</option>
        <option value="2">Faculty</option>
        <option value="3">Student</option>
      </FormSelect>

      <Link
        to="/Kambaz/Account/SignIn"
        className="btn btn-danger w-100 mb-2">
        Sign out </Link>

    </div>
  );
}

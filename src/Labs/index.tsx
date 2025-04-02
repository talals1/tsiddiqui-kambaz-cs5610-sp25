import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import store from "./store";
import { Provider } from "react-redux";
import Lab5 from "./Lab5";

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div id="wd-labs">
          <h1>Labs</h1>
          <h2>Talal Siddiqui</h2>
          <p>
            Here is the <a href="https://github.com/talals1/tsiddiqui-kambaz-cs5610-sp25" id="wd-github">GitHub repository</a> for this assigment.<br/>
          </p>
          <p>
            For convenience, here is ones of the accounts for the Kambaz part. <br/> 
            username: ada<br/> 
            password: 123<br/> <br/> 
            More accounts can be found in "src\Kambaz\Database\users.json" of the repo. <br/>
          </p>
          <TOC />
          <Routes>
            <Route path="/" element={<Navigate to="Lab1" />} />
            <Route path="Lab1" element={<Lab1 />} />
            <Route path="Lab2/*" element={<Lab2 />} />
            <Route path="Lab3/*" element={<Lab3 />} />
            <Route path="Lab4/*" element={<Lab4 />} />
            <Route path="Lab5/*" element={<Lab5 />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

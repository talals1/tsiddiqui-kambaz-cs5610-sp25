export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
      
      ASSIGNMENTS 40% of Total <button>+</button> </h3>
      
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link" >
            A1 - ENV + HTML
          </a> 
          <br/>
          <b>Due</b> Wednesday, January 22nd 2025 at 11:59pm
        </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link" >
            A2 - Setting up TypeScript
          </a> 
          <br/>
          <b>Due</b> Tuesday, January 28th 2025 at 11:59pm
        </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link" >
            A3 - Detecting Radio Frequencies with TypeScript and Python
          </a> 
          <br/>
          <b>Due</b> Thursday, February 6th 2025 at 11:59pm
        </li>
      </ul>
    </div>
  );
}
    
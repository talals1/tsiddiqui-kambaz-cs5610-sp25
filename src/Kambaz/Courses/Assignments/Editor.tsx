export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
      The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Group</label>
            </td>
            <td>
              <input id="wd-group" value="All"/>
            </td>
          </tr>
          
          
          <tr>
            <td>
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>          
              <select id="wd-display-grade-as">
                <option selected value="pct">Percentage</option>
                <option value="points">Points</option>
              </select>
            </td>
          </tr>


          <tr>
            <td>
              <label id="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <input type="radio" name="submission-type" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br />

              <input type="radio" name="submission-type" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br />
              
              <input type="radio" name="submission-type" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recording</label><br />

              <input type="radio" name="submission-type" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />

              <input type="radio" name="submission-type" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Upload</label>
            </td>
          </tr>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
            <td>
              <input id="wd-assign-to" value="All Students"/>
            </td>
          </tr>


          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
            <input type="date"
                   value="2025-01-21" 
                   id="wd-available-from"/><br/>
            </td>
          </tr>

          
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Available Until</label>
            </td>
            <td>
            <input type="date"
                   value="2025-01-30" 
                   id="wd-available-until"/><br/>
            </td>
          </tr>


        
        {/* Complete on your own */}
      </table>
    </div>
  );
}    
export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <button>Unpublish</button> <button>Publish</button>
      {/* Complete on your own */}
      <div>
        <br/>
        <button style={{"display": "block"}}>Import Existing Content</button>
        <button style={{"display": "block"}}>Import from Commons</button>
        <button style={{"display": "block"}}>Choose Home Page</button>
        <button style={{"display": "block"}}>View Course Stream</button>
        <button style={{"display": "block"}}>New Announcement</button>
        <button style={{"display": "block"}}>New Analytics</button>
        <button style={{"display": "block"}}>View Course Notifications</button>
      </div>
    </div> 
  );
}
    
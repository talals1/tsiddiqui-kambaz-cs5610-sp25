import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
          className="wd-dashboard-course-link" >
          <img src="/images/reactjs.png" width={200} />
          <div>
            <h5> CS1234: React JS </h5>
            <p className="wd-dashboard-course-title">
            Full Stack software developer </p>
            <button> Go </button>
          </div>
          </Link>
        </div> <br/>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1101/Home"
          className="wd-dashboard-course-link" >
          <img src="/images/reactjs.png" width={200} />
          <div>
            <h5> SOCL1101 </h5>
            <p className="wd-dashboard-course-title">
            Introduction to Sociology </p>
            <button> Go </button>
          </div>
          </Link>
        </div> <br/>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1150/Home"
          className="wd-dashboard-course-link" >
          <img src="/images/reactjs.png" width={200} />
          <div>
            <h5> JRNL1150 </h5>
            <p className="wd-dashboard-course-title">
            Understanding Today's News </p>
            <button> Go </button>
          </div>
          </Link>
        </div> <br/>

        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5610/Home"
          className="wd-dashboard-course-link" >
          <img src="/images/reactjs.png" width={200} />
          <div>
            <h5> CS5610 </h5>
            <p className="wd-dashboard-course-title">
            Web Development </p>
            <button> Go </button>
          </div>
          </Link>
        </div> <br/>


        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5330/Home"
          className="wd-dashboard-course-link" >
          <img src="/images/reactjs.png" width={200} />
          <div>
            <h5> CS5330 </h5>
            <p className="wd-dashboard-course-title">
            Pattern Recognition & Computer Vision </p>
            <button> Go </button>
          </div>
          </Link>
        </div> <br/>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6200/Home"
          className="wd-dashboard-course-link" >
          <img src="/images/reactjs.png" width={200} />
          <div>
            <h5> CS6200 </h5>
            <p className="wd-dashboard-course-title">
            Information Retrieval </p>
            <button> Go </button>
          </div>
          </Link>
        </div> <br/>


        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6120/Home"
          className="wd-dashboard-course-link" >
          <img src="/images/reactjs.png" width={200} />
          <div>
            <h5> CS6120 </h5>
            <p className="wd-dashboard-course-title">
            Natural Language Processing </p>
            <button> Go </button>
          </div>
          </Link>
        </div> <br/>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4520/Home"
          className="wd-dashboard-course-link" >
          <img src="/images/reactjs.png" width={200} />
          <div>
            <h5> CS4520 </h5>
            <p className="wd-dashboard-course-title">
            Mobile App Dev </p>
            <button> Go </button>
          </div>
          </Link>
        </div> <br/>


      </div>
    </div>
  );
}

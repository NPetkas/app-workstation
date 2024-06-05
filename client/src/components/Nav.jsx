import { Link, useLocation } from "react-router-dom";
import Spotify from "./Spotify";

// nav bar
export default function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav">
      <div className="spotify">
        <Spotify />
      </div>
      <div className="navers">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/task"
            className={currentPage === "/task" ? "nav-link active" : "nav-link"}
          >
            Tasks
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/note"
            className={currentPage === "/note" ? "nav-link active" : "nav-link"}
          >
            Notes
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="/logout"
            className="nav-link"
          >
            Logout
          </Link>
        </li>
        
        <li className="nav-item">
          <Link
            to="/signup"
            className={
              currentPage === "/signup" ? "nav-link active" : "nav-link"
            }
          >
            SignUp
          </Link>
        </li>
      </div>
    </nav>
  );
}

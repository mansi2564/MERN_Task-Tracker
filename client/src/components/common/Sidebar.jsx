import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaChartPie,
  FaUser,
  FaCog
} from "react-icons/fa";

function Sidebar() {

  const location = useLocation();

  return (

    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh"
      }}
    >

      <h3 className="text-center mb-5">
        TaskFlow Pro
      </h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-3">
          <Link
            className={`nav-link text-white ${
              location.pathname==="/dashboard" && "fw-bold"
            }`}
            to="/dashboard"
          >
            <FaHome className="me-2"/>
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            className="nav-link text-white"
            to="/tasks"
          >
            <FaTasks className="me-2"/>
            Tasks
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            className="nav-link text-white"
            to="/analytics"
          >
            <FaChartPie className="me-2"/>
            Analytics
          </Link>
        </li>

        <li className="nav-item mb-3">
          <Link
            className="nav-link text-white"
            to="/profile"
          >
            <FaUser className="me-2"/>
            Profile
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="/settings"
          >
            <FaCog className="me-2"/>
            Settings
          </Link>
        </li>

      </ul>

    </div>

  );

}

export default Sidebar;
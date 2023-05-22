import { Link, NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        JnrWahab
      </Link>
      <nav>
        <NavLink exact="true" to="/">
          <FaHome />
        </NavLink>

        <NavLink exact="true" className="about-link" to="/about">
          <FaUser />
        </NavLink>

        <NavLink exact="true" className="contact-link" to="/contact">
          <FaEnvelope />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            href="https:www.linkedin.com/in/wahab-junior"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a
            href="https:www.linkedin.com/in/wahab-junior"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

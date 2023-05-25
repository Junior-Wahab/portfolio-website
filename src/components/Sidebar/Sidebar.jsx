import { Link, NavLink } from "react-router-dom";
import {
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <h3 className="">JMW</h3>
      </Link>

      <nav>
        <NavLink exact="true" to="/">
          <FaHome className="icon" />
          Home
        </NavLink>

        <NavLink to="/about">
          <FaUserAlt className="icon" />
          About
        </NavLink>

        <NavLink to="/portfolio">
          <FaBriefcase className="icon" />
          Portfolio
        </NavLink>

        <NavLink to="/contact">
          <FaEnvelope className="icon" />
          Contact
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/wahab-junior"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/Jnrchry" rel="noreferrer" target="_blank">
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/jnrmwahab"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

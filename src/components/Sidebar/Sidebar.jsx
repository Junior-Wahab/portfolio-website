import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaTimes,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import "./sidebar.scss";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <h3 className="">JMW</h3>
      </Link>

      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink exact="true" to="/" onClick={() => setShowNav(false)}>
          <FaHome className="icon" />
          Home
        </NavLink>

        <NavLink to="/about" onClick={() => setShowNav(false)}>
          <FaUserAlt className="icon" />
          About
        </NavLink>

        <NavLink to="/portfolio" onClick={() => setShowNav(false)}>
          <FaBriefcase className="icon" />
          Portfolio
        </NavLink>

        <NavLink to="/contact" onClick={() => setShowNav(false)}>
          <FaEnvelope className="icon" />
          Contact
        </NavLink>
        <FaTimes
          color="#ffd700"
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
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
      <FaBars
        color="#ffd700"
        className="hamburger-icon"
        onClick={() => setShowNav(true)}
      />
    </div>
  );
};

export default Sidebar;

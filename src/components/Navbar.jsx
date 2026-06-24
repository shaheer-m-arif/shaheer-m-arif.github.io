import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

  return (
    <nav className="nav-rail">
      <div className="nav-brand">
        <span className="nav-sa">SA</span>
      </div>

      <div className="nav-links">
        <NavLink to="/" end className={linkClass}>
          <span className="nav-indicator" />
          Home
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          <span className="nav-indicator" />
          Projects
        </NavLink>
        <NavLink to="/experience" className={linkClass}>
          <span className="nav-indicator" />
          Experience
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          <span className="nav-indicator" />
          Contact
        </NavLink>
      </div>

      <div className="nav-footer">
        <div style={{ fontWeight: 600, color: "rgba(238,242,255,0.75)" }}>Shaheer Arif</div>
        <div>EE · University of Calgary</div>
      </div>
    </nav>
  );
}

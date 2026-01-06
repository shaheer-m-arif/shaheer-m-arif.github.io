import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav style={{ position: "relative", zIndex: 10 }}>
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/projects" className={linkClass}>Projects</NavLink>
      <NavLink to="/experience" className={linkClass}>Experience</NavLink>
      <NavLink to="/contact" className={linkClass}>Contact</NavLink>
    </nav>
  );
}
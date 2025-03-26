import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/ex1" className={({ isActive }) => (isActive ? "active" : "")}>TodoApp</NavLink>
        </li>
        <li>
          <NavLink to="/ex2" className={({ isActive }) => (isActive ? "active" : "")}>TodoAppLocalStorage</NavLink>
        </li>
        <li>
          <NavLink to="/ex3" className={({ isActive }) => (isActive ? "active" : "")}>Multibanco</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

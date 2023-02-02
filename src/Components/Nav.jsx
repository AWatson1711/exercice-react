import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Inscription">Inscription</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/Newsletter">Newsletter</NavLink>
        </li>
        <li>
          <NavLink to="/UploadFile">UploadFile</NavLink>
        </li>
        <li>
          <NavLink to="/Comment">Comment</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

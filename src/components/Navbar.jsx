import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

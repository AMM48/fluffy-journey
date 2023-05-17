import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/fluffy-journey">
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/fluffy-journey/about">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

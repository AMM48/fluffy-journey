import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink path to="/fluffy-journey">
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink path to="/about">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

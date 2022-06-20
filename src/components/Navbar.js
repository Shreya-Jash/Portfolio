import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            
          <NavLink to="/" >
            Home
          </NavLink>
          <NavLink to="/About" >
            About
          </NavLink>
          <a href="https://github.com/Shreya-Jash?tab=repositories">Projects</a>
          <NavLink to="/Contact" >
            Contact
          </NavLink>
          <NavLink to="/resume" >
            Resume
          </NavLink>
        </nav>
    )
}
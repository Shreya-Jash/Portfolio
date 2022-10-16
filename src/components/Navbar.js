import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
  const [isMobile, setIsMobile]= useState(false);
    return(
        <nav>
          <button 
            className="mobile-responsive"
            onClick={() => setIsMobile(!isMobile)}    
          >
              {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
          <ul 
            className={isMobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setIsMobile(false)}
          >
            <NavLink to="/" >
              <li>Home</li>
            </NavLink>
            <NavLink to="/About" >
              <li>About</li>
            </NavLink>
            <a href="https://github.com/Shreya-Jash?tab=repositories" ><li>Projects</li></a>
            <NavLink to="/Contact" >
              <li>Contact</li>
            </NavLink>
              <a href="https://drive.google.com/file/d/15BVk47KC6zGdnob_FNkNn7ZCigf4pObS/view?usp=sharing"><li>Resume</li></a>
          </ul>  
          
        </nav>
    )
}


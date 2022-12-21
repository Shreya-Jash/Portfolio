import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
// import { HashLink } from "react-router-hash-link";

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
            <Link to="home">
              <li>Home</li>
            </Link>
            <Link to="about" >
              <li>About</li>
            </Link>
            <Link to="project">
              <li>Projects</li>
            </Link>
            {/* <a href="https://github.com/Shreya-Jash?tab=repositories" ><li>Projects</li></a> */}
            <Link to="contact">
              <li>Contact</li>
            </Link>
          </ul>  
          
        </nav>
    )
}


import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";

export default function NavBar(){
  const [isMobile, setIsMobile]= useState(false)

  function handleClick()
  {
    setIsMobile(!isMobile)
  }

  return(
    <nav>
      <button className="mobile-responsive" onClick={handleClick}>
          {/* {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>} */}
          <i className="fas fa-bars"></i>
      </button>
      <ul 
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="home" smooth={true}>
          <li>Home</li>
        </Link>
        <Link to="about" smooth={true} >
          <li>About</li>
        </Link>
        <Link to="project" smooth={true}>
          <li>Projects</li>
        </Link>
        <Link to="contact" smooth={true}>
          <li>Contact</li>
        </Link>
      </ul>     
    </nav>
  )
}


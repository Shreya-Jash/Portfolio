import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import "./styles/about.css"
import "./styles/contact.css"
import "./styles/footer.css"
import "./styles/navbar.css"

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";

export default function App(){
    return(
        // <Router>
        <div className="app">
            <NavBar /> 
            <Element name="home">
                <Home />
            </Element>
            <Element name="about">
                <About />
            </Element>
            <Element name="project">
                <Project />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
            {/* <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path="/Project" element={<Project />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>  */}
            <Footer />
            </div>
    ) 
}
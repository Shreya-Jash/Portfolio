import React from "react";
import {  Element } from 'react-scroll'

import "./styles/about.css"
import "./styles/contact.css"
import "./styles/footer.css"
import "./styles/navbar.css"
import "./app.css"

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import ScrollUp from "./components/ScrollUp";

export default function App(){
    return(
        // <Router>
        <div className="app">
            <NavBar /> 
            <div className="appContainer">
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
            </div>
            <ScrollUp />
            <Footer />
        </div>
    ) 
}
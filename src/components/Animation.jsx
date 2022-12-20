import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from '../pages/Contact';
import Project from '../pages/Project';

function Animation() {
    const location=useLocation();

    return (
    <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
            <Route exact path='/' element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
}

export default Animation
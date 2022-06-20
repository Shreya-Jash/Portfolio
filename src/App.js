import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import "./styles/about.css"
import "./styles/contact.css"
import "./styles/footerstyle.css"

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App(){
    return(
        <AnimatePresence>
            <Router>
                <NavBar /> 
                
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
                <Routes>
                    <Route path='/About' element={<About />} />
                </Routes>
                
                <Routes>
                    <Route path='/Contact' element={<Contact />} />
                </Routes>
                <Routes>
                    <Route path='/Resume' element={<Resume />} />
                </Routes>
                <Footer />
            </Router>
        </AnimatePresence>
        
    ) 
}
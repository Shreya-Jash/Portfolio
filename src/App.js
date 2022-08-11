import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import "./styles/about.css"
import "./styles/contact.css"
import "./components/footer.css"
import "./components/navbar.css"

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
                <Footer />
            </Router>
        </AnimatePresence>
        
    ) 
}
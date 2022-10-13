import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

import "./styles/about.css"
import "./styles/contact.css"
import "./styles/footer.css"
import "./styles/navbar.css"

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Animation from "./components/Animation";

export default function App(){
    return(
            <Router>
                <NavBar /> 
                <Animation />
                <Footer />
            </Router>
    ) 
}
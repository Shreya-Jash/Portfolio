import React from "react";
import myPic from "../images/myPic.png"
import "../styles/home.css"
import { motion } from "framer-motion";
import myPic2 from "../images/myPic2.png";

export default function Home(){
    return(
        <motion.main 
            className="main-text" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="main--text">
                <h1>Hi, I'm <span class="myname text-amber-300">Shreya Jash</span><span className="wave">👋</span></h1>
                <section className="mypicmobile"><img src={myPic2} className="myPicmobile" alt="myPicture"/></section>
                
                <h1 className="main-h1">Designer and a Frontend Developer.</h1>
                <p className="main-para">A very enthusiatic person who loves creating new and variety of designs.
                </p>
            </div>
            <section className="myPic-sec">
                <img src={myPic} className="myPic" alt="myPicture"/>
            </section>
            
        </motion.main>
    )
}
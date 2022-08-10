import React from "react";
import myPic from "../images/myPic.png"
import "../styles/home.css"

export default function Home(){
    return(
        <main className="main-text">
            <div className="main--text">
                <h2>Hi, I'm Shreya</h2>
                <h1 className="main-h1">Designer, Frontend Developer.</h1>
                <p className="main-para">A very enthusiatic person who loves creating new and variety of designs.
                    <br />Graphics Designer at IEEE Student branch- UEM Kolkata.
                </p>
            </div>
            <section className="myPic-sec">
                <img src={myPic} className="myPic"/>
            </section>
            
        </main>
    )
}
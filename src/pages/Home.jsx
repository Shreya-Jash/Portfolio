import React from "react";
import myPic from "../images/myPic.png"
import "../styles/home.css"
import myPic2 from "../images/myPic2.png";

export default function Home(){
    return(
        <div className="home" id="home">
            <div className="main--text">
                <h1>Hi, I'm <span className="myname text-amber-300">Shreya Jash</span><span className="wave">👋</span></h1>
                <section className="mypicmobile"><img src={myPic2} className="myPicmobile" alt="myPicture"/></section>
                
                <h1 className="main-h1">Designer and a Frontend Developer.</h1>
                <p className="main-para">I belive in the art of Programming...💛
                </p>
                <a href="https://drive.google.com/file/d/15BVk47KC6zGdnob_FNkNn7ZCigf4pObS/view?usp=sharing">
                    <button>Download CV</button>
                </a>
            </div>
            <section className="myPic-sec">
                <img src={myPic} className="myPic" alt="myPicture"/>
            </section>
        </div>
    )
}
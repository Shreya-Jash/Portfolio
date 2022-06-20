import React from "react";



          


import c from "../images/icons_language/c.png"
import cpp from "../images/icons_language/cpp.png"
import python from "../images/icons_language/python.png"
import java from "../images/icons_language/java.png"



import html from "../images/icons_frontend/html.png"
import css from "../images/icons_frontend/css.png"
import js from "../images/icons_frontend/js.png"
import react from "../images/icons_frontend/react.png"


import canva from "../images/icons_graphics/canva.png"
import figma from "../images/icons_graphics/figma.png"
import photoshop from "../images/icons_graphics/photoshop.png"
import illustrator from "../images/icons_graphics/illustrator.png"

export default function About(){
    return(
        <div>
                <h1 className="about-h1">A liitle about me-</h1>
                <p className="about-para">
                    <i className="quote">"Never lose youself into the world of dreams, Start working on it practically today..."</i>
                    <br /><br/>
                    Hello, I am Shreya Jash- 
                    from Satgachia, West Bengal.<br />
                    From very small age I love to draw and paint.<br />
                    Now, I am Graphics Designer and a Frontend Developer as well.<br />
                    I use HTML,CSS and JavaScript for my Development.I use React JS as a Framework.
                </p>
            <div className="education" >
                
                <div>
                <h2>Schooling-</h2>
                    <ul>
                        <li><a href="http://www.claretsahanagar.com/"  target="_blank">Claret Scool,Sahanagar. (2006-2018)</a></li>
                        <li><a href="https://web.memaricrystalmodelschool.edu.in/"  target="_blank">Memari Crystal Model School. (2018-2020)</a></li>
                    </ul>
                </div>
                
                <div>
                    <h2>College-</h2>
                    <ul>
                        <li><a href="https://uem.edu.in/uem-kolkata/"  target="_blank">University Of Engineering And Management, Kolkata. (2020-2024)</a></li>
                    </ul>
                </div>   
                
            </div>
            <div className="skill">
            <h2>My Skills-</h2>
            <section className="skill2">
            <h3>Languages-</h3>
                <p>
                    <img src={c} className="language-icon"/>
                    <img src={cpp} className="language-icon"/>
                    <img src={python} className="language-icon"/>
                    <img src={java} className="language-icon"/>
                </p>
                <h3>Graphics-</h3>
                <p>
                    <img src={canva} className="graphics-icon"/>
                    <img src={figma} className="graphics-icon"/>
                    <img src={photoshop} className="graphics-icon"/>
                    <img src={illustrator} className="graphics-icon"/>
                </p>
                <h3>Frontend Development-</h3>
                <p className="frontend-icons">
                    <img src={html} className="frontend-icon"/>
                    <img src={css} className="frontend-icon"/>
                    <img src={js} className="frontend-icon"/>
                    <img src={react} className="frontend-icon"/>
                </p>
                <h3>Others-</h3>
                
            <i class="devicon-html5-plain"></i>
            </section>
                
            </div>
                
          
          

        </div>
    )
}
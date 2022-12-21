import React from "react";

import c from "../images/icons_language/c.png"
import cpp from "../images/icons_language/cpp.png"
import python from "../images/icons_language/python.png"
import java from "../images/icons_language/java.png"

import canva from "../images/icons_graphics/canva.png"


export default function About(){
    return(
        <div className="about" id="about">
                <h1 className="about-h1">A liitle about me-</h1>
                <p className="about-para">
                    <i className="quote">"Never lose youself into the world of dreams, Start working on it practically today..."</i>
                    <br /><br/>
                    Hello, I am Shreya Jash- 
                    from Satgachia, West Bengal.<br />
                    From very small age I love to draw and paint.<br />
                    Now, I am Graphics Designer and a Frontend Developer as well.<br />
                    I love to explore and learn new technologies.
                </p>
            <div className="educations" >
                <h1>Education-</h1>
                <div className="education">
                <div>
                <h2>Schooling-</h2>
                    <ul>
                        <li><a href="http://www.claretsahanagar.com/" target="_blank" rel="noreferrer">Claret Scool,Sahanagar. (2006-2018)</a></li>
                        <li><a href="https://web.memaricrystalmodelschool.edu.in/"  target="_blank" rel="noreferrer">Memari Crystal Model School. (2018-2020)</a></li>
                    </ul>
                </div>
                
                <div>
                    <h2>College-</h2>
                    <ul>
                        <li><a href="https://uem.edu.in/uem-kolkata/"  target="_blank" rel="noreferrer">University Of Engineering And Management, Kolkata. (2020-2024)</a></li>
                    </ul>
                </div>   
                </div>
                
                
            </div>
            
            <div className="skill">
                <h2>My Skills-</h2>
                <section className="skill2">
                    <h3>Languages-</h3>
                        <div className="language">
                            <img src={c} alt="c" className="language-icon"/>
                            <img src={cpp} alt="cpp" className="language-icon"/>
                            <img src={python} alt="python" className="language-icon"/>
                            <img src={java} alt="java" className="language-icon"/>
                        </div>
                        <h3>Graphics-</h3>
                        <div className="graphics-icon" >
                            <img src={canva} alt="canva" className="graphics-icon"/>
                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="graphics-icon" height="40px" alt="figma"/>
                
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" className="graphics-icon" height="40px" alt="photoshop"/>
                
                        </div>
                        <h3>Frontend Development-</h3>
                        <div className="frontend-icons">
                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="html" className="frontend-icon"/>
                
                                    
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css" className="frontend-icon"/>
                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" className="frontend-icon" />
                
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js" className="frontend-icon"/>
                
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react"
                                className="frontend-icon"/>
                
                        </div>
                        <h3>Others-</h3>
                        <div className="other-icon">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original-wordmark.svg" alt="googlecloud" className="othericon" />
                            
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="vscode" className="othericon" />
                            <i class="devicon-github-original"></i>
                        </div>
                </section>
            </div>
                
          
          

        </div>
    )
}
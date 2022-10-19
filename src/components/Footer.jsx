import React from "react";

export default function Footer(){
  return(
      <footer className="footer-div absolute inset-x-0 bottom-0 h-16 right-px">
          <p className="foot-text">Designed and developed by Shreya Jash with ❤️</p>
          <div className="links">
            <a href="https://github.com/Shreya-Jash" className="a2" target="_blank" rel="noreferrer" >
              <i class="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/shreya-jash-a140191b8/" className="a2" target="_blank" rel="noreferrer" >
              <i class="devicon-linkedin-plain"></i>
            </a>
            <a href="https://twitter.com/jash_shre" className="a2" target="_blank" rel="noreferrer" >
              <i class="devicon-twitter-original"></i>
            </a>
          </div>
          
      </footer>

  )
}
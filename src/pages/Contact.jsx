import React from "react";

export default function Contact(){
    return(
        <div className="contact" id="contact">
           
            <div className="contact-det">
                <h1>
                    Want to connect?
                </h1>
                <p className="contact-p">I would love to hear from you...😊<br />
                Email - <a href="shreyajash2001@gmail.com">shreyajash2001@gmail.com</a>
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
                </p>
            </div>
            <form className="form-con">
                <section className="contact-det2">
                    <input 
                            type="name" 
                            placeholder="Name"
                            className="contact-ne"
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email"
                        className="contact-ne"
                    />
                </section>
                <textarea 
                    type="text" 
                    placeholder="Your Note"
                    className="note"
                />
                <section className="button-sec">
                    <button className="button"><span>Send</span></button>
                </section>
                
            </form>
        </div>
    )
}
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
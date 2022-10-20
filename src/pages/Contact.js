import React from "react";
import {motion} from 'framer-motion'

export default function Contact(){
    return(
        <motion.div className="contact-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
           
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
           
            
        </motion.div>
    )
}
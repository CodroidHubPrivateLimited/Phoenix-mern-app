import React from 'react'
import "./contactUs.css"
import contact from "./contact.webp"
import call from "./call.svg"
import mail from "./mail.svg"
import at from "./at.svg"


function ContactUs() {
    return (

<div className='main-container'>
        
        <h3>Contact Us</h3>
        <p>Questions, bug reports, feedback--we're here for it all.</p>
        <div class="container">
    
        <div class='img-container'>
                <img src={contact} alt='ContactUs' className='image1'/>;
        </div>
    
        <div class='img-container1'>
                <img src={call} alt='Call us' />;
        </div>
    
        <div class='img-container2'>
                <img src={mail} alt='Mail us' />;
        </div>
    
        <div class='img-container3'>
                <img src={at} alt='Mail us'/>;
        </div>
    
        <form action="#" method="POST" >
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.." required />
    
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email.." required />
    
            <label for="message">Message</label>
            <textarea rows="5" cols="28" placeholder="Message" className='textarea'></textarea>
    
            <input type="submit" value="Submit" />
        </form>


        <div className='google_map'>  
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.2632565149943!2d85.33064333429294!3d27.704562021724797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bc9e761333%3A0xce4a24441ce17be4!2z4KSr4KS_4KSo4KS_4KSV4KWN4KS4IOCkleCksuClh-CknCDgpIXgpKsg4KSu4KWN4KSv4KS-4KSo4KWH4KSc4KSu4KWH4KSo4KWN4KSf!5e0!3m2!1sen!2snp!4v1719144463620!5m2!1sen!2snp" width="599" height="375" style={{border:"0"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>
    </div>
    
    )
}

export default ContactUs
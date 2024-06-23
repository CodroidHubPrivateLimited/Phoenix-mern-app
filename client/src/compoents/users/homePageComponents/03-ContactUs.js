import React from 'react'

import "./ContactUs.css"
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
</div>
</div>



    )
}

export default ContactUs
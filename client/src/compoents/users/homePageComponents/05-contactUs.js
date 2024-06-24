import React from 'react'
import "./contactUs.css"
import image from "./backremove.png"


function ContactUs() {
    return (
         <div className='main-container'>
            <p className='heading' > 
            <img src={image} alt='image'className='icon'/>
    <span className='text'>
                Connect with Us
                </span>
                </p>
            <div className='flex-container'>
           <div className='Hi'>
        
            <form>
                <label> First  Name:
                    <input type="text" name="firstName" placeholder='First Name'/>
                </label>        
                <label> Last Name:
                    <input type="text" name="lastName" placeholder='Last Name'/>
                </label>
                <label>Email:
                    <input type="email"  name="email" placeholder='Email'/>
                </label>
                <label>Message:
                    <textarea name="message "  placeholder='Message' rows={3} cols={4}></textarea>
                </label>
                <button type="submit" className='submit'>Submit</button>
                </form>
                </div>
                <div id='google map'>  
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.2632565149943!2d85.33064333429294!3d27.704562021724797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bc9e761333%3A0xce4a24441ce17be4!2z4KSr4KS_4KSo4KS_4KSV4KWN4KS4IOCkleCksuClh-CknCDgpIXgpKsg4KSu4KWN4KSv4KS-4KSo4KWH4KSc4KSu4KWH4KSo4KWN4KSf!5e0!3m2!1sen!2snp!4v1719144463620!5m2!1sen!2snp" width="400" height="375" style={{border:"0"}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                
                </div>
     </div>
    
    
    )
}

export default ContactUs
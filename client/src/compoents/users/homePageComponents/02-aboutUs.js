import React from 'react'

import "../../../App.css"

function AboutUs() {
    return (
        <div class="homepage-component narrow">
            <div id="lhs">
                <h3>About Us</h3>
                <p>Exercise plays a key role in the physical and mental wellbeing of people of all ages. Research shows that moderate physical activity can reduce the risk of heart disease, depression, dementia, and several types of cancers.</p>
                <a href='/about-us'>Read more</a>
            </div>
            <div id='rhs'>
                <div class='img-container'>
                    <img src='/images/users/about-us-page/mbp-girl.jpg' alt='about us image' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
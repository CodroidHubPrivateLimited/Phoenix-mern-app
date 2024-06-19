import React from 'react';
import "../../../App.css";

function Scholarships() {
    return (
        <div class="container">
            <h3>The Scholarships</h3>
            <div class="scholarship">
                <div className="scholarship-cont">
                    <div class="pics"> 
                        <img src="/images\users\Scholarship-page/sports-tools.jpg" alt="Athletic Scholarships" />
                    </div>
                    <h4>Athletic Scholarships</h4>
                </div>
                
                <div className="scholarship-cont">
                    <div class="pics">
                    <img src="\images\users\Scholarship-page\ethnic.jpg" alt="Ethnic-Based Scholarships" />
                    </div>
                    <h4>Ethnic-Based Scholarships</h4>
                        
                    
                </div>
                <div className="scholarship-cont">
                <div class="pics">
                <img src="\images\users\Scholarship-page\need.jpg" alt="Need-Based Scholarships" />
                </div>
                    <h4>Need-Based Scholarships</h4>

                </div>
            </div>
            <a href='/scholarships' className="read-more">Read more</a>
        </div>
    );
}

export default Scholarships;
import React from 'react'
import './about.css'
import lo from '../../images/lo.jpeg'
import he from '../../images/he.webp'
import image from '../../images/image.png'


function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="content">
        <div className="section">
          <div className="text-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide quality education to students and foster a
              learning environment that encourages excellence. We aim to create
              opportunities for personal growth and academic success.Our commitment
              to inclusivity ensures that all students, regardless of background or
              ability, have the opportunity to succeed. We encourage our students to
              be active, engaged citizens who contribute positively to their communities.
              At we are dedicated to creating a safe and inclusive environment
              where every student feels valued and respected, and where they can develop the
              skills and character necessary to become leaders of tomorrow.

            </p>
            <a href="">Read more</a>
          </div>
          <div className="image-section">
            <img src={image} alt="School Image 1" />
          </div>
        </div>
        <div className="section">
          <div className="image-section">
            <img src={lo} alt="School Image 2" />
          </div>
          <div className="text-section">
            <h2>Our Vision</h2>
            <p>
              We envision a community where every student has the chance to achieve
              their fullest potential. Our goal is to cultivate innovative thinkers
              and lifelong learners who will make a positive impact on the world.
              We envision a school where innovation and creativity are encouraged,
              where students are empowered to think critically and solve complex problems.
              We aim to prepare our students to be global citizens, equipped with the skills,
              knowledge, and values to navigate an increasingly interconnected world with integrity
              and empathy. Our vision is to cultivate a supportive and inclusive environment that fosters
              personal growth and leadership development.
            </p>
            <a href="">Read more</a>
          </div>
        </div>
        <div className="section">
          <div className="text-section">
            <h2>Our Values</h2>
            <p>
              Integrity, Respect, Responsibility, Excellence, and Collaboration are
              the core values that guide our actions and decisions. We believe in
              creating a supportive and inclusive environment for all.We strive for
              excellence in all aspects of our work, seeking to achieve the highest
              standards of academic achievement, teaching, and learning.We treat everyone
              with respect, dignity, and empathy, valuing the diversity of our community
              and recognizing the worth of each individual.


            </p>
            <a href="">Read more</a>
          </div>
          <div className="image-section">
            <img src={he} alt="School Image 3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

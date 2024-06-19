import React from 'react';
import './nav.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerleft">
        <h2>School Name</h2>
        <p>Our mission is to provide high-quality education that nurtures and inspires students to achieve their full potential.</p>
        <div className="social-media">
          <a href="https://www.facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footermiddle">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/admissions">Admissions</a></li>
          <li><a href="/academics">Academics</a></li>
          <li><a href="/events">Events</a></li>
        </ul>
      </div>
      <div className="footer__right">
        <h3>Contact</h3>
        <p>123 School Street, City, State, ZIP</p>
        <p>Email: info@school.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
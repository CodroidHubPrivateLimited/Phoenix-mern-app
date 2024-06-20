import React from 'react';
import './nav.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>School Name</h2>
        <p>Our mission is to provide high-quality education that nurtures and inspires students to achieve their full potential.</p>
        <div className="social-media">
          <a href="https://www.facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      <div className="footer-middle">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/faculties">Faculties</a></li>
          <li><a href="/scholarships">Scholarships</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact</h3>
        <p>Caltech University, 123 School Street, City</p>
        <p>Email: School@school.com</p>
        <p>Phone: +977 **********</p>
      </div>
    </footer>
  );
};

export default Footer;

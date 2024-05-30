// src/Components/Footer/Footer.jsx

import React from 'react';
import './Footer.css'; // Import CSS

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>UltraShine Garage</h2>
          <p>Providing top-notch automotive services to keep your vehicle looking and running like new. Visit us for all your car detailing, tinting, PPF, and ceramic coating needs.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/teams">Our Team</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: info@ultrashinegarage.com</li>
            <li>Phone: +254 234 567 65</li>
            <li>Address: 34 Nairobi City, Industrial Area, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        &copy; 2024 Kaizen Group | Boaz
      </div>
    </footer>
  );
};

export default Footer;

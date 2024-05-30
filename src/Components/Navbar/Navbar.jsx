import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="menu-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="book-button">
          <Link to="/contact" className="unstyled-link"> Book Appointment</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <div className="appointment-content">
      <div className="appointment-header">
      <h1>Book an Appointment</h1>
      <p>Contact Details</p>
      </div>

      <div className="contact-card">
        <p><strong>Address:</strong> 123 Industrial Area, Nairobi, AC 12345</p>
        <p><strong>Phone:</strong> +254 456-7890</p>
        <p><strong>Email:</strong> info@ultrashinegarage.com</p>
        <p><strong>Hours:</strong></p>
        <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
        <p>Sat: 10:00 AM - 4:00 PM</p>
        <p>Sun: 10:00 AM - 1:00 PM</p>
      </div>

      <form className="appointment-form">
        <div className="form-group">
          <p>Name</p>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <p>E-mail</p>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <p>Phone</p>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <p>Preferred Date</p>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="form-group">
          <p>Message</p>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

  
export default Contact;

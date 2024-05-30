// src/Components/Testimonials/Testimonials.jsx

import React from 'react';
import './Testmonials.css'; // Import CSS

import client1 from '../Assets/t1.jpg';
import client2 from '../Assets/t2.jpg';
import client3 from '../Assets/t3.jpg';
import client4 from '../Assets/t4.jpg';
import client5 from '../Assets/t5.jpg';
import client6 from '../Assets/t6.jpg';
import client7 from '../Assets/t7.jpg';
import client8 from '../Assets/t8.jpg';
import client9 from '../Assets/t9.jpg';
import client10 from '../Assets/t10.jpg';
import client11 from '../Assets/t11.jpg';
import client12 from '../Assets/t12.jpg';
import client13 from '../Assets/t13.jpg';
import client14 from '../Assets/t14.jpg';
import client15 from '../Assets/t15.jpg';
import client16 from '../Assets/t16.jpg';

const Testmonials = () => {
  const testimonials = [
    { img: client1, name: 'John Doe', testimonial: 'Excellent service and friendly staff!' },
    { img: client2, name: 'Jane Smith', testimonial: 'My car looks brand new thanks to UltraShine!' },
    { img: client3, name: 'Michael Brown', testimonial: 'Professional and quick service.' },
    { img: client4, name: 'Emily Johnson', testimonial: 'Highly recommend this garage to everyone!' },
    { img: client5, name: 'Chris Lee', testimonial: 'Great attention to detail and quality work.' },
    { img: client6, name: 'Anna Wilson', testimonial: 'Customer service is top-notch.' },
    { img: client7, name: 'David Martinez', testimonial: 'Very satisfied with the paint job.' },
    { img: client8, name: 'Sophia Anderson', testimonial: 'Affordable prices and excellent results.' },
    { img: client9, name: 'James Thompson', testimonial: 'Friendly staff and great service.' },
    { img: client10, name: 'Linda Davis', testimonial: 'They fixed my car quickly and efficiently.' },
    { img: client11, name: 'Robert White', testimonial: 'Very professional and thorough.' },
    { img: client12, name: 'Patricia Harris', testimonial: 'Best garage in town!' },
    { img: client13, name: 'Daniel Clark', testimonial: 'Highly skilled mechanics.' },
    { img: client14, name: 'Jennifer Lewis', testimonial: 'They always do a fantastic job.' },
    { img: client15, name: 'Mark Walker', testimonial: 'My car runs perfectly now!' },
    { img: client16, name: 'Lisa Hall', testimonial: 'I wouldn’t trust my car with anyone else.' },
  ];

  return (
    <div className="testimonial-container">
      <section className="testimonial-header">
        <h1>What Our Clients Say</h1>
        <hr />
      </section>

      <section className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.img} alt={testimonial.name} />
            <h2>{testimonial.name}</h2>
            <p>{testimonial.testimonial}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testmonials;

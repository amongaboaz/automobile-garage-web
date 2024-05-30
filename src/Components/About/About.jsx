import React from 'react';
import './About.css'; // Import CSS
import { Link } from 'react-router-dom';

import car1 from '../Assets/Ceramic.jpg';
import car2 from '../Assets//Detailing.jpg';
import car3 from '../Assets/PPF.jpg';
import car4 from '../Assets/Paint.jpg';
import car5 from '../Assets/PPF.jpg';
import car6 from '../Assets/TINT.jpg';
import car7 from '../Assets/PPF.jpg';
import car8 from '../Assets/Paint.jpg';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About UltraShine Garage</h1>
        <p>
          UltraShine Garage is committed to providing top-notch automotive services to our valued customers. Our team of experienced professionals uses the latest technology and high-quality materials to ensure your vehicle looks and performs at its best.
        </p>
      </section>

      <section className="about-services">
        <h2>Our Services</h2>
        <div className="car-cards">
          <div className="car-row">
            <div className="car-card">
              <img src={car1} alt="Ceramic Coating" />
              <h2>Ceramic Coating</h2>
              <p>Protect your car's paint with our advanced ceramic coating services.</p>
              <Link to="/ceramic"><button>Ceramic Coating</button></Link>
            </div>
            <div className="car-card">
              <img src={car2} alt="Detailing" />
              <h2>Detailing</h2>
              <p>Keep your car looking brand new with our professional detailing services.</p>
              <Link to="/detailing"><button>Detailing</button></Link>
            </div>
            <div className="car-card">
              <img src={car3} alt="Paint Protection Film" />
              <h2>Paint Protection Film</h2>
              <p>Shield your car's paint from scratches and chips with our PPF services.</p>
              <Link to="/ppf"><button>PPF</button></Link>
            </div>
            <div className="car-card">
              <img src={car4} alt="Paint Work" />
              <h2>Paint Work</h2>
              <p>High-quality paint services to give your car a fresh, new look.</p>
              <Link to="/paint"><button>Paint Work</button></Link>
            </div>
          </div>
          <div className="car-row">
            <div className="car-card">
              <img src={car5} alt="Ceramic Coating" />
              <h2>Ceramic Coating</h2>
              <p>Protect your car's paint with our advanced ceramic coating services.</p>
              <Link to="/ceramic"><button>Ceramic Coating</button></Link>
            </div>
            <div className="car-card">
              <img src={car6} alt="Tint" />
              <h2>Window Tinting</h2>
              <p>Improve your car's look and privacy with our premium window tinting.</p>
              <Link to="/tinting"><button>Tinting</button></Link>
            </div>
            <div className="car-card">
              <img src={car7} alt="Spare Parts" />
              <h2>Spare Parts</h2>
              <p>Get high-quality spare parts for your car at competitive prices.</p>
              <Link to="/spareparts"><button>Spare Parts</button></Link>
            </div>
            <div className="car-card">
              <img src={car8} alt="Consultation" />
              <h2>Consultation</h2>
              <p>Speak to our experts to find the best solutions for your car.</p>
              <Link to="/consultation"><button>Consultation</button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

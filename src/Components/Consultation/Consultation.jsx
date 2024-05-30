import React from 'react';
import './Consultation.css';
import con_1 from '../Assets/con1.jpg';
import con_2 from '../Assets/con2.jpg';
import con_3 from '../Assets/con3.jpg';

const Consultation = () => {
  return (
    <div className="consultation">
      <h1>Consultation Services</h1>
      <div className="consultation-types">
        <div className="consultation-type">
          <img src={con_1} alt="General Consultation" />
          <h2>General Consultation</h2>
          <p>Get expert advice on maintaining and enhancing your vehicle's performance and appearance.</p>
        </div>
        <div className="consultation-type">
          <img src={con_2} alt="Paint and Detailing Consultation" />
          <h2>Paint and Detailing Consultation</h2>
          <p>Discuss the best options for paint protection, ceramic coating, and detailing services to keep your car looking new.</p>
        </div>
        <div className="consultation-type">
          <img src={con_3} alt="Performance Enhancement Consultation" />
          <h2>Performance Enhancement Consultation</h2>
          <p>Learn about upgrades and modifications to boost your vehicle's performance and efficiency.</p>
        </div>
      </div>
    </div>
  );
}

export default Consultation;

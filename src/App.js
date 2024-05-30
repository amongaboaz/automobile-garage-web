import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Hero/Hero';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import Testimonials from './Components/Testmonials/Testmonials';
import Footer from './Components/Footer/Footer';
import Consultation from './Components/Consultation/Consultation';
import Ceramic from './Components/Ceramic/Ceramic';
import Detailing from './Components/Detailing/Detailing';
import Ppf from './Components/Ppf/Ppf';
import Paint from './Components/Paint/Paint';
import Spareparts from './Components/Spareparts/Spareparts';
import Tinting from './Components/Tinting/Tinting';
import Know from './Components/Know/Know';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeWithKnow />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/ceramic" element={<Ceramic />} />
          <Route path="/detailing" element={<Detailing />} />
          <Route path="/ppf" element={<Ppf />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/spareparts" element={<Spareparts />} />
          <Route path="/tinting" element={<Tinting />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomeWithKnow = () => (
  <div>
    <Home />
    <Know />
  </div>
);

export default App;

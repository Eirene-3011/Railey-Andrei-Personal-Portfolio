import React from 'react';
import './Services.css';
import { FaCode, FaCropAlt, FaMobileAlt, FaGlobe } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <p className="services-subtext">
          I offer modern and scalable <span className="gradient-text">digital solutions</span> that combine clean design, seamless user experience,
          and mobile-ready functionality — tailored to meet your specific goals.
        </p>
      </div>

      <div className="services-list">
        <div className="service-item">
          <FaCode className="service-icon" />
          <h2>Web Designing</h2>
          <p>
            My web design service is dedicated to crafting captivating online experiences. 
            With a perfect blend of creativity and technical expertise, I design sleek and 
            user-friendly websites that engage, impress, and drive results.
          </p>
        </div>
        <div className="service-item">
          <FaCropAlt className="service-icon" />
          <h2>UI/UX Designing</h2>
          <p>
            I create intuitive and visually captivating interfaces, ensuring seamless 
            user experiences that elevate your digital products to the next level.
          </p>
        </div>
        <div className="service-item">
          <FaMobileAlt className="service-icon" />
          <h2>Creating Mobile Applications</h2>
          <p>
            I design and develop innovative and user-friendly mobile apps 
            for both iOS and Android platforms.
          </p>
        </div>
        <div className="service-item">
          <FaGlobe className="service-icon" />
          <h2>Creating Web Applications</h2>
          <p>
            I build dynamic, scalable, and secure web applications that streamline 
            processes, improve efficiency, and deliver seamless online experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

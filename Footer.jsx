import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div onClick={() => {
            const section = document.getElementById("home");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="Railey Logo" className="footer-logo" />
          </div>
          <p className="outfit-font">
            I’m a frontend developer from the Cavite State University - Main Campus with a passion for creating intuitive and visually appealing digital experiences.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-socials">
            <a href="https://www.facebook.com/eirene.inc" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebook />
            </a>
            <a href="https://github.com/Eirene-3011" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/railey-andrei-acosta-3b4980297/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2025 Railey Acosta. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Connect with me</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

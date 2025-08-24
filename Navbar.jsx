import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenu(id);
    setMobileMenuOpen(false); // Close menu on click
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className='navbar'>
      <img src={logo} alt="logo" />
      
      {/* Hamburger Icon */}
      <div className="nav-toggle" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <li onClick={() => scrollToSection("home")} className={menu === "home" ? "active" : ""}><p>Home</p></li>
        <li onClick={() => scrollToSection("about")} className={menu === "about" ? "active" : ""}><p>About Me</p></li>
        <li onClick={() => scrollToSection("services")} className={menu === "services" ? "active" : ""}><p>Services</p></li>
        <li onClick={() => scrollToSection("portfolio")} className={menu === "portfolio" ? "active" : ""}><p>Portfolio</p></li>
        <li onClick={() => scrollToSection("contact")} className={menu === "contact" ? "active" : ""}><p>Contact</p></li>
      </ul>
    </div>
  );
};

export default Navbar;

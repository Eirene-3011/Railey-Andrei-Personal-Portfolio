import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile-img.png';

const Hero = () => {

    const scrollToContacts = () => {
        const contacts = document.getElementById("contact");
        if (contacts) {
            contacts.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero">
            {/* ✅ Clickable Profile Image */}
            <a href="https://www.facebook.com/eirene.inc" target="_blank" rel="noopener noreferrer">
                <img src={profile_img} alt="profile" className="hero-img" />
            </a>

            <h1><span>Hi, I'm Railey Acosta,</span> front-end web developer at CvSU.</h1>
            <p>
                I am a fourth-year Bachelor of Science in Computer Science student at Cavite State University – Main Campus,
                with a strong passion for front-end web development.
            </p>
            <div className="hero-action">
                <div className="hero-connect" onClick={scrollToContacts}>Connect with me</div>
                <div className="hero-resume">
                    <a
                        href="/ACOSTA_RESUME.pdf"
                        download="Railey_Andrei_Acosta_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => alert('Resume download started!')}
                        style={{ color: 'white', textDecoration: 'none' }}
                    >
                        My Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;

// ✅ About.jsx (Updated)
import React, { useState } from 'react';
import './About.css';
import profile_img2 from '../../assets/profile-img2.png';

// ICONS
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGraduationCap, FaBriefcase, FaCertificate, FaUser, FaHeart, FaPhp } from "react-icons/fa";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img2} alt="Profile" style={{ marginTop: "25px" }} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Here are the tools and technologies I commonly use in web development.</p>
          </div>

          <div className="about-skills">
            <Skill label="JavaScript" icon={<IoLogoJavascript />} width="70%" />
            <Skill label="ReactJS" icon={<RiReactjsLine />} width="30%" />
            <Skill label="TailwindCSS" icon={<RiTailwindCssFill />} width="60%" />
            <Skill label="NodeJS" icon={<IoLogoNodejs />} width="40%" />
            <Skill label="React Native" icon={<TbBrandReactNative />} width="90%" />
            <Skill label="NextJS" icon={<RiNextjsLine />} width="20%" />
            <Skill label="PHP" icon={<FaPhp />} width="80%" />
          </div>
        </div>
      </div>

      <div className="about-toggle-wrapper">
        <button className="about-toggle" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Hide Details' : 'More Details About Me'}
        </button>
      </div>

      {showMore && (
        <div className="about-details-aligned">
          <div className="about-details-columns">
            {/* LEFT COLUMN */}
            <div className="about-details-left" >
              <DetailSection icon={<FaUser />} title="Personal Info"style={{ marginLeft: "10px" }}>
                <ul>
                  <li>Full Name: Railey Andrei O. Acosta</li>
                  <li>Date of Birth: August 20, 2004</li>
                  <li>Address: 148 Molave St., Kayquit, Indang, Cavite</li>
                  <li>Email: raileyandreiacosta@gmail.com</li>
                </ul>
              </DetailSection>

              <DetailSection icon={<FaGraduationCap />} title="Education">
                <ul>
                  <li>Cavite State University – President’s Lister (2022–Present)</li>
                  <li>Indang National Integrated High School – Valedictorian (2018–2022)</li>
                  <li>Hillcrest Periwinkle School – Gold Medalist (2015–2018)</li>
                  <li>Indang Central Elementary School – Valedictorian (2010–2015)</li>
                </ul>
              </DetailSection>

              <DetailSection icon={<FaBriefcase />} title="Experience & Involvement">
                <ul>
                  <li>Full Stack Web Developer – Seiwa Kaiun Philippines Inc. (July – August 2025)</li>
                  <li>President – Computer Science Student Organization (2023–2024)</li>
                  <li>Project Manager – Amazon Web Services - Learning Club Spade (2024–2025)</li>
                  <li>Vice Chairperson – External Affairs, CEIT-SC (2024–2025)</li>
                  <li>Board of Directors – CEIT Student Council (2023–2024)</li>
                  <li>Auditor – JPCS CvSU Chapter (2022–2023)</li>
                  <li>Assistant Secretary – CSSO (2022–2023)</li>
                  <li>Algolympics Participant – UP ACM (2022–2023)</li>
                </ul>
              </DetailSection>
            </div>

            {/* RIGHT COLUMN */}
            <div className="about-details-right">
              <DetailSection icon={<FaCertificate />} title="Certifications">
                <ul>
                  <li>Laravel Workshop – Filipino Web Dev Peers</li>
                  <li>Tahak+Tech – PUP Programmer’s Guild</li>
                  <li>CS EXPO – FEU Institute of Technology</li>
                  <li>AI & Energy Workshop – UiTM Malaysia</li>
                  <li>Cybersecurity Awareness Training Seminar - DACTA Global</li>
                </ul>
              </DetailSection>

              <DetailSection icon={<FaHeart />} title="Hobbies & Interests">
                <ul>
                  <li>Watching sci-fi, action, thriller movies</li>
                  <li>Listening to music for focus</li>
                  <li>Playing guitar, piano, bass</li>
                  <li>Drawing and artistic design</li>
                  <li>Working out and leading in orgs</li>
                </ul>
              </DetailSection>
            </div>
          </div>
        </div>
      )}

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5</h1> 
          <p>CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

const Skill = ({ label, icon, width }) => (
  <div className="about-skill">
    <div className="skill-label">
      <span className="skill-icon">{icon}</span>
      <span>{label}</span>
    </div>
    <div className="skill-bar"><hr style={{ width }} /></div>
  </div>
);

const DetailSection = ({ icon, title, children }) => (
  <div className="about-detail-section">
    <h2 className="hover-title">{icon} {title}</h2>
    <div>{children}</div>
  </div>
);

export default About;

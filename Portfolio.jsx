import React from 'react';
import './Portfolio.css';
import { LuSquareArrowOutUpRight } from "react-icons/lu";

// ✅ Import images
import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.png';
import work4 from '../../assets/work4.png';
import work5 from '../../assets/work5.png';
import work6 from '../../assets/work6.png';
import work7 from '../../assets/work7.png';

// ✅ Project items
const workItems = [
  {
    img: work1,
    title: "SYNC",
    description: "A social media app for CvSU students built with React Native and Supabase for secure connections and collaboration.",
  },
  {
    img: work2,
    title: "Purrfect Harmony",
    description: "A veterinary clinic website offering pet care resources, appointment scheduling, and easy access to services.",
  },
  {
    img: work3,
    title: "SYNC App",
    description: "A mobile app for CvSU students providing syllabus access, course planning, and task tracking in one platform.",
  },
  {
    img: work4,
    title: "Portfolio Version 1",
    description: "My first portfolio website showcasing projects, skills, and achievements with a focus on clean design.",
  },
  {
    img: work5,
    title: "SKPI Performance Evaluation System",
    description: "A web-based system for automating multi-level employee evaluations with role-based access and notifications.",
  },
  {
    img: work6,
    title: "SKPI Online Leave Management System",
    description: "A digital leave filing and approval system for SKPI, streamlining workflows and maintaining automated records.",
  },
  {
    img: work7,
    title: "Beverly Homes Household Records System",
    description: "A web-based system to manage and digitize household records for Beverly Homes Phase 1 subdivision.",
  }
];

const Works = () => {
  return (
    <div id="portfolio" className="works">
      <div className="works-title">
        <h1>Portfolio</h1>
        <p className="works-subtext">
          Explore a collection of <span className="gradient-text">innovative projects</span> that reflect my passion for modern tech and design excellence.
        </p>
      </div>

      <div className="works-gallery">
        {workItems.map((item, index) => (
          <div
            className="work-card"
            key={index}
            data-title={typeof item.title === "string" ? item.title : ""}
          >
            <img src={item.img} alt={`Work ${index + 1}`} />
            <div className="work-overlay">
              {/* ✅ Gradient title inside overlay */}
              <h2 className="gradient-text">{item.title}</h2>
              <p>{item.description}</p>
              <a href="#" className="icon-button" target="_blank" rel="noopener noreferrer">
                <LuSquareArrowOutUpRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;

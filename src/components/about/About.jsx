import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working </small>
            </article>
            <article className="about__card">
              <FiUsers  className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Clients Worldwide </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary  className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed </small>
            </article>
          </div>
          <p>I am Deepanshu Yadav, a web developer with 1+ years of experience, having worked with over 50 clients worldwide. I have completed 10+ projects, including a food delivery app and a crop yield prediction tool. Skilled in Java, React JS, and trending technologies, I hold a Google Data Analytics Certificate and am a 5-star coder on HackerRank..</p>
          
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      
      </div>
      
    </section>
  );
};

export default About;

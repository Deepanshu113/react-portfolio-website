import React from 'react'
import './services.css'

import { FaCheck} from "react-icons/fa";

const Services=()=> {
  return (
   <section id='services'>
     <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>User Research & Analysis : Understanding user needs and behaviors to create intuitive designs. </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Responsive Design : Ensuring seamless user experiences across all devices.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Custom Component Development : Creating reusable and scalable React components.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>User Testing & Feedback : Conducting user tests and iterating designs based on feedback. </p>
            </li>
           
          </ul>
        </article>
        {/**WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>User Interface : Crafting visually appealing and intuitive interfaces tailored to user needs.</p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Responsive Design: Ensuring designs adapt flawlessly across all devices and screen sizes. </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Custom React Components: Developing reusable and modular React components for consistent UI. </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Accessibility Design: Ensuring designs are accessible and adhere to industry standards. </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>User Testing and Feedback: Conducting user tests and iterating designs based on feedback.</p>
            </li>
           
          </ul>
        </article>
          {/*CONTENT CREATION*/}
          <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>Custom Content Writing: Tailored blog posts, articles, and web copy. </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Graphic Design: Unique visuals, infographics, and custom graphics. </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Video Production: Engaging promotional and explainer videos. </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>Social Media Content: Strategy and posts for various platforms. </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>SEO Optimization: Keyword research and content optimization for better search rankings.</p>
            </li>
          </ul>
        </article>
      </div>
   </section>
  )
}

export default Services

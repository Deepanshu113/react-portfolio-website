import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data=[
  {
    id:1,
    image:IMG1,
    title:'Crypto Currency Dashboard & Financial Visualization',
    github:'https://github.com',
    demo:'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
      },
  {
id:2,
image:IMG2,
title:'Currency Converter Dashboard',
github:'https://github.com',
demo:'file:///D:/projects/js%20project/currency-converter/index.html'
  },
  {
    id:3,
    image:IMG3,
    title:'ChatGPT Clone',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-Ul-kit-for-data-design-web-apps'
      },
      {
        id:4,
        image:IMG4,
        title:'My Portfolio',
        github:'https://github.com',
        demo:'https://react-portfolio-website-chi-lyart.vercel.app/'
          },
          {
            id:5,
            image:IMG5,
            title:'Charts templates & infographics in Figma',
            github:'https://github.com',
            demo:'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
              },
              
]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
          
            </div>
            <h3>{title}</h3>
            
            <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank" rel="noreferrer">GitHub</a>
            <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
          )
        })
       }
        
      </div>
    </section>
  );
};

export default portfolio;

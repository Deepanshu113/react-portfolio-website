import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

 const Footer=()=> {
  return (
 <footer>
  <a href="#" className='footer__logo'>DEEPANSHU</a>
  <ul className='permalinks'>
    <li><a href="#">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div className='footer__socials'>
  <a href="https://facebook.com"><FaGithub /></a>
    <a href="https://facebook.com"><CiFacebook /></a>
    <a href="https://instagram.com"><FaInstagram /></a>
    <a href="https://twitter.com"><FaSquareTwitter /></a>
  </div>
  <div className='footer__copyright'>
    <small>&copy; TECH Tutorials. All rights reserved.</small>
  </div>
 </footer>
  )
}

export default Footer

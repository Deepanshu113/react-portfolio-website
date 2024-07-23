import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com/in/deepanshu-yadav-9b5859240" target="_blank"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank"><FaGithub/> </a>
        <a href="http://twitter.com" target="_blank"><FaTwitter /></a>
      
    </div>
  )
}

export default HeaderSocials

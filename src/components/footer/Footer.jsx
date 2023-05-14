import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {GiSelfLove} from 'react-icons/gi'

const Footer = () => {
  return (
    <footer>
      <a href="#." className='footer__logo'>INVISIBLE IT 85</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/invisibleit85/" target='__blank'><BsInstagram/></a>
        <a href="https://github.com/Bravemz" target='__blank'><BsGithub/></a>
        <a href="https://www.pinterest.com/invisibleIT85/" target='__blank'><BsPinterest/></a>
      </div>

      <div className="footer__copyright">
        <small>Copy Right © Brave-Ovie. Made With <GiSelfLove/> 2023</small>
      </div>
    </footer>
  )
}

export default Footer
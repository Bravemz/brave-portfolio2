import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hi 👋, I'm</h5>
        <h1>Brave Ovie!</h1>
        <h5 className="text-light">Fullstack Developer.</h5>
        <CTA/>
        <HeaderSocial/>
           
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscNewFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Feel Free To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
                <img src={ME} alt="" />
              </div>     
             </div>
              
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
               <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4 Years Working</small>
            </article>
            <article className='about__card'>
               <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>
            <article className='about__card'>
               <VscNewFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>Mr. Brave Ovie Onoriode, a citizen of the Federal Republic Of Nigeria. 
            Based in the Republic of Ghana! Who studied a high profiled skills with the India School Of Ethical Hacking (ISOEH) during the class of 2013-2017. 
            My Journey into Web Development Started @ the Year 2020 where i obtain so much experience in both Frontend & Backend Development, 
            I attended two major courses, one with ISOEH & Flavio Web Dev Bootcamp.
            Below are the courses and skills he acquired during his studies with (ISOEH)
            Specializes On Web App Interfaces (UI/UX), Specializes on Web Development Such As Frontend & Backend,
            Specializes on Cyber Security (CS) </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
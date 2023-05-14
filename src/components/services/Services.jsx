import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What We Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Design Desktop Application, Wireframes, Mockups, & Prototypes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Can Animate Your App With UI/UX Design Using Quality Tools</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Design Mobile App, Web UI/UX & Prototype In XD Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Do Figma UI/UX Design For Website & Landing Page</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Design A Complete Full Stack Webpage, Homepage, PSD, Figma, Adobe & All Internet Site</p>
            </li>
          </ul>
        </article>
        {/* .......END OF UI/UX...... */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Build Wordpress Website Design, Development Frontend & Back Wend</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Build Full Stack Website in PHP, HTML & CSS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Do React js, Next js, Typescript Web App Or Full Stack Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Develop ASP NET MVC & Core Web Api Applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Develop React js Web App Using Node js, Express, mMysql, Tailwind Css, JavaScript, Etc</p>
            </li>
          </ul>
        </article>
        {/* .......END OF WEB DEVELOPMENT...... */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Create Social-Media Content & Strategy For All Businesses</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Create User Generated Content For Tiktok, SnapChat, Short & Reels</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Create Engaging Website Content For Businesses Of All Types</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Create Online Course, Curriculum, Course Development, Course Creation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I Create Amazon, Tiktok, Ig, FB Enhanced Brand Content & A Plus</p>
            </li>
          </ul>
        </article>
        {/* .......END OF CONTENT CREATION...... */}

      </div>
    </section>
  )
}

export default Services
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project-1.jpg'
import IMG2 from '../../assets/project-2.jpg'
import IMG3 from '../../assets/project-3.jpg'
import IMG4 from '../../assets/project-4.jpg'
import IMG5 from '../../assets/project-5.jpg'
import IMG6 from '../../assets/project-6.jpg'
import IMG7 from '../../assets/project-7.jpg'
import IMG8 from '../../assets/project-8.jpg'
import IMG9 from '../../assets/project-9.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Brave's Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         <article className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
           </div>
            <h5>Brave's Cinema</h5>
            <a href="https://brave-cinema.vercel.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
         </article>
         <article className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
           </div>
            <h5>Brave's Quote</h5>
            <a href="https://bravequote-websit.vercel.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
         </article>
         <article className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
           </div>
            <h5>Brave's Card</h5>
            <a href="https://bravecard-website.vercel.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
         </article>
         <article className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
           </div>
            <h5>Brave's Calculator</h5>
            <a href="https://brave-calculator.vercel.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
         </article>
         <article className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
           </div>
            <h5>Brave's Portfolio</h5>
            <a href="https://my-portfolio-xi-silk.vercel.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
         </article>
         <article className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
           </div>
            <h5>Brave's Social Media</h5>
            <a href="https://brave-social-media.vercel.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
         </article>
         <article className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
           </div>
            <h5>Brave's Real Estate</h5>
            <a href="https://brave-real-estate.vercel.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
         </article>
         <article className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
           </div>
            <h5>Brave's Video Call App</h5>
            <a href="https://brave-video-call.vercel.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
         </article>
         <article className='portfolio__item'>
           <div className="portfolio__item-image">
            <img src={IMG9} alt="" />
           </div>
            <h5>Brave's P Portfolio</h5>
            <a href="https://brave-portfolio2.vercel.app/" className='btn btn-primary' target='__blank'>Live Demo</a>
         </article>
      </div>
    </section>
  )
}

export default Portfolio
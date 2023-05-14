import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaInstagram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fho15i9', 'template_s6o0m74', form.current, 'ApcfIo0srdRxzmyq_')
   e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Reach Out</h5>
      <h2>Contact US</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:invisibleit85@gmail.com" className='btn btn-primary' target='__blank'>Send Your Msg</a>
          </article>
          <article className="contact__option">
            <FaInstagram className='contact__option-icon'/>
            <h4>IG Messenger</h4>
            <a href="https://www.instagram.com/invisibleit85/" className='btn btn-primary' target='__blank'>Send Your Msg</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone+233509838948" className='btn btn-primary' target='__blank'>Send Your Msg</a>
          </article>
        </div>
        {/* ....END OF CONTACT OPTIONS.... */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Valid Email' required />
          <textarea name="message" rows="9" placeholder='Your Message' require ></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
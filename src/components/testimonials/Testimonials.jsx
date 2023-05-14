import React from 'react'
import './testimonials.css'
import MEMBA1 from '../../assets/member-1.png'
import MEMBA2 from '../../assets/member-2.png'
import MEMBA3 from '../../assets/member-3.png'
import MEMBA4 from '../../assets/member-4.png'
import MEMBA5 from '../../assets/member-5.png'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
member: MEMBA1,
name: 'Mark Joe',
review: 'Brave is one of the most reliable Developer i would always reconmmend for anyone to work with, he is so efficient and serious when it comes to business'
},
{
  member: MEMBA2,
  name: 'Anita Morgan',
  review: 'The day i found myself working wiht Mr. Brave was the begining of a smiling moment for me, I missed his voice of communication and his cute laughter.'
  },
  {
    member: MEMBA3,
    name: 'Abigail Reels',
    review: 'Brave is a pro, I am not saying this because he is the best but he knows how to comminucate and work around his clients in getting them what they want'
    },
    {
      member: MEMBA4,
      name: 'Andrew Barns',
      review: 'He gave me a very wonderful E-Commerce website and it has grew my business to the sky, I will always work with him no matter what.'
      },
      {
        member: MEMBA5,
        name: 'Diana Olives',
        review: 'Mr. Ovie gave me the best of my choice and he is good at giving the best idea when he want to work with you, thanks man for giving me the best of your masterpiece'
        }

]

// import { Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidePerView={1}
        pagination={{clickable: true}}>
      {
        data.map(({member, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
          <div className="client__member">
            <img src={member} alt="" />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
        </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials
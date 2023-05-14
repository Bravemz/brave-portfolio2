import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://instagram.com/invisibleit85" target='__blank'><BsInstagram/></a>
      <a href="https://github.com/Bravemz" target='__blank'><BsGithub/></a>
      <a href="https://www.pinterest.com/invisibleIT85" target='__blank'><BsPinterest/></a>
    </div>
  )
}

export default HeaderSocials


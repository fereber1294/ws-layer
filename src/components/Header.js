import React from 'react'
import ContactIcon from '../assets/Contact-Icon.png'

export default function Header() {
  return (
    <div className="header-container">

      <img src={ContactIcon} className="contact-logo" alt="contact-logo"></img>
    </div>
  )
}

import React from 'react'
import './style.scss'
import { BiArrowBack } from 'react-icons/bi'
import { GoHome } from 'react-icons/go'
import { Link } from 'react-router-dom'

const Booked = () => {
  document.title = `TV-Pedia - Booked`

  const formUserData = JSON.parse(localStorage.getItem('userInfo'))
  console.log(formUserData);

  return (
    <section className="booked-section">
      <Link to='/' className="goback">
        <BiArrowBack />
        <GoHome />
      </Link>

      <div className="box">
        <h1 className="thanks">Thanks</h1>
        <p className="message">Your TV Show Has been Booked Successfully!</p>
        <h2 className="name">{formUserData.name}</h2>
        <h3 className="email">{formUserData.email}</h3>
        <h4 className="tel">{formUserData.number}</h4>

      </div>
    </section>
  )
}

export default Booked
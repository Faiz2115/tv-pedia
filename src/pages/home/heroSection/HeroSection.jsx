import React, { useEffect, useState } from 'react'
import './style.scss'

const HeroSection = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((actualdata) => {
        setData(actualdata)
      })
  }, [])
  const num = (Math.floor(Math.random() * 200))
  return (
    <section className='banner-section'>
      <img src={data[num]?.image.original} alt="image" />
      <div className="opacity-layer"></div>
    </section>
  )
}

export default HeroSection
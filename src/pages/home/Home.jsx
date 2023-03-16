import React from 'react'
import HeroSection from './heroSection/HeroSection'
import TVshows from './tvShows/TVshows'
const Home = () => {

  document.title = `TV-Pedia`

  return (
    <>
      <HeroSection />
      <TVshows />
    </>
  )
}

export default Home
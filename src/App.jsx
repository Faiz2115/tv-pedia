import React from 'react'
import '../src/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Detail from './pages/details/Detail'
import BookShow from './pages/bookShow/BookShow'
import PageNotFound from './pages/404/PageNotFound'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import BackToUpButton from './components/backToUp/BackToUpButton'
import Booked from './pages/booked/Booked'
import AllShows from './pages/allShows/AllShows'
import About from './pages/about/About'


const App = () => {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all' element={<AllShows />} />
          <Route path='/details/:id' element={<Detail />} />
          <Route path='bookshow/:id' element={<BookShow />} />
          <Route path='/booked' element={<Booked />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <BackToUpButton />
        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

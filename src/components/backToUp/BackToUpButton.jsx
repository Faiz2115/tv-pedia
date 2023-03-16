import React from 'react'
import './style.scss'
import { useState } from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs'
const BackToUpButton = ()=> 
{
    const [backToTop,setBacktoTop] = useState(false);
  
      window.addEventListener('scroll',()=>{
       window.scrollY > 150 ? setBacktoTop(true) : setBacktoTop(false)
    })

    const scrollUp = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    
  return (
    <>
        {backToTop && 
      <BsFillArrowUpSquareFill className='back-to-top' onClick={scrollUp} />}
    </>
  )
}

export default BackToUpButton
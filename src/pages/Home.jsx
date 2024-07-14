import React, { useState } from 'react'
import Hero from '../components/Hero/Hero'
import Places from '../components/places/Places'
import Banner from '../components/Banner/Banner'
import Blogs from './Blogs'
import BannerWithImage from '../components/Banner_image/BannerWithImage'
import Testomonials from '../components/testomonials/Testomonials'
import FormPopup from '../components/popup/FormPopup'

const Home = () => {

  
  return (
    <div>
      <div>
        <div className='relative h-[700px] '>
          <video autoPlay loop muted className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
            <source src='/video.mp4' type='video/mp4'/>
          </video>
          <Hero/>
        </div>
        <Places/>
        <Banner/>
        <Blogs/>
        <BannerWithImage/>
        <Testomonials/>
        <FormPopup />
      </div>
    </div>
  )
}

export default Home

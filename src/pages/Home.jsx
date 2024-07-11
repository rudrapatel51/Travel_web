import React from 'react'
import Hero from '../components/Hero/Hero'

const Home = () => {
  return (
    <div>
      <div>
        <div className='relative h-[700px]'>
          <video autoPlay loop muted className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
            <source src='/video.mp4' type='video/mp4'/>
          </video>
          <Hero/>
        </div>
      </div>
    </div>
  )
}

export default Home

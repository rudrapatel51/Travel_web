import React from 'react'
import { useLocation } from 'react-router-dom'

const BlogsDetails = () => {

  const location = useLocation();
  console.log(location,"useLocation");
  const {image,date,title,description,author} = location.state


  return (
    <div className='pt-20'>
      <div className='h-[300px] overflow-hidden'>
      <img src={image} alt='' className='mx-auto h-[300px] w-full object-cover transition-duration-700 hover:scale-110' />
      </div>
    </div>
  )
}

export default BlogsDetails

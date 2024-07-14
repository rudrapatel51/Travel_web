import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogComponents from '../components/Blogs/BlogComponents';

const BlogsDetails = () => {

  const location = useLocation();
  console.log(location,"useLocation");
  const {image,date,title,description,author} = location.state


  return (
    <div className='min-h-[550px] pt-20'>
      <div className='h-[300px] overflow-hidden'>
      <img src={image} alt='image' className='mx-auto h-[300px] w-full object-cover transition-duration-700 hover:scale-110' />
      </div>
      <div className='container'>
        <p className='text-slate-600 text-sm py-3'>{" "}Written By {author} on Date {date}</p>
        <h1 className='text-2xl font-semibold mb-10'>{description}</h1>
        <p className='text'>{description}</p>
      </div>
      <BlogComponents/>
    </div>
  )
}

export default BlogsDetails

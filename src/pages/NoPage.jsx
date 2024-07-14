import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div>
      Soory There is no page so to <Link to="/" className='text-5xl text-bold'>Home Page</Link>
    </div>
  )
}

export default NoPage

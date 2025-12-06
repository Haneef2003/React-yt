import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center text-black py-4 px-8 bg-blue-300'>
      <h2 className='font-bold text-2xl'>Mohammad H</h2>
      <div className='flex gap-15 items-center'>
        
        <Link className='font-medium text-lg' to="/">Home</Link>
        <Link className='font-medium text-lg' to="/about">About</Link>
        <Link className='font-medium text-lg' to="/courses">Courses</Link>
        <Link className='font-medium text-lg' to="/product">Product</Link>
      </div>
    </div>
  )
}

export default NavBar

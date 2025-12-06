import React from 'react'
import { Link, Links } from 'react-router-dom'

const NavBar = () => {
  return (
    
      <div className='nav'>
         <h3>Mohammad H</h3>
         <div>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/contact'>Contact</Link>
         </div>
      </div>
   
  )
}

export default NavBar

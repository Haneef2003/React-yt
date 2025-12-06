import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
         <Route path='/courses/:id' element={<CourseDetail/>}/>

        <Route path='/product' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

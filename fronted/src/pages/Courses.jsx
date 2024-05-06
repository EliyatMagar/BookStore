import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CourseComponent from '../components/CourseComponent'

const Courses = () => {
  return (
    <div>
       <Navbar/>
       <div className='min-h-screen'>
        <CourseComponent/>
       </div>
       <Footer/>
    </div>
  )
}

export default Courses

import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebooks from '../components/Freebooks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner/>
        <Freebooks/> 
        <Footer/>
    </div>
  )
}

export default Home

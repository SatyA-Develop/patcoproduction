import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import Workprocess from './Workprocess/Workprocess'
import Work from './Work/Work'
import Services from './Services/Services'
import Clients from './Clients/Clients'
import Testimonials from './Testimonials/Testimonials'
import Navbar from './Navbar/Navbar'

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Workprocess/>
    <Work/>
    <Services/>
    <Clients/>
    <Testimonials/>
    </>
  )
}

export default HomePage
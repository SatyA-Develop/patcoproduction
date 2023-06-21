import React from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CatagorisedWork from './components/CatagoriedWorkSection/CatagorisedWork'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <>
    <BrowserRouter> 
    <Routes>
    <Route path="/category/:category" element={<CatagorisedWork />} />
    <Route path="/" element={<HomePage />} />
    </Routes>
    </BrowserRouter>
   <Footer/>
      
    
    </>
  )
}

export default App
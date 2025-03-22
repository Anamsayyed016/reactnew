import { useState } from 'react'
import Home from './assets/Components/Home'
import About from './assets/Components/About'
import Contact from './assets/Components/Contanct'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './assets/Components/Layout'
import Gallery from './assets/Components/Gallery'
 

function App() {
  

  return (
    <>

      
        <Routes>
        <Route path="/" element= {<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/gallery"  element={<Gallery/>}/>
        </Route>
        </Routes>
      
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import About from './About'
import Conatct from './Contact'
import Layout from './Layout'



function App() {
  
  return (
    <>
      <Routes>
              <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Conatct/>}/>
              </Route>
      

      </Routes>
      
    </>
  ) 
}

export default App

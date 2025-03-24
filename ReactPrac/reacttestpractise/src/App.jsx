import { useState } from 'react'
import './App.css'
import Home from './Home'
import Service from './Service'
import { Route,Routes } from 'react-router-dom'
import Layout from './Layout'




function App() {
  
  return (
    <>
        <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="services" element={<Service/>}/>
        </Route>
        </Routes>
    </>
  )
}

export default App

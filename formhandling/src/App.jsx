import { useState } from 'react'
import './App.css'
import Frm from './form'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

  
  const App =() =>{
  return (
    <>
      
    <Routes>
      
        <Route index element={<Frm/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path= '/home' element = {<Home/>}/>
        
    </Routes>
  
      </>
    
  )
}

export default App

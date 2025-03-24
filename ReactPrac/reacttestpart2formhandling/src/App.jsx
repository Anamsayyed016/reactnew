import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import Create from './Createacc'
import Home from './Home'




const App=()=> {
  

  return (
    <>
     <Routes>
      <Route index element={<Create/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
     
     </Routes>
    </>
  )
}

export default App

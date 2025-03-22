import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import User from './User'

const App = ()=>{

  return(
    
    <>
    <h1>Param</h1>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/user/:name?,age?' element={<User/>}/> */}
        <Route path='/user' element={<User/>}>
        <Route path=':id' element={<User/>}/>
        </Route>
      </Route>

    </Routes>
    
    </>
  )
}

export default App

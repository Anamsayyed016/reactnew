import { useState } from 'react'
import Form from './Form'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'


import './App.css'

const  App=()=> {
  
  return (
    <>
      
      <Routes>
        <Route index element={<Form/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App

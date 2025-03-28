import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Create from './Create'
import Home from './Home'
import Collection from './Collection'
import Login from './Login'
import Layout from './Layout'
import Sale from './Sale'
import Customeerdet from './Cusdetails'
import Customerjsondet from './Customerjsondet'




function App() {

  return (
    <>
          <Routes>
                    <Route path = "/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path = "/collection" element={<Collection/>}/>
                    <Route path = "/sale" element={<Sale/>}/>
                    <Route path = "/login" element={<Login/>}/>
                    <Route path = "/create" element={<Create/>}/>
                    <Route path = "/cusdetails" element={<Customeerdet/>}/>
                    <Route path = "/customerjson" element={<Customerjsondet/>}/>
                    

                    
                    </Route>

          </Routes>
    </>
  )
}

export default App

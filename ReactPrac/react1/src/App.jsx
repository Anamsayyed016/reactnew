import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import Child1 from '../Child1'

let cdata = createContext()
let name = "Anam"

function App() {
  

  return (
    <>
      <cdata.Provider value={name}>

      <Child1/>
      </cdata.Provider>
    </>
  )
}

export {cdata}
export default App

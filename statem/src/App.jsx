import { useState } from 'react'
import Bg from './Components/Bg'


function App() {
// let [name,setName]= useState("")---we can pass,boolean, string, obj, array
// let [c,setC]= useState(0)

  // let [c,setC]=useState({
  //   name:"Anam",
  //   city:"Bhopal"
  // }-)
  
  // let arry =["MBA" ,27]

// function demo(){
//   setName("Anam")
// }
  // function Inc(){
  //   setC(c+1)
  // }

  // function Dec(){
  //   if(c!=0){
  //     setC(c-1)
  //   }
  // }
  return (
    <>
      {/* <h1>My name is {name}</h1>
      <button onClick={demo}>Tap</button> */}
        {/* <h1> {c}</h1>

      <button onClick={Dec}>-</button>
      <button onClick={Inc}>+</button> */}
      
          {/* <h1>My name is {c.name}</h1>
          <h1>My city is {c.city}</h1>

          <h1>my quali is {arry[0]}</h1>
          <h1>my age is {arry[1]}</h1> */}
          <Bg/>
         
    </>
  )
}

export default App

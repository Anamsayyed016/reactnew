import { useEffect, useState } from 'react'

import './App.css'

const App=()=> {
  let [color,Setcolor]=useState("yellow")
  let [c,setC]=useState(0)

  useEffect(()=>{
    alert("Working....")
  },[color ,c])

    function Inc(){
      setC(c+1)
    }
    function Dec(){
      if(c!=0){
        setC(c-1)
      }
    }
  return (
    <>
        <div style={{height:"100vh", backgroundColor:color}}>
          <button onClick={()=>Setcolor('red')}> Red</button>
          <button onClick={()=>Setcolor('green')}> Green</button>
          <button onClick={()=>Setcolor('pink')}> Pink</button>
          <button onClick={Dec}>-</button>
          <button onClick={Inc}> +</button>
          <h1>{c}</h1>
        </div>
    </>
  )
}

export default App

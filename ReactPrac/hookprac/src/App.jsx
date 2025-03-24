import { useState ,  useEffect} from 'react'
import './App.css'

const  App=()=> {

    let [color,setColor] = useState("pink")

      let [c,setC] = useState(0)

      useEffect(()=>{
        // alert("working-----")
      })
      function Increment(){
          setC(c+1)
      }

      function Decrement(){
        if(c!=0){
          setC(c-1)
        }
      }

  return (
    <>
          <div style={{width:"100vh" , height:"200px", backgroundColor:color}}>

              <button onClick={()=>setColor('red')}>Red</button>
              <button onClick={()=>setColor('green')}>Green</button>
              <button onClick={()=>setColor('blue')}>Blue</button>

              <button onClick={Increment}>+</button>
              <button onClick={Decrement}>-</button>

                <h1>{c}</h1>

          </div>
    </>
  )
}

export default App

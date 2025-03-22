import { useState } from 'react'
 

function Bg(){
    let[bgcolor,setBgcolor]=useState("")
    let [Tg,setTg] = useState(true)
    
    return(
        <>
       
    <div style={{height:"100vh",backgroundColor:bgcolor}}>
        <button onClick={()=>setBgcolor('red')}>red</button>
        
        <button onClick={()=>setTg(!Tg)}>
            
        </button>

        
        {Tg ? <h1>Toggle</h1> : ""}




    </div>
        </>
    )
   
}


export default  Bg
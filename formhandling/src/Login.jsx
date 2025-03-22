import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Login=()=> {

    let [logindata,setlogindata]=useState ({
        username:"",password:""
    })

    let [signdata,setSign]=useState ("")

    let navigator =  useNavigate()

    function loginp(e){
        let {name,value} = e.target
        setlogindata({...logindata,[name]:value})
    }

        function loginput(e){
            e.preventDefault()
            if(signdata.username != logindata.username  || signdata.password != logindata.password){
                alert("User not found")
            }
            else {
                navigator('/home')
            }
        }
          
        useEffect(()=>{
            let signdataa = JSON.parse(localStorage.getItem('userdata'))
            setSign(signdataa)
        },[])
    return(
        <>
            <h1>Login</h1>
        <form action="" onSubmit={loginput}>
        <label htmlFor="">Username</label>
        <input type="text" name="username" onChange={loginp} /> <br />

        <label htmlFor="">Password</label>
        <input type="text" name="password" onChange={loginp} /> <br />

        <input type="submit" /> 
        </form>
        
        </>
    )
}

export default Login
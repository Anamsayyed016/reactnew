import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"


const Login=()=>{
    let [logindata,setLogindata] = useState({
        username:"",password:""
    })

            let [signdata,setSign] = useState("")

            const  navigate  = useNavigate()

            function loginvalue(e){
                let {name,value} = e.target
                setLogindata({...logindata,[name]:value})
            }

            function logininput(e){
                e.preventDefault()
                if (signdata.email !=logindata.username || signdata.password != logindata.password){
                    alert("User data not found")
                }
                else{
                    navigate ('/')
                }
            }

            useEffect(()=>{
                let signdata = JSON.parse(localStorage.getItem('userdata'))
                setSign(signdata)
            },[])
    return(
        <>
        <div className="form-from-login">
        <img src="/imgvid/logo3.png" alt="" />
        <h1>Login</h1>
            <form action="" onSubmit={logininput}>
            <label htmlFor="">Email or mobile phone number</label>
            <input type="text" name = "username" placeholder="enter email or number" onChange={loginvalue} /> <br />

            <label htmlFor="">Password</label>
            <input type="text" name = "password" placeholder="password" onChange={loginvalue}/> <br />

            <input type="submit" value={"Login"} />
            </form>
            </div>
        </>
    )
}

export default Login
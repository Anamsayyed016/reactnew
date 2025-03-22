import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () =>{

    let [logindata,SetLogindata] = useState ({
        username:"",password:""
    })

    return(
        <>
            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" name="username" onChange={logindata} />

                <label htmlFor="">Password</label>
                <input type="text" name="password" onChange={logindata} />
            </form>
        
        </>
    )
}
export default Login
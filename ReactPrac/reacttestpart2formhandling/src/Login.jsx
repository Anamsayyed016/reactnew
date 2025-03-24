import React from "react"
const Login = ()=>{

        return(
            <>
                <h1>Login in Account</h1>
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
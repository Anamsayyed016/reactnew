import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form=()=>{

    const [formdata,setFormdata]=useState({
        username:"",email:"",password:""
    });

        const loginnav = useNavigate()

        function inpchange(e){

            const {name,value}=e.target;
                setFormdata({...formdata,[name]:value});
        }

                function Finalsubmit(e){
                    e.preventDefault(); 
                     console.log(formdata);

                     localStorage.setItem("userdata",JSON.stringify(formdata));
                     loginnav("/login");
                }
return(
    <>
            <form action="" onSubmit={Finalsubmit}>
                <label htmlFor="">UserName:</label>
                <input type="text" name="username" onChange={inpchange}/> <br /> <br />

                <label htmlFor="">Email:</label>
                <input type="text" name="email" onChange={inpchange} /> <br /> <br />

                <label htmlFor="">Password:</label>
                <input type="password" name="password" onChange={inpchange}/> <br /> <br />

                <input type="submit" />
            </form>
    </>
)
}


export default Form
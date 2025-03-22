import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create =()=>{

    let[frmdata, setFrmdata] = useState({
        your_name:"",number:"",email:"",password:""
    })

        let loginnav = useNavigate()
            function inpchange(e){
              const{name,value}=e.target
                setFrmdata({...frmdata,[name]:value})
            }

              function Finalsubmit(e){
                e.preventDefault(e)
                console.log(frmdata);
                localStorage.setItem("userdata",JSON.stringify(frmdata))
                loginnav ('login')
              }

    return(
        <>
          <div className="cre-cre-acc">
            <img src="/imgvid/logo3.png" alt="" />
            <h1>Create a account</h1>

          <form action="" onSubmit={Finalsubmit}>
            <label htmlFor="">Your Name</label>
      <input type="text" name="your_name" placeholder=" First and Last name" onChange={inpchange}/> <br />

      <label htmlFor="">Mobile Number</label>
      <input type="number" name="number" placeholder="Mobile Number" onChange={inpchange} /> <br /> 

      <label htmlFor="">Email</label>
      <input type="text" name="email" placeholder=" Your Email" onChange={inpchange}/> <br />


      <label htmlFor="">Password</label>
      <input type="text" name="password" placeholder="Your Password" onChange={inpchange}/> <br /> 

      <input type="submit" value="Create Your Ade-e-Libaas account"  />
          </form>

            </div>   
        </>
    )
}

export default Create
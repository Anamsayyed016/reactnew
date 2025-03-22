import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Frm =() => {

        let [frmdata,setFrmdata] = useState ({
            username:"",email:"",password:""
        })

            let loginnav = useNavigate()
        function inpchange(e){
            const {name,value}=e.target 
            setFrmdata({...frmdata,[name]:value})
        }

            function Finalsubmit(e){
                e.preventDefault(e)
                console.log(frmdata);
                localStorage.setItem("userdata",JSON.stringify(frmdata))
                loginnav('login')
            }

            // function inpchange(e){
            //     console.log(e.target.value);
            //     setFrmdata(e.target.value)
            
        
        return(
            <>
                    
                    <form action="" onSubmit={(Finalsubmit)}>
                        <label htmlFor="">UserName</label>
                        <input type="text" name="username" onChange={inpchange} /> <br /> <br />

                        <label htmlFor="">Email</label>
                        <input type="text" name="email" onChange={inpchange} /> <br /> <br />

                        <label htmlFor="">Password</label>
                        <input type="text" name="password" onChange={inpchange} /> <br /> <br />

                        <input type="submit" />
                    </form>
            </>
        )

}

    

export default Frm
import React ,{useState} from "react"
import { useNavigate } from "react-router-dom"

const Create = ()=>{

    let [createacc,setCreateaccdata] = useState({
        name:"",username:"",password:""
    })

            let loginnacc = useNavigate()
            function createaccount(e){
                const{name,value}=e.target

                setCreateaccdata({...createacc,[name]:value})
            }

                function Finalecreteacc(e){
                    e.preventdefault(e)
                    console.log(createacc)
                    localStorage.setItem("username",JSON.stringify(createacc))
                    loginnacc("login")
                }
        return(
            <>
            <form action="" onSubmit={(Finalecreteacc)}>
                <h1>Create a account</h1>
            <label htmlFor="" >Full Name</label>
            <input type="text" name="name" onChange={createaccount} /> <br />

            <label htmlFor="">Username</label>
            <input type="text" name="username" onChange={createaccount} /> <br />

            <label htmlFor="">Password</label>
            <input type="text" name="password" onChange={createaccount}/><br />

              <input type="Submit" />
              </form>

              <Outlet/>
            </>
        )
}

export default Create
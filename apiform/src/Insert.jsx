import { useEffect, useState } from "react"
import axios from "axios"


const Inseert = ()=>{

    let [frmdata,setfrmdata]=useState([])
    let [apidata,SetApi]= useState([])
    let [editdata,seteditdata] = useState ([])


    function handlesubmit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/student',frmdata)
        .then(r=>alert("data inserted"))
    }

    function handleedit(e){
        const{name,value}=e.target
        
        seteditdata({...frmdata,[name]:value})
    }


     useEffect(()=>{
        axios.get('http://localhost:3000/student')
        .then(r=>{
            SetApi(r.data)
        })
     },[])

     
     function InsertData(e){
        const{name,value}=e.target
        setfrmdata({...frmdata,[name]:value})
     }
    return(
        <>

            <h1>Insert Data</h1>

            <form action="" onSubmit={handlesubmit}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" onChange={InsertData}/> <br /> <br />

                <label htmlFor="">Age:</label>
                <input type="text" name="age" onChange={InsertData}/> <br /> <br />

                <label htmlFor="">City:</label>
                <input type="text" name="city" onChange={InsertData}/> <br /> <br />

                <label htmlFor="">Course:</label>
                <input type="text" name="course" onChange={InsertData}/> <br /> <br />

                <input type="Submit" />
            </form>

                {/* <h1>Edit form</h1>

                <form action="" onSubmit={handlesubmit}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" value={editdata.name} onChange={handleedit}/> <br /> <br />

                <label htmlFor="">Age:</label>
                <input type="text" name="age" value={(editdata.age)} onChange={handleedit}/> <br /> <br />

                <label htmlFor="">City:</label>
                <input type="text" name="city" value={editdata.city} onChange={handleedit}/> <br /> <br />

                <label htmlFor="">Course:</label>
                <input type="text" name="course" value={editdata.course} onChange={handleedit}/> <br /> <br />

                <input type="Submit" />
            </form> */}

        </>
    )
}

export default Inseert
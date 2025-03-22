import axios from "axios"
import { useEffect, useState } from "react"


const Signup = ()=>{


  let [editdata,seteditdata] = useState ([])
  let [apidata,SetApi]= useState([])
   let[shwdata,setshw]=useState(false)

   function handlesubmit(e){
    e.preventDefault();
    axios.post('http://localhost:3000/student',frmdata)
    .then(r=>alert("data inserted"))
}
    
        function del(id){
            axios.delete(`http://localhost:3000/student/${id}`)
            .then(r=>alert("Deleted"))
         }
    
         function handleedit(e){
            const{name,value}=e.target
            
            seteditdata({...frmdata,[name]:value})
        }
    useEffect(()=>{
        axios.get('http://localhost:3000/student')
        .then(res=>{
            SetApi(res.data)
        })
    },[del])

      

        
    return(

        
        <>
        
            <h1>Table</h1>
        <table border="">
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Course</th>
            <th>Delete</th>
            <th>Edit</th>
            </tr>


                {
                    apidata.map((e)=>{
                        return<>
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.city}</td>
                            <td>{e.course}</td>
                            <td><button onClick={()=>del(e.id)}>Delete</button></td>
                            <td><button onClick={()=>{(setshw(true),seteditdata(e))}}>Edit</button></td>
                            </tr>
                        </>
                    })
                }
            
        </table>

        <h1>Edit form</h1>
        

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
</form>
             
        </>
    )
}

export default Signup
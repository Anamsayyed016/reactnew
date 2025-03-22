import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  let [apidata,setApi]=useState([])
  let [frmdata,setFrmdata]=useState([])
  let [shwfrm,setshw] = useState (false)
  let [editdata,seteditdata] = useState ({})  

  function del(id){
    axios.delete(`http://localhost:3000/students/${id}`)
    .then(r=>alert("Deleted"))
  }
  
  function insertInp(e){
    const{name,value}=e.target
    setFrmdata({...frmdata,[name]:value})
  }

    function handleSubmit(e){
      e.preventDefault();
      axios.post('http://localhost:3000/students',frmdata)
      .then(r=>alert("data inserted"))
    }

    function handleedit(e){
      const {name,value}=e.target
      seteditdata({...editdata,[name]:value})
    }

    function editfinalsubmit(e){
      e.preventDefault()
      axios.put(`http://localhost:3000/students/${editdata.id}`,editdata)
      .then(r=>alert("updated"))
    }

  useEffect(()=>{
    axios.get('http://localhost:3000/students')
    .then(res=>{
      setApi(res.data)
     
    })
  },[del])
  
  return (
    <>
    <table border="">
      <tr>

        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Conatct</th>
        <th>City</th>
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
          <td>{e.contact}</td>
          <td>{e.city}</td>
          <td><button onClick={()=>del(e.id)}>Delete</button></td>
          <td><button onClick={()=>(setshw(true),seteditdata(e))}>Edit</button></td>
          </tr>
          </>
        })
       }
 </table>
       
        <h1>Submit form</h1>
        <form action="" onSubmit={handleSubmit}>

       <label htmlFor="">Name:</label>  
       <input type="text" name="name" onChange={insertInp}/>  <br /> <br />

       <label htmlFor="">Age:</label>  
       <input type="text" name="age" onChange={insertInp}/>  <br />  <br />

       <label htmlFor="">Conatct:</label>  
       <input type="text" name="contact" onChange={insertInp}/>  <br />  <br />

       <label htmlFor="">City:</label>  
       <input type="text" name="city" onChange={insertInp}/>  <br />  <br />

       <input type="submit" />
        </form>

          <h1>Edit form</h1>

          {
          shwfrm && (
       <form action="" onSubmit={editfinalsubmit}>
          <label htmlFor="">Name:</label>  
       <input type="text" name="name" value={editdata.name} onChange={handleedit}/>  <br /> <br />

       <label htmlFor="">Age:</label>  
       <input type="text" name="age" value={editdata.age} onChange={handleedit}/>  <br />  <br />

       <label htmlFor="">Conatct:</label>  
       <input type="text" name="contact" value={editdata.contact} onChange={handleedit}/>  <br />  <br />

       <label htmlFor="">City:</label>  
       <input type="text" name="city" value={editdata.city} onChange={handleedit}/>  <br />  <br />

       <input type="submit" />
       </form>
       )}
    </>
  )
}

export default App

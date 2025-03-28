import axios from "axios"
import { useEffect , useState } from "react"
import './App.css'

const Customerjsondet=()=>{
    let [apidata, setApidata] =  useState([])
        let [frmdata,setFrmdata] = useState([])
        let [shwfrm,setshw] = useState (false)
      let [editdata,seteditdata] = useState ({})  

   

         

        // edit
        function handleedit(e){
            const{name,value}=e.target
            seteditdata({...editdata,[name]:value})
        }

        function editfinalsubmit(e){
            e.preventDefault()
            axios.put(`http://localhost:3000/Customer/${editdata.id}`,editdata)
            .then(r=>alert("updated"))
        }

            


        // delete
        function del(id){
            axios.delete(`http://localhost:3000/Customer/${id}`)
            .then(r=>alert("Deleted"))
        }

    // step fetch
        function handlecusdetail(e){
            e.preventDefault()
            axios.post('http://localhost:3000/Customer',frmdata)
            .then(r=>alert("data inserted"))
        }
                // insert
        function insertInp(e){
            const {name,value}=e.target
            setFrmdata({...frmdata,[name]:value})
        }
            // step1
        useEffect(()=>{
            axios.get('http://localhost:3000/Customer')
            .then(r=>{
                setApidata(r.data)
            })
        },[del])

    return(
        <>
            <div className="tab-tab-table">
            
            <table border="2">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    
                </tr>
                </thead>
               
                        {
                            apidata.map((e)=>{
                                return<>
                                    <tr>
                                        <td>{e.id}</td>
                                        <td>{e.fullname}</td>
                                        <td>{e.email}</td>
                                        <td>{e.phnnumber}</td>
                                        <td>{e.productname}</td>
                                        <td>{e.quantity}.</td>
                                        <td>{e.address}</td>
                                        <td><button onClick={()=>(setshw(true),seteditdata(e))}>Edit</button></td>
                                        <td><button onClick={()=>del(e.id)}>Delete</button></td>
                                    </tr>
                                </>
                            })
                        }

            </table>
        
            </div>    
        </>
    )
}

export default Customerjsondet
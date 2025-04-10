import axios from "axios"
import { useEffect , useState } from "react"
import './App.css'

const Customerjsondet=()=>{

    let [apidata,setApidata] = useState([])
    let [editdata,Seteditdata] = useState([])
    let [shwdata,Setshw] = useState(false)
       
        function editfinalsubmit(e){
            const{name,value}=e.target

            Seteditdata({...frmdata,[name]:value})
        }
         function handleedit(e){
            const{name,value}=e.target
            Seteditdata({...editdata,[name]:value})
        }    

        function editfinalsubmit(e){
            e.preventdefault()
            axios.put(`http://localhost:3000/Customer/${editdata.id}`,editdata)
            .then(r=>alert("updated"))
        }

    useEffect(()=>{
            axios.get('http://localhost:3000/Customer')
            .then(res=>{
                setApidata(res.data)
            })
    })

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
                                        <th>{e.id}</th>
                                        <th>{e.fullname}</th>
                                        <th>{e.email}</th>
                                        <th>{e.phnnumber}</th>
                                        <th>{e.productname}</th>
                                        <th>{e.quantity}</th>
                                        <th>{e.address}</th>
                                        <th><button onClick={()=>(Setshw(true),Seteditdata(e))}>Edit</button></th>
                                        <th><button onClick={()=>del(e.id)}>Delete</button></th>
                                    </tr>
                                </>
                            })
                        }

            </table>

                       

                    {
                    shwdata && (
                        
                            <div className="edit-form"> 
                            <form action=""  onSubmit={editfinalsubmit}>
                <h3>Personal Information:</h3>
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="fullname" placeholder="enter your full name" value={editdata.name} onChange={handleedit} /> <br />

                    <label htmlFor="">Email Address</label>
                    <input type="email" name="email" placeholder="enter your email" value={editdata.email} onChange={handleedit} /> <br />

                    <label htmlFor="">Phone Number</label>
                    <input type="number" name="phnnumber" placeholder="enter your email"  value={editdata.phnnumber} onChange={handleedit}/> <br />

                    <h3>Order & Shipping  Details:</h3>
           
                    <label htmlFor="">Product Name</label>
                    <input type="text" name="productname" placeholder="enter your product name" value={editdata.productname} onChange={handleedit} /> <br />

                    <label for="quantity" >Quantity:</label>
<select id="quantity" name="quantity" >
  <option value="0">0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
</select><br />
        <label htmlFor="">Address</label>
        <input type="text" name="address" placeholder="enter your full address" value={editdata.address} onChange={handleedit} /> <br />

            <input type="submit" value={"thank you for the details"}  />
            </form>
            </div>
        )}       
            </div>    
        </>
    )
}
export default Customerjsondet
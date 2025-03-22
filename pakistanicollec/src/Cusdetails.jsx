import axios from "axios"
import { useEffect , useState } from "react"
import './App.css'

const Customeerdet=()=>{

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
            <h4>table</h4>
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
           

        <div className="cus-cus-cusdetail">
        <img src="/imgvid/logo3.png" alt="" />
        <h1>Please fill the details </h1>

            <form action="" onSubmit={handlecusdetail}>
                <h3>Personal Information:</h3>
                    <label htmlFor="">Full Name</label>
                    <input type="text" name="fullname" placeholder="enter your full name" onChange={insertInp}/> <br />

                    <label htmlFor="">Email Address</label>
                    <input type="email" name="email" placeholder="enter your email" onChange={insertInp} /> <br />

                    <label htmlFor="">Phone Number</label>
                    <input type="number" name="phnnumber" placeholder="enter your email"onChange={insertInp} /> <br />

                    <h3>Order & Shipping  Details:</h3>
           
                    <label htmlFor="">Product Name</label>
                    <input type="text" name="productname" placeholder="enter your product name" onChange={insertInp}/> <br />

                    <label for="quantity" onChange={insertInp}>Quantity:</label>
<select id="quantity" name="quantity">
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
        <input type="text" name="address" placeholder="enter your full address"onChange={insertInp} /> <br />

            <input type="submit" value={"thank you for the details"} />
            </form>
            </div>


                            <h1>edit</h1>
                        {
                            shwfrm && (
                                <div className="cus-cus-cusdetail">
                                <img src="/imgvid/logo3.png" alt="" />
                                <h1>Please fill the details </h1>
                        
                                    <form action="" onSubmit={editfinalsubmit}>
                                        <h3>Personal Information:</h3>
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" name="fullname" placeholder="enter your full name" onChange={handleedit} value={edit.fullname}/> <br />
                        
                                            <label htmlFor="">Email Address</label>
                                            <input type="email" name="email" placeholder="enter your email" onChange={handleedit} value={edit.email} /> <br />
                        
                                            <label htmlFor="">Phone Number</label>
                                            <input type="number" name="phnnumber" placeholder="enter your email"onChange={handleedit} value={edit.phnnumber} /> <br />
                        
                                            <h3>Order & Shipping  Details:</h3>
                                   
                                            <label htmlFor="">Product Name</label>
                                            <input type="text" name="productname" placeholder="enter your product name" onChange={handleedit} value={edit.productname}/> <br />
                        
                                            <label for="quantity" onChange={handleedit}>Quantity:</label>
                        <select id="quantity" name="quantity" value={edit.quantity}>
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
                                <input type="text" name="address" placeholder="enter your full address"onChange={handleedit} value={edit.address} /> <br />
                        
                                    <input type="submit" value={"thank you for the details"} />
                                    </form>
                                    </div>
                            )
                        }
        </>
    )
}

export default Customeerdet
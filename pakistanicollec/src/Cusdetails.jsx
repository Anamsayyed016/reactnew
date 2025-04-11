import axios from "axios"
import { useEffect , useState } from "react"
import './App.css'
import { useNavigate } from "react-router-dom"


const Customeerdet=()=>{

             // navvigate
             const navigatee = useNavigate()

                const gotocustomerjson=()=>{
                    navigatee('/customerjson')
                }

        let [frmdata,setFrmdata] = useState([])
    


    
    // step fetch
        function handlecusdetail(e){
            e.preventDefault()
            axios.post('http://localhost:3000/Customer',frmdata)
            .then(r=>{alert("data inserted")
                gotocustomerjson();
            })
            
        }
    //             // insert
        function insertInp(e){
            const {name,value}=e.target
            setFrmdata({...frmdata,[name]:value})
            console.log(frmdata)
        }
    //         // step1
        

    return(
        <>
              
           

        <div className="cus-cus-cusdetail">
        <img src="/imgvid/logo3.png" alt="" />
        <h1>Please fill the details </h1>

            <form action="" >
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

                    <label for="quantity" >Quantity:</label>
<select id="quantity" name="quantity" onChange={insertInp}>
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

            {/* <input type="submit" value={"thank you for the details"}  /> */}
            <button onClick={handlecusdetail}>Place order</button>
            </form>
            </div>


                           
                        
        </>
    )
}

export default Customeerdet
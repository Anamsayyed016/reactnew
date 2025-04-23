import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './App.css';

const Customeerdet = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;

  const [frmdata, setFrmdata] = useState({});

  const gotocustomerjson = (email) => {
    navigate('/customerjson', { state: { userEmail: email } });
  };

  const handlecusdetail = (e) => {
    e.preventDefault();

    const orderDetails = {
      ...frmdata,
      productName: product?.name,
      productPrice: product?.price,
      productImage: product?.image,
      productQuantity: product?.quantity || 1,
    };

    axios.post('http://localhost:3000/Customer', orderDetails)
      .then(() => {
        alert("Order placed successfully!");
        gotocustomerjson(frmdata.email); 
      })
      .catch(err => {
        alert("Something went wrong!");
      });
  };

  const insertInp = (e) => {
    const { name, value } = e.target;
    setFrmdata({ ...frmdata, [name]: value });
  };

  return (
    <div className="cus-cus-cusdetail">
      <img src="/imgvid/logo3.png" alt="logo" />
      <h1>Please fill the details</h1>

      <form onSubmit={handlecusdetail}>
        <h3>Personal Information:</h3>

        <label>Full Name</label>
        <input type="text" name="fullname" placeholder="Enter your full name" onChange={insertInp} required /><br />

        <label>Email Address</label>
        <input type="email" name="email" placeholder="Enter your email" onChange={insertInp} required /><br />

        <label>Phone Number</label>
        <input type="number" name="phnnumber" placeholder="Enter your number" onChange={insertInp} required /><br />

        <label>Address</label>
        <input type="text" name="address" placeholder="Enter your full address" onChange={insertInp} required /><br />

        <div style={{ margintop: "30px" }}>
          <h2>Shopping Cart</h2>
          {product && (
            <>
              <img src={product.image} alt={product.name} style={{ width: "50%", marginbottom: "10px" }} />
              <h3>{product.name}</h3>
              <h5>Price: {product.price}</h5>
              <h5>Quantity: {product.quantity || 1}</h5>
            </>
          )}
        </div>

        <button type="submit" style={{ marginTop: "20px" }}>Place Order</button>
      </form>
    </div>
  );
};

export default Customeerdet;

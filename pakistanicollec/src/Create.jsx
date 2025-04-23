import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [frmdata, setFrmdata] = useState({
    your_name: "", number: "", email: "", password: ""
  });

  const loginnav = useNavigate();

  const inpchange = (e) => {
    const { name, value } = e.target;
    setFrmdata({ ...frmdata, [name]: value });
  };

  const Finalsubmit = (e) => {
    e.preventDefault();
    console.log(frmdata);
    localStorage.setItem("userdata", JSON.stringify(frmdata));
    localStorage.setItem("userEmail", frmdata.email); 
    loginnav("/login");
  };

  return (
    <div className="cre-cre-acc">
      <img src="/imgvid/logo3.png" alt="" />
      <h1>Create an account</h1>

      <form onSubmit={Finalsubmit}>
        <label>Your Name</label>
        <input type="text" name="your_name" placeholder="First and Last name" onChange={inpchange} required /> <br />

        <label>Mobile Number</label>
        <input type="tel" name="number" placeholder="Mobile Number" onChange={inpchange} required /> <br /> 

        <label>Email</label>
        <input type="email" name="email" placeholder="Your Email" onChange={inpchange} required /> <br />

        <label>Password</label>
        <input type="password" name="password" placeholder="Your Password" onChange={inpchange} required /> <br /> 

        <input type="submit" value="Create Your Ade-e-Libaas account" />
      </form>
    </div>
  );
};

export default Create;

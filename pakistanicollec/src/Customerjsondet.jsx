import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './App.css';

const Customerjsondet = () => {
  const location = useLocation();
  const [apidata, setApidata] = useState([]);
  const [editdata, setEditdata] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);

  // ✅ Safely retrieve user email from location or localStorage
  const userEmail = location.state?.userEmail || localStorage.getItem("userEmail");

  const handleedit = (e) => {
    const { name, value } = e.target;
    setEditdata({ ...editdata, [name]: value });
  };

  const editfinalsubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/Customer/${editdata.id}`, editdata)
      .then(() => {
        alert("Updated");
        load();
      });
  };

  const del = (id) => {
    axios.delete(`http://localhost:3000/Customer/${id}`)
      .then(() => {
        alert("Deleted");
        load();
      });
  };

  const load = () => {
    axios.get('http://localhost:3000/Customer')
      .then(res => {
        if (userEmail) {
          const filtered = res.data.filter(entry => entry.email === userEmail);
          setApidata(filtered);
        } else {
          setApidata([]); 
        }
      });
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="tab-tab-table">
      <h2>Your Orders</h2>
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

        <tbody>
          {apidata.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.fullname}</td>
              <td>{e.email}</td>
              <td>{e.phnnumber}</td>
              <td>{e.productName}</td>
              <td>{e.productQuantity}</td>
              <td>{e.address}</td>
              <td><button onClick={() => (setShowEditForm(true), setEditdata(e))}>Edit</button></td>
              <td><button onClick={() => del(e.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {showEditForm && (
        <div className="edit-form">
          <h3>Edit Order</h3>

          <label>Full Name</label>
          <input type="text" name="fullname" value={editdata.fullname} onChange={handleedit} /><br />

          <label>Email Address</label>
          <input type="email" name="email" value={editdata.email} onChange={handleedit} /><br />

          <label>Phone Number</label>
          <input type="number" name="phnnumber" value={editdata.phnnumber} onChange={handleedit} /><br />

          <label>Product Name</label>
          <input type="text" name="productName" value={editdata.productName} onChange={handleedit} /><br />

          <label>Quantity</label>
          <input type="number" name="productQuantity" value={editdata.productQuantity} onChange={handleedit} /><br />

          <label>Address</label>
          <input type="text" name="address" value={editdata.address} onChange={handleedit} /><br />

          <button onClick={editfinalsubmit}>Edit Order</button>
        </div>
      )}
    </div>
  );
};

export default Customerjsondet;

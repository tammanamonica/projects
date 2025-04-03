import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Updatatable.css";

const Updatatable = () => {
  const [users, setUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch Users Data
  const getUsersData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  // Add User
  const handleAdd = () => {
    navigate("/Newform");
  };

  // Reject User (Delete)
  const handleReject = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to reject this user?");
    if (isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/users/${id}`);
        setUsers(users.filter((user) => user.userid !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  // Approve User
  const handleApprove = (user) => {
    setApprovedUsers([...approvedUsers, user]);
    setUsers(users.filter((u) => u.userid !== user.userid));
  };

  // Unapprove User
  const handleUnapprove = (user) => {
    setUsers([...users, user]);
    setApprovedUsers(approvedUsers.filter((u) => u.userid !== user.userid));
  };

  return (
    <div className="container mt-4">
      {/* Users Table */}
      <h2>Users</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Age</th>
            <th>City</th>
            <th>Phone</th>
            <th>Score</th>
            <th><button className="btn btn-primary" onClick={handleAdd}>ADD</button></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userid}>
              <td>{user.userid}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td>{user.phno}</td>
              <td>{user.score}</td>
              <td><button className="btn btn-success" onClick={() => handleApprove(user)}>APPROVE</button></td>
              <td><button className="btn btn-danger" onClick={() => handleReject(user.userid)}>REJECT</button></td>
              {/* <td><button className="btn btn-warning" onClick={() => navigate(`/Editfrom/${user.userid}`)}>EDIT</button></td> */}
              <td> <button className="btn btn-warning" onClick={() => navigate(`/Editform/${user.userid}`)}>EDIT</button></td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* Approved Users Table */}
      <h2>Approved Users</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Age</th>
            <th>City</th>
            <th>Phone</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {approvedUsers.map((user) => (
            <tr key={user.userid}>
              <td>{user.userid}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td>{user.phno}</td>
              <td>{user.score}</td>
              <td><button className="btn btn-warning" onClick={() => handleUnapprove(user)}>Un-Approve</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Updatatable;

















// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import './Updatatable.css';

// const Updatatable = () => {
//   const [products, setProducts] = useState([]);
//   const [approvedProducts, setApprovedProducts] = useState([]);
//   const navigate = useNavigate();

//   const getProductsData = async () => {
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.log('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     getProductsData();
//   }, []);

//   const handleAdd = () => {
//     navigate('/Newform'); // Removed extra navigate to Editform
//   };

//   const handleReject = (id) => {
//     const isConfirmed = window.confirm("Are you sure you want to reject this product?");
//     if (isConfirmed) {
//       setProducts(products.filter(product => product.id !== id));
//     }
//   };

//   const handleApprove = (product) => {
//     setApprovedProducts([...approvedProducts, product]);
//     setProducts(products.filter(p => p.id !== product.id));
//   };

//   const handleUnapprove = (product) => {
//     setProducts([...products, product]);
//     setApprovedProducts(approvedProducts.filter(p => p.id !== product.id));
//   };

//   return (
//     <div className="container mt-4">
//       {/* Products Table */}
//       <h2>Products</h2>
//       <table className="table table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th><button className="btn btn-primary" onClick={handleAdd}>ADD</button></th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.title}</td>
//               <td><button className="btn btn-success" onClick={() => handleApprove(product)}>APPROVE</button></td>
//               <td><button className="btn btn-danger" onClick={() => handleReject(product.id)}>REJECT</button></td>
//               <td><button className="btn btn-warning" onClick={handleAdd}>EDIT</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Approved Products Table */}
//       <h2>Approved Products</h2>
//       <table className="table table-bordered">
//         <thead className="table-dark">
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {approvedProducts.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.title}</td>
//               <td><button className="btn btn-warning" onClick={() => handleUnapprove(product)}>Un-Approve</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Updatatable;



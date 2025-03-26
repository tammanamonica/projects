import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './Updatatable.css'


const Updatatable = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  const getproductsdata = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      setProducts(response.data);
    }

    catch (error) {
      console.log('error');
    }
  }

  useEffect(() => {

    getproductsdata();

  }, []);

  const handleAdd = () => {
    navigate('/Newform');
    navigate('/Editfrom');  // Redirects to NewForm page
  };

  // const handleReject = (id) => {
  //   setProducts(products.filter(product => product.id !== id));
  // };
  const handleReject = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to reject this product?");
    if (isConfirmed) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      {/* approve table */}
      <table className="table table-bordered ">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th><button onClick={handleAdd}>ADD</button></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td><button class="btn btn-success">APPROVE</button></td>
              <td><button class="btn btn-danger" onClick={() => handleReject(product.id)}>REJECT</button></td>
              <td><button class="btn btn-warning" onClick={handleAdd}>EDIT</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Un-approve table */}

      <table className="table table-bordered ">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>

          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td><button>Un-Approve</button></td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

  )
}

export default Updatatable

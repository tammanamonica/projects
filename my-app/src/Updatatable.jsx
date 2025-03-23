
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './Updatatable.css'


const Updatatable = () => {
  const [products, setProducts] = useState([]);

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
  return (
    <div className="container mt-4">
  
  <table className="table table-bordered ">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th><button>ADD</button></th>
      </tr>
    </thead>
    <tbody>
      {products.map((product, index) => (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><button class="btn btn-success">APPROVE</button></td>
          <td><button class="btn btn-danger">REJECT</button></td>
          <td><button class="btn btn-warning">EDIT</button></td>

      
          
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default Updatatable

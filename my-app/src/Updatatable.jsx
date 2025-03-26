import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Updatatable.css';

const Updatatable = () => {
  const [products, setProducts] = useState([]);
  const [approvedProducts, setApprovedProducts] = useState([]);
  const navigate = useNavigate();

  const getProductsData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const handleAdd = () => {
    navigate('/Newform'); // Removed extra navigate to Editform
  };

  const handleReject = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to reject this product?");
    if (isConfirmed) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleApprove = (product) => {
    setApprovedProducts([...approvedProducts, product]);
    setProducts(products.filter(p => p.id !== product.id));
  };

  const handleUnapprove = (product) => {
    setProducts([...products, product]);
    setApprovedProducts(approvedProducts.filter(p => p.id !== product.id));
  };

  return (
    <div className="container mt-4">
      {/* Products Table */}
      <h2>Products</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th><button className="btn btn-primary" onClick={handleAdd}>ADD</button></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td><button className="btn btn-success" onClick={() => handleApprove(product)}>APPROVE</button></td>
              <td><button className="btn btn-danger" onClick={() => handleReject(product.id)}>REJECT</button></td>
              <td><button className="btn btn-warning" onClick={handleAdd}>EDIT</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Approved Products Table */}
      <h2>Approved Products</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {approvedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td><button className="btn btn-warning" onClick={() => handleUnapprove(product)}>Un-Approve</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Updatatable;

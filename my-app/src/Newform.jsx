import React from 'react'
import './Newform.css'
import { useNavigate } from 'react-router-dom';

const Newform = () => {
  const navigate = useNavigate();
  return (
    <div  className='newform'>
    <h1>NEW USERS FORM</h1>
   
    <form className='form'>
      <label>Name: <input type="text" /></label><br /><br />
      <label>Age: <input type="number" /></label><br /><br />
      <label>Phone No: <input type="tel" /></label><br /><br />
      <label>City: <input type="text" /></label><br /><br />
      <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}> Back</button>
      <button type="submit" className='btn btn-success ms-2'>Submit</button>
      
    </form>
  </div>
  )
}

export default Newform

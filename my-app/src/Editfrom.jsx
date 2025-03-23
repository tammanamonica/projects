import React from 'react';
import './Editfrom.css'; 

const Editfrom = () => {
  return (
    <div  className='editform'>
      <h1>EDIT USERS</h1>
     
      <form className='form'>
        <label>Name: <input type="text" /></label><br /><br />
        <label>Age: <input type="number" /></label><br /><br />
        <label>Phone No: <input type="tel" /></label><br /><br />
        <label>City: <input type="text" /></label><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Editfrom;


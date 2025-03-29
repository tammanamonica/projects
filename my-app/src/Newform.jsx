import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Newform.css";

const Newform = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    userid: "",
    phno: "",
    city: "",
    score: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", formData, {
        headers: { "Content-Type": "application/json" }
      });
      alert("User added successfully!");
      navigate("/"); // Go back to the table
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user.");
    }
  };

  return (
    <div className="newform">
      <h1>NEW USERS FORM</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label><br /><br />
        <label>
          Age: <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label><br /><br />
        <label>
          UserId: <input type="text" name="userid" value={formData.userid} onChange={handleChange} required />
        </label><br /><br />
        <label>
          Phone No: <input type="text" name="phno" value={formData.phno} onChange={handleChange} required />
        </label><br /><br />
        <label>
          City: <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label><br /><br />
        <label>
          Score: <input type="number" name="score" value={formData.score} onChange={handleChange} required />
        </label><br /><br />
        <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Back</button>
        <button type="submit" className="btn btn-success ms-2">Submit</button>
      </form>
    </div>
  );
};

export default Newform;
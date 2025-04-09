import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Editform.css";

const Editform = () => {
  const { _id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    age: "",
    userid: "",
    phno: "",
    city: "",
    score: ""
  });

  // Fetch existing user data for editing
  useEffect(() => {
    console.log("Fetching user with ID:", _id);

    axios.get(`http://localhost:5000/users/${_id}`)
      .then((response) => {
        if (response.data) {
          console.log("User data fetched:", response.data);
          setFormData(response.data);
        } else {
          alert("User not found!");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        alert("Failed to fetch user data.");
        navigate("/");
      });
  }, [id, navigate]); 

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Updating user:", formData);

      const response = await axios.put(`http://localhost:5000/users/${_id}`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("User updated successfully!");
        navigate("/"); 
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user.");
    }
  };

  return (
    <div className="editform">
      <h1>Edit User</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          User ID: <input type="text" name="userid" value={formData.userid} onChange={handleChange} required readOnly />
        </label><br /><br />
        <label>
          Name: <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label><br /><br />
        <label>
          Age: <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label><br /><br />
        <label>
          Phone No: <input type="tel" name="phno" value={formData.phno} onChange={handleChange} required />
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

export default Editform;


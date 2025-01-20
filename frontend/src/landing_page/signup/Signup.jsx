import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required.');
      return;
    }
    try {
      const res = await axios.post('http://localhost:3002/api/auth/signup',{
        ...formData
      })
      if (res){
        setError('');
        localStorage.setItem("user",formData.username);
        alert('Sign Up Successful!');
        window.location.href = "http://localhost:5173";

      }
    } catch (error) {
      console.log(error)
    }

    // Simulate an API call
    console.log('Form Submitted', formData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f7f7f7' }}>
      <form 
        onSubmit={handleSubmit} 
        style={{ padding: '20px', maxWidth: '400px', width: '100%', border: '1px solid #ddd', borderRadius: '8px', background: '#fff' }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>

        {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>

        <button 
          type="submit" 
          style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    blood_group: 'A+',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/auth/patient/register', { ...formData, age: parseInt(formData.age) });
      navigate('/login?role=patient');
    } catch (err) {
      setError(err.response?.data?.detail || 'Registration failed');
    }
  };

  return (
    <div className="container flex justify-center items-center" style={{ minHeight: 'calc(100vh - 72px)', padding: '40px 0' }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Create Patient Account</h2>
        
        {error && <div style={{ color: 'var(--error)', backgroundColor: 'var(--error-container)', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}

        <form onSubmit={handleSubmit} className="flex-col gap-md">
          <div>
            <label className="label">Full Name</label>
            <input type="text" name="name" className="input-field" value={formData.name} onChange={handleChange} required />
          </div>
          
          <div className="flex gap-md">
            <div style={{ flex: 1 }}>
              <label className="label">Age</label>
              <input type="number" name="age" className="input-field" value={formData.age} onChange={handleChange} required />
            </div>
            <div style={{ flex: 1 }}>
              <label className="label">Gender</label>
              <select name="gender" className="input-field" value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label className="label">Blood Group</label>
              <select name="blood_group" className="input-field" value={formData.blood_group} onChange={handleChange}>
                <option value="A+">A+</option><option value="A-">A-</option>
                <option value="B+">B+</option><option value="B-">B-</option>
                <option value="AB+">AB+</option><option value="AB-">AB-</option>
                <option value="O+">O+</option><option value="O-">O-</option>
              </select>
            </div>
          </div>

          <div>
            <label className="label">Email Address</label>
            <input type="email" name="email" className="input-field" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label className="label">Password</label>
            <input type="password" name="password" className="input-field" value={formData.password} onChange={handleChange} required minLength="6" />
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>Register</button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
          Already have an account? <Link to="/login?role=patient">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../api/axios';

const LoginPage = () => {
  const [role, setRole] = useState('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam === 'doctor') {
      setRole('doctor');
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const formParams = new URLSearchParams();
    formParams.append('username', email);
    formParams.append('password', password);

    try {
      const endpoint = role === 'patient' ? '/auth/patient/login' : '/auth/doctor/login';
      const response = await api.post(endpoint, formParams, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      
      login(response.data.access_token, role);
      if (role === 'patient') {
        navigate('/patient/dashboard');
      } else {
        navigate('/doctor/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <div className="container flex justify-center items-center" style={{ minHeight: 'calc(100vh - 72px)', padding: '40px 0' }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Welcome Back</h2>
        
        <div className="flex" style={{ backgroundColor: 'var(--surface-container)', borderRadius: 'var(--border-radius-md)', padding: '4px', marginBottom: '24px' }}>
          <button 
            style={{ flex: 1, padding: '8px 0', borderRadius: 'var(--border-radius-sm)', backgroundColor: role === 'patient' ? 'var(--surface-lowest)' : 'transparent', color: role === 'patient' ? 'var(--on-surface)' : 'var(--on-surface-variant)', boxShadow: role === 'patient' ? 'var(--shadow-ambient)' : 'none' }}
            onClick={() => setRole('patient')}
            type="button"
          >
            Patient
          </button>
          <button 
            style={{ flex: 1, padding: '8px 0', borderRadius: 'var(--border-radius-sm)', backgroundColor: role === 'doctor' ? 'var(--surface-lowest)' : 'transparent', color: role === 'doctor' ? 'var(--on-surface)' : 'var(--on-surface-variant)', boxShadow: role === 'doctor' ? 'var(--shadow-ambient)' : 'none' }}
            onClick={() => setRole('doctor')}
            type="button"
          >
            Doctor
          </button>
        </div>

        {error && <div style={{ color: 'var(--error)', backgroundColor: 'var(--error-container)', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}

        <form onSubmit={handleSubmit} className="flex-col gap-md">
          <div>
            <label className="label">Email Address</label>
            <input type="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="label">Password</label>
            <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
            Login as {role === 'patient' ? 'Patient' : 'Doctor'}
          </button>
        </form>

        {role === 'patient' && (
          <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

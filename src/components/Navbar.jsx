import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Activity } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={{ 
      backgroundColor: 'var(--surface-lowest)', 
      borderBottom: '1px solid var(--surface-container)',
      padding: '16px 0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-sm" style={{ color: 'var(--primary)', fontSize: '20px', fontWeight: 'bold' }}>
          <Activity size={24} />
          MediPoint
        </Link>
        <div className="flex items-center gap-md">
          {user ? (
            <>
              <Link 
                to={user.role === 'patient' ? '/patient/dashboard' : '/doctor/dashboard'}
                style={{ color: 'var(--on-surface-variant)', fontWeight: 600 }}
              >
                Dashboard
              </Link>
              <button className="btn-secondary" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ color: 'var(--on-surface-variant)', fontWeight: 600 }}>Login</Link>
              <Link to="/register" className="btn-primary">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

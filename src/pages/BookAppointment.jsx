import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';

const BookAppointment = () => {
  const { doctor_id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [formData, setFormData] = useState({ date: '', time: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await api.get(`/doctors/${doctor_id}`);
        setDoctor(res.data);
      } catch (err) {
        setError("Doctor not found");
      }
    };
    fetchDoctor();
  }, [doctor_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/appointments', {
        Doctor_ID: parseInt(doctor_id),
        Date: formData.date,
        Time: formData.time + ':00' // append seconds to match time format if needed
      });
      navigate('/patient/dashboard');
    } catch (err) {
      setError("Failed to book appointment");
    }
  };

  if (!doctor) return <div className="container" style={{ padding: '40px 0' }}>Loading...</div>;

  return (
    <div className="container flex items-center justify-center" style={{ minHeight: 'calc(100vh - 72px)' }}>
      <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
        <h2 style={{ marginBottom: '8px' }}>Book Appointment</h2>
        <p style={{ color: 'var(--on-surface-variant)', marginBottom: '24px' }}>
          Consultation with <strong style={{ color: 'var(--on-surface)' }}>{doctor.Name}</strong> ({doctor.Specialization})
        </p>

        {error && <div style={{ color: 'var(--error)', backgroundColor: 'var(--error-container)', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}

        <div style={{ padding: '16px', backgroundColor: 'var(--surface-container-low)', borderRadius: '8px', marginBottom: '24px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            Doctor's Schedule: <strong style={{ color: 'var(--on-surface)' }}>{doctor.Schedule}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex-col gap-md">
          <div>
            <label className="label">Select Date</label>
            <input type="date" className="input-field" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} required min={new Date().toISOString().split('T')[0]} />
          </div>
          <div>
            <label className="label">Select Time</label>
            <input type="time" className="input-field" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} required />
          </div>
          <div className="flex gap-md" style={{ marginTop: '16px' }}>
            <button type="button" className="btn-secondary" style={{ flex: 1 }} onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn-primary" style={{ flex: 1 }}>Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;

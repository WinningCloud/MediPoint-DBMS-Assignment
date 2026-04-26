import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import AppointmentCard from '../components/AppointmentCard';

const DoctorDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [todayCount, setTodayCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const [profileRes, appointmentsRes, countRes] = await Promise.all([
        api.get('/doctors/me'),
        api.get('/appointments/doctor'),
        api.get('/appointments/doctor/today')
      ]);
      setProfile(profileRes.data);
      setAppointments(appointmentsRes.data);
      setTodayCount(countRes.data.count);
    } catch (err) {
      console.error("Failed to fetch dashboard data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await api.patch(`/appointments/${id}/status`, { status });
      fetchData(); // refresh list
    } catch (err) {
      alert("Failed to update status");
    }
  };

  if (loading) return <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>Loading dashboard...</div>;

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ marginBottom: '8px' }}>Dr. {profile?.Name?.replace('Dr. ', '')}</h1>
        <p style={{ color: 'var(--on-surface-variant)' }}>{profile?.Specialization} Profile & Schedule</p>
      </div>

      <div className="card flex items-center justify-between" style={{ backgroundColor: 'var(--primary)', color: 'var(--on-primary)', marginBottom: '32px' }}>
        <div>
          <h2 style={{ color: 'white', marginBottom: '4px' }}>Appointments Today</h2>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '14px' }}>Total number of consultations scheduled for today.</p>
        </div>
        <div style={{ fontSize: '48px', fontWeight: 'bold' }}>{todayCount}</div>
      </div>

      <h2 style={{ marginBottom: '24px' }}>All Appointments</h2>
      {appointments.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {appointments.map(appt => (
            <AppointmentCard 
              key={appt.Appointment_ID} 
              appointment={appt} 
              role="doctor" 
              onStatusUpdate={handleStatusUpdate} 
            />
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic', padding: '16px', backgroundColor: 'var(--surface-container-low)', borderRadius: '8px' }}>No appointments scheduled.</p>
      )}
    </div>
  );
};

export default DoctorDashboard;

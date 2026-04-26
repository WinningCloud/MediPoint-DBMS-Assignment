import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import DoctorCard from '../components/DoctorCard';
import AppointmentCard from '../components/AppointmentCard';

const PatientDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, doctorsRes, appointmentsRes] = await Promise.all([
          api.get('/patients/me'),
          api.get('/doctors'),
          api.get('/appointments/mine')
        ]);
        setProfile(profileRes.data);
        setDoctors(doctorsRes.data);
        setAppointments(appointmentsRes.data);
      } catch (err) {
        console.error("Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="container" style={{ padding: '40px 0', textAlign: 'center' }}>Loading dashboard...</div>;

  return (
    <div className="container" style={{ padding: '40px 0' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ marginBottom: '8px' }}>Welcome, {profile?.Name}</h1>
        <p style={{ color: 'var(--on-surface-variant)' }}>Manage your health and appointments.</p>
      </div>

      <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 60%' }}>
          <h2 style={{ marginBottom: '16px' }}>Available Doctors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {doctors.map(doctor => (
              <DoctorCard key={doctor.Doctor_ID} doctor={doctor} />
            ))}
          </div>
        </div>

        <div style={{ flex: '1 1 30%', minWidth: '300px' }}>
          <h2 style={{ marginBottom: '16px' }}>Your Appointments</h2>
          <div className="flex-col gap-md">
            {appointments.length > 0 ? (
              appointments.map(appt => (
                <AppointmentCard key={appt.Appointment_ID} appointment={appt} role="patient" />
              ))
            ) : (
              <p style={{ color: 'var(--on-surface-variant)', fontStyle: 'italic', padding: '16px', backgroundColor: 'var(--surface-container-low)', borderRadius: '8px' }}>No upcoming appointments.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;

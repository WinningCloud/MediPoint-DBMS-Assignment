import React from 'react';
import StatusBadge from './StatusBadge';
import { Calendar, Clock, CheckCircle, XCircle } from 'lucide-react';

const AppointmentCard = ({ appointment, role, onStatusUpdate }) => {
  const isDoctor = role === 'doctor';
  const personName = isDoctor ? appointment.Patient_Name : appointment.Doctor_Name;
  const subtitle = isDoctor ? 'Patient' : appointment.Doctor_Specialization;

  return (
    <div className="card flex-col gap-sm">
      <div className="flex justify-between items-center" style={{ marginBottom: '12px' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '18px' }}>{personName}</h3>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px', margin: 0 }}>
            {subtitle}
          </p>
        </div>
        <StatusBadge status={appointment.Status} />
      </div>

      <div className="flex gap-lg" style={{ padding: '12px 0' }}>
        <div className="flex items-center gap-sm">
          <Calendar size={16} color="var(--outline)" />
          <span style={{ fontSize: '14px' }}>{appointment.Date}</span>
        </div>
        <div className="flex items-center gap-sm">
          <Clock size={16} color="var(--outline)" />
          <span style={{ fontSize: '14px' }}>{appointment.Time}</span>
        </div>
      </div>

      {isDoctor && appointment.Status === 'Pending' && (
        <div className="flex gap-md" style={{ marginTop: '8px', borderTop: '1px solid var(--surface-container)', paddingTop: '16px' }}>
          <button 
            className="btn-primary flex items-center justify-center gap-sm" 
            style={{ flex: 1, backgroundColor: '#059669', color: '#fff' }}
            onClick={() => onStatusUpdate(appointment.Appointment_ID, 'Completed')}
          >
            <CheckCircle size={16} /> Complete
          </button>
          <button 
            className="btn-secondary flex items-center justify-center gap-sm" 
            style={{ flex: 1, color: '#DC2626', borderColor: '#DC2626' }}
            onClick={() => onStatusUpdate(appointment.Appointment_ID, 'Cancelled')}
          >
            <XCircle size={16} /> Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;

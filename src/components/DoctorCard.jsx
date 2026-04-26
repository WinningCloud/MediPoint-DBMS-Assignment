import React, { useState } from 'react';
import { Calendar, Clock, User, FileText, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Generate a static, unique avatar representation for the doctor
  const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.Name.replace(/\s+/g, '')}`;

  return (
    <>
      <div className="card flex-col gap-sm" style={{ display: 'flex', height: '100%' }}>
        <div className="flex items-center gap-md" style={{ marginBottom: '8px' }}>
          <img 
            src={avatarUrl}
            alt={doctor.Name}
            style={{
              width: '48px', height: '48px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--surface-container)',
              objectFit: 'cover'
            }}
          />
          <div>
            <h3 style={{ margin: 0 }}>{doctor.Name}</h3>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px', margin: 0 }}>
              {doctor.Specialization}
            </p>
          </div>
        </div>
        
        <div style={{ padding: '12px 0', borderTop: '1px solid var(--surface-container)', borderBottom: '1px solid var(--surface-container)' }}>
          <div className="flex items-center gap-sm" style={{ color: 'var(--on-surface)' }}>
            <Clock size={16} color="var(--outline)" />
            <span style={{ fontSize: '14px' }}>{doctor.Schedule}</span>
          </div>
        </div>
        
        <div className="flex gap-sm" style={{ marginTop: 'auto', paddingTop: '8px' }}>
          <button 
            type="button"
            className="btn-secondary"
            style={{ flex: 1, padding: '10px 12px' }}
            onClick={() => setIsModalOpen(true)}
          >
            View Doctor
          </button>
          <Link 
            to={`/patient/book/${doctor.Doctor_ID}`}
            className="btn-primary"
            style={{ flex: 1, textAlign: 'center', padding: '10px 12px' }}
          >
            Book
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div className="card flex-col gap-lg" style={{ 
            width: '100%', 
            maxWidth: '500px', 
            position: 'relative'
          }}>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px', right: '16px',
                background: 'transparent',
                color: 'var(--on-surface-variant)',
                padding: '4px'
              }}
            >
              <X size={24} />
            </button>

            <div className="flex-col items-center" style={{ textAlign: 'center', marginTop: '16px', display: 'flex' }}>
               <img 
                  src={avatarUrl}
                  alt={doctor.Name}
                  style={{
                    width: '100px', height: '100px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--surface-container)',
                    objectFit: 'cover',
                    marginBottom: '16px', border: '3px solid var(--primary)'
                  }}
                />
                <h2>{doctor.Name}</h2>
                <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '16px', margin: 0 }}>
                  {doctor.Specialization}
                </p>
            </div>

            <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="flex items-center gap-md">
                <Clock size={20} color="var(--primary)" />
                <div>
                  <span className="label" style={{ marginBottom: 0 }}>Schedule</span>
                  <span style={{ fontSize: '15px' }}>{doctor.Schedule}</span>
                </div>
              </div>
              <div className="flex items-center gap-md">
                <Mail size={20} color="var(--primary)" />
                <div>
                  <span className="label" style={{ marginBottom: 0 }}>Contact Email</span>
                  <span style={{ fontSize: '15px' }}>{doctor.Email}</span>
                </div>
              </div>
              <div className="flex items-center gap-md">
                <User size={20} color="var(--primary)" />
                <div>
                  <span className="label" style={{ marginBottom: 0 }}>Doctor ID</span>
                  <span style={{ fontSize: '15px' }}>#{doctor.Doctor_ID}</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '8px' }}>
              <Link 
                to={`/patient/book/${doctor.Doctor_ID}`}
                className="btn-primary"
                style={{ display: 'block', textAlign: 'center', width: '100%', padding: '14px' }}
                onClick={() => setIsModalOpen(false)}
              >
                Book Appointment Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorCard;

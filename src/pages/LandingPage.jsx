import React from 'react';
import { Link } from 'react-router-dom';
import { User, Stethoscope, CalendarCheck, ShieldCheck, HeartPulse, ArrowRight, Activity, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 72px)', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <div 
        className="container" 
        style={{ 
          padding: '80px 24px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          background: 'linear-gradient(to bottom, var(--surface), var(--surface-container))',
          borderRadius: '0 0 32px 32px'
        }}
      >
        <div style={{ padding: '8px 16px', background: 'var(--secondary-container)', color: 'var(--on-secondary-container)', borderRadius: '99px', fontSize: '14px', fontWeight: '600', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Activity size={16} /> 
          <span>Welcome to the future of healthcare</span>
        </div>
        <h1 style={{ fontSize: '56px', color: 'var(--on-surface)', marginBottom: '24px', maxWidth: '800px', letterSpacing: '-1px', lineHeight: '1.1' }}>
          Clinical Clarity. <span style={{ color: 'var(--primary)' }}>Modern Care.</span>
        </h1>
        <p style={{ fontSize: '20px', color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.6' }}>
          Welcome to MediPoint, the unified platform bridging the gap between precision healthcare and seamless patient experience. Book appointments, manage schedules, and prioritize health.
        </p>
        
        <div className="flex justify-center gap-lg" style={{ flexWrap: 'wrap', width: '100%', maxWidth: '800px' }}>
          <Link 
            to="/login?role=patient" 
            className="card flex-col items-center justify-center gap-sm" 
            style={{ 
              flex: '1', minWidth: '280px', textDecoration: 'none', 
              transition: 'all 0.3s ease', border: '2px solid transparent', cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
          >
            <div style={{ padding: '20px', backgroundColor: 'var(--primary)', borderRadius: '50%', color: 'var(--on-primary)', marginBottom: '8px' }}>
              <User size={36} />
            </div>
            <h3 style={{ margin: 0, fontSize: '22px' }}>I'm a Patient</h3>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px', margin: 0, padding: '0 16px', textAlign: 'center' }}>
              Find expert doctors and book appointments instantly.
            </p>
            <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '12px', fontWeight: 'bold', fontSize: '14px' }}>
              Get Started <ArrowRight size={16} />
            </div>
          </Link>

          <Link 
            to="/login?role=doctor" 
            className="card flex-col items-center justify-center gap-sm" 
            style={{ 
              flex: '1', minWidth: '280px', textDecoration: 'none', 
              transition: 'all 0.3s ease', border: '2px solid transparent', cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
          >
            <div style={{ padding: '20px', backgroundColor: 'var(--secondary)', borderRadius: '50%', color: 'var(--on-secondary)', marginBottom: '8px' }}>
              <Stethoscope size={36} />
            </div>
            <h3 style={{ margin: 0, fontSize: '22px' }}>I'm a Doctor</h3>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px', margin: 0, padding: '0 16px', textAlign: 'center' }}>
              Manage your schedule, track patients, and streamline care.
            </p>
            <div style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '12px', fontWeight: 'bold', fontSize: '14px' }}>
              Access Dashboard <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container" style={{ padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Why choose MediPoint?</h2>
          <p style={{ fontSize: '18px', color: 'var(--on-surface-variant)', maxWidth: '600px', margin: '0 auto' }}>
            We've redesigned the healthcare experience from the ground up to make it easier for both patients and medical professionals.
          </p>
        </div>

        <div className="flex gap-lg justify-center" style={{ flexWrap: 'wrap' }}>
          {/* Feature 1 */}
          <div style={{ flex: '1', minWidth: '250px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--secondary-container)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <CalendarCheck size={32} />
            </div>
            <h3 style={{ marginBottom: '12px' }}>Instant Booking</h3>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.6' }}>Skip the wait times. View available slots in real-time and book your appointments with just a few clicks.</p>
          </div>

          {/* Feature 2 */}
          <div style={{ flex: '1', minWidth: '250px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--error-container)', color: 'var(--error)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <HeartPulse size={32} />
            </div>
            <h3 style={{ marginBottom: '12px' }}>Top Specialists</h3>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.6' }}>Access our vast network of verified, experienced professionals across multiple medical disciplines.</p>
          </div>

          {/* Feature 3 */}
          <div style={{ flex: '1', minWidth: '250px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(13, 115, 119, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <ShieldCheck size={32} />
            </div>
            <h3 style={{ marginBottom: '12px' }}>Secure & Private</h3>
            <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.6' }}>Your health dat is yours. Enjoy peace of mind with enterprise-grade security and strict privacy protocols.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: 'auto', background: 'var(--on-surface)', color: 'white', padding: '48px 24px 24px', borderTopLeftRadius: '32px', borderTopRightRadius: '32px' }}>
        <div className="container flex justify-between" style={{ flexWrap: 'wrap', gap: '32px', marginBottom: '48px' }}>
          <div style={{ maxWidth: '300px' }}>
            <h2 style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Activity size={28} color="var(--primary)" /> MediPoint
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6' }}>
              Streamlining healthcare connections. Making access to quality medical professionals easy, intuitive, and stress-free.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ color: 'white', marginBottom: '16px', fontSize: '18px' }}>For Patients</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><Link to="/login?role=patient" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Find a Doctor</Link></li>
                <li><Link to="/login?role=patient" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Book Appointment</Link></li>
                <li><Link to="/register?role=patient" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Create Account</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '16px', fontSize: '18px' }}>For Providers</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><Link to="/login?role=doctor" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Doctor Login</Link></li>
                <li><Link to="/login?role=doctor" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Manage Schedule</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: 0 }}>
            &copy; {new Date().getFullYear()} MediPoint. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

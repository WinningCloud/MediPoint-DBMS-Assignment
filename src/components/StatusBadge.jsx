import React from 'react';

const StatusBadge = ({ status }) => {
  let color = '';
  let bgColor = '';
  
  switch(status.toLowerCase()) {
    case 'pending':
      color = '#2563EB'; // secondary
      bgColor = 'rgba(37, 99, 235, 0.1)';
      break;
    case 'completed':
      color = '#059669'; // emerald
      bgColor = 'rgba(5, 150, 105, 0.1)';
      break;
    case 'cancelled':
      color = '#DC2626'; // red
      bgColor = 'rgba(220, 38, 38, 0.1)';
      break;
    default:
      color = '#6B7280';
      bgColor = 'rgba(107, 114, 128, 0.1)';
  }

  return (
    <span 
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 12px',
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: '600',
        color: color,
        backgroundColor: bgColor
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;

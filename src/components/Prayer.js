import React from 'react';
import { format } from 'date-fns';
import '../styles/prayer.scss'

const formatRemaining = (diff) => {
  const minutes = diff % 60;
  const hours = Math.floor(diff / 60);
  const date = new Date();
  date.setMinutes(minutes);
  date.setHours(hours);
  return format(date, 'HH:mm');
};

function Prayer({ name, time, active, remaining }) {
  return (
    <div className={`prayer ${active ? 'active' : ''}`}>
      <div className="prayer-name">
        {name}
      </div>
      <div className="time-wrapper">
        <div className="remaining">
          {remaining > 0 ? `${formatRemaining(remaining)}` : ''}
        </div>
        <div className="prayer-time">
          {time}
        </div>
      </div>
    </div>
  );
};

export default Prayer;
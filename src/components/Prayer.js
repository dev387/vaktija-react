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

const isPrayerActive = ({ nextPrayer, remaining }) => {
  return remaining <= 0 && nextPrayer.remaining > 0;
};

function Prayer({ name, time, remaining, nextPrayer }) {
  return (
    <div className={`prayer ${isPrayerActive({remaining, nextPrayer}) ? 'active' : ''}`}>
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

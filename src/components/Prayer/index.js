import React, { useState, useEffect } from 'react';
import { format, differenceInMinutes } from 'date-fns';
import './prayer.scss'

const formatRemaining = (diff) => {
  const minutes = diff % 60;
  const hours = Math.floor(diff / 60);
  const date = new Date();
  date.setMinutes(minutes);
  date.setHours(hours);
  return format(date, 'HH:mm');
};

const isPrayerActive = ({ nextPrayer, timeRemaining, id }) => {
  return (
    (timeRemaining <= 0 && nextPrayer.remaining > 0)
    || (id === 5 && timeRemaining < 0)
    || (id === 5 && nextPrayer.remaining > 0)
  );
};

const updateTimeRemaining = (time) => {
  const [h, m] = time.split(':');
  const date = new Date();
  date.setHours(h);
  date.setMinutes(m);

  return differenceInMinutes(date, new Date());
}

function Prayer({ name, time, remaining, nextPrayer, id }) {
  const [timeRemaining, setTimeRemaining] = useState(remaining)

  useEffect(() => {
    let timeoutId = setInterval(() => {
      setTimeRemaining(updateTimeRemaining(time));
    }, 15000);

    return () => {
      console.info('Intervals cleaned');
      clearInterval(timeoutId);
    };
  })
  

  return (
    <div className={`prayer ${isPrayerActive({ timeRemaining, nextPrayer, id }) ? 'active' : ''}`}>
      <div className="prayer-name">
        {name}
      </div>
      <div className="time-wrapper">
        <div className="remaining">
          {timeRemaining > 0 ? `${formatRemaining(timeRemaining)}` : ''}
        </div>
        <div className="prayer-time">
          {time}
        </div>
      </div>
    </div>
  );
};

export default Prayer;

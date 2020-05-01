// Import 3rd party components
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

// Import styles
import './clock.scss';

const Clock = () => {
  const timeFormat = 'HH : mm : ss';

  const currentTime = format(new Date(), timeFormat);
  const currentDate = format(new Date(), 'dd.MM.yyyy');
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    setInterval(()=> {
      setTime(format(new Date(), timeFormat));
    }, 1000);
  });

  return (
    <div className="clock">
      <div>{time}</div>
      <div>{currentDate}</div>
    </div>
  );
};

export default Clock;
// Import 3rd party components
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

// Import styles
import './clock.scss';

const Clock = () => {

  const currentTime = format(new Date(), 'HH:mm:ss');
  const currentDate = format(new Date(), 'dd.MM.yyyy');
  const [date, setDate] = useState(currentTime);

  useEffect(() => {
    setInterval(()=> {
      setDate(format(new Date(), 'HH:mm:ss'));
    }, 1000);
  });

  return (
    <div className="clock">
      <div>{date}</div>
      <div>{currentDate}</div>
    </div>
  );
};

export default Clock;
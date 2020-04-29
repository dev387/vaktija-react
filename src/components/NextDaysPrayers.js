import React from 'react';
import '../styles/prayer.scss';

const Prayer = ({ shortName, time }) => {
  return (
    <div>
      <div className="name">{shortName}</div>
      <div className="time">{time}</div>
    </div>
  );
};

const Day = () => {
  return (
    <div className="daily-prayers">
      <Prayer shortName="Zora" time="03:57" />
    </div>
  );
};

export default () => {
  return (
    <div className="next-prayers-wrapper">
      <Day />
    </div>
  );
};
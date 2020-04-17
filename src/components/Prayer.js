import React from 'react';
import '../styles/prayer.scss'

function Prayer({ name, time, active }) {

  return (
    <div className={ `prayer ${active? 'active': ''}` }>
      <div className="prayer-name">
        { name }
      </div>
      <div className="prayer-time">
        { time }
      </div>
    </div>
  );
};

export default Prayer;
import React from 'react';

function Prayer({ name, time, active }) {

  return (
    <div className={ `salah ${active? 'active': ''}` }>
      <div className="name">
        { name }
      </div>
      <div className="time">
        { time }
      </div>
    </div>
  );
};

export default Prayer;
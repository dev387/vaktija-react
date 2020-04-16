import React from 'react';

function Header() {
  const location = 'Mostar';
  const currentDate= new Date();

  return (
    <div className="header font-alt">
      <h1>{location}</h1>
      <p>{currentDate.toDateString()}</p>
    </div>
  );
}

export default Header;
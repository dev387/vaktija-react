import React from 'react';
import '../styles/header.scss'

function Header() {
  const location = 'Mostar';
  const currentDate= new Date();

  return (
    <div className="header font-alt">
      <div className="header-info">
        {location}, {currentDate.toDateString()}
      </div>
      <div className="locations-wrapper">
        <select defaultValue="mostar" name="locations" id="locations">
          <option value="sarajevo">Sarajevo</option>
          <option value="mostar">Mostar</option>
          <option value="konjic">Konjic</option>
        </select>
        <div className="select-icon"></div>
      </div>
    </div>
  );
}

export default Header;
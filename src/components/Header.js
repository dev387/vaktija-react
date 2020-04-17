import React from 'react';

import '../styles/header.scss'

function Header({ locations, selected }) {
  const location = locations[selected] || 'Mostar';
  const currentDate = new Date();

  return (
    <div className="header font-alt">
      <div className="header-info">
        {location}, {currentDate.toDateString()}
      </div>
      <div className="locations-wrapper">
        {
          locations.length ?
            (<>
              <select defaultValue={selected} name="locations" id="locations">
                {locations.map(
                  (location, id) => <option key={id} value={id}>{location}</option>
                )}
              </select>
              <div className="select-icon"></div>
            </>)
            :
            ('Ucitavanje...')
        }
      </div>
    </div>
  );
}

export default Header;
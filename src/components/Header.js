import React, { useEffect, useState } from 'react';

import Menu from './Menu';
import helpers from '../services/helpers';
import api from '../services/api';

import '../styles/header.scss'

function Header({ onChangeSelected }) {
  const data = {
    locations: helpers.getDataByKey('locations'),
    selectedLocation: helpers.getDataByKey('selectedLocation'),
  }
  const [selectedLocation, setLocation] = useState(data.selectedLocation || 61);
  const [locations, setLocations] = useState(data.locations || []);
  const location = locations[selectedLocation] || 'Mostar';
  const currentDate = new Date();

  const changeLocation = (e) => {
    setLocation(e.target.value);
    onChangeSelected(e.target.value);
    helpers.storeDataByKey({ key: 'selectedLocation', value: e.target.value });
  };

  useEffect(() => {
    if (!locations || !locations.length) {
      api.getLocations().then((response) => {
        setLocations(response);
        helpers.storeDataByKey({ key: 'locations', value: response });
      });
    }
  }, [locations]);

  return (
    <div className="header font-alt">
      <div className="navigation">
        <Menu />
        {location}, {currentDate.toDateString()}
      </div>
      {
        locations.length ?
          (<>
            <select
              className="form-control"
              name="locations"
              defaultValue={selectedLocation}
              onChange={changeLocation}
            >
              {locations.map(
                (location, id) => <option key={id} value={id}>{location}</option>
              )}
            </select>
          </>)
          :
          ('Ucitavanje...')
      }
    </div>
  );
}

export default Header;
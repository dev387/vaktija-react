import React, { useEffect, useState } from 'react';

import Menu from '../Menu';
import Clock from '../Clock';
import helpers from '../../services/helpers';
import api from '../../services/api';

import './header.scss';

function Header({ onChangeSelected, islamicDate }) {
  const data = {
    locations: helpers.getDataByKey('locations'),
    selectedLocation: helpers.getDataByKey('selectedLocation'),
  }
  const [selectedLocation, setLocation] = useState(data.selectedLocation || 61);
  const [locations, setLocations] = useState(data.locations || []);

  const changeLocation = (e) => {
    setLocation(e.target.value);
    onChangeSelected(e.target.value);
    helpers.storeDataByKey({ key: 'selectedLocation', value: e.target.value });
  };

  useEffect(() => {
    if (!locations || !locations.length) {
      const fetchLocations = async () => {
        const response = api.getLocations();
        setLocations(response);
        helpers.storeDataByKey({ key: 'locations', value: response });
      };

      fetchLocations();
    }
  }, [locations]);

  return (
    <div className="header font-alt">
      <div className="navigation">
        <Menu />
        <div className="header-info">
          {islamicDate}
        </div>
        <div className="clock-wrapper">
          <Clock />
        </div>
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
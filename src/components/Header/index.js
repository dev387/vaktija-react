import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import Menu from '../Menu';
import helpers from '../../services/helpers';
import api from '../../services/api';

import '../../styles/header.scss';

function Header({ onChangeSelected, islamicDate }) {
  const data = {
    locations: helpers.getDataByKey('locations'),
    selectedLocation: helpers.getDataByKey('selectedLocation'),
  }
  const [selectedLocation, setLocation] = useState(data.selectedLocation || 61);
  const [locations, setLocations] = useState(data.locations || []);
  const currentDate = format(new Date(), 'dd.MM.yyyy');

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
          <div>{islamicDate}</div>
          <div>{currentDate}</div>
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
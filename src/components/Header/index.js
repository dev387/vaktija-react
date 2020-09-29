import React, { useEffect, useState } from 'react';

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
        const response = await api.getLocations();
        setLocations(response);
        helpers.storeDataByKey({ key: 'locations', value: response });
      };

      fetchLocations();
    }
  }, [locations]);

  return (
    <div className="header font-alt">
      <div className="navigation">
        <div className="selector">
          {
            locations.length ?
              (<>
                <select
                  className="custom-select"
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
        <div>
          <div className="header-date-time">
            {islamicDate}
            <Clock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
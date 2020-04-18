import React, { useState, useEffect } from 'react';
import api from '../services/api';
import helpers from '../services/helpers';
import Header from './Header';
import Prayer from './Prayer';
import Footer from './Footer';
import PrayerModel from '../models/Prayer';
import '../styles/app.scss'

function App() {
  const data = helpers.getData();

  const [locations, setLocations] = useState(data.locations || []);
  const [selectedLocation, setLocation] = useState(data.selectedLocation || 61);
  const [prayerTimes, setPrayerTimes] = useState(data.prayers || []);
  const [date] = useState(helpers.getFullDate(new Date()))

  useEffect(() => {
    if(data.selectedLocation !== selectedLocation || date !== data.date) {
      api.getLocations().then((response) => {
        setLocations(response);

        api.getPrayerTimes({ location: selectedLocation }).then((prayers) => {
          setPrayerTimes(prayers.vakat);

          helpers.storeData({locations: response, prayers: prayers.vakat, selectedLocation });
        });
      });
    }
  }, [selectedLocation, data.selectedLocation, data.date, date]);

  const prayers = prayerTimes.map((salah, id) => new PrayerModel({ time: salah, id: id}));

  const prayersWrap = prayers.map((prayer) => {
    return (
      <Prayer key={ prayer.id } {...prayer}/>
    );
  });

  return (
    <div className="app">
      <Header
        locations={locations}
        selected={selectedLocation}
        onChangeSelected={(e) => {setLocation(e.target.value)}}/>
      <div className="prayers">
        {prayersWrap}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

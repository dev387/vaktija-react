import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Header from './Header';
import Prayer from './Prayer';
import Footer from './Footer';
import PrayerModel from '../models/Prayer';
import '../styles/app.scss'

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation] = useState(61);
  const [prayerTimes, setPrayerTimes] = useState([]);

  useEffect(() => {
    api.getLocations().then((response) => {
      setLocations(response);
      localStorage.setItem('locations', JSON.stringify(response));

      api.getPrayerTimes({ location: selectedLocation }).then((prayers) => {
        setPrayerTimes(prayers.vakat);
      });
    });
  }, [selectedLocation]);

  const prayers = prayerTimes.map((salah, id) => new PrayerModel({ time: salah, id: id}));

  const prayersWrap = prayers.map((prayer) => {
    return (
      <Prayer key={ prayer.id } {...prayer}/>
    );
  });

  return (
    <div className="app">
      <Header locations={locations} selected={selectedLocation}/>
      <div className="prayers">
        {prayersWrap}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

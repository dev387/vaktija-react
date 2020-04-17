import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Header from './Header';
import Prayer from './Prayer';
import Footer from './Footer';
import PrayerModel from '../models/Prayer';
import '../styles/app.scss'

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    api.getLocations().then((response) => {
      setLocations(response);
    });
  }, []);

  const prayerTimes = [ "3:38", "5:35", "12:53", "16:48", "20:08", "21:50" ];
  const prayers = prayerTimes.map((salah, id) => new PrayerModel({ time: salah, id: id}));

  const prayersWrap = prayers.map((prayer) => {
    return (
      <Prayer key={ prayer.id } {...prayer}/>
    );
  });

  return (
    <div className="app">
      <Header locations={locations}/>
      <div className="prayers">
        {prayersWrap}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

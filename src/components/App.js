import React from 'react';
import Header from './Header';
import PrayerModel from '../models/Prayer';
import Prayer from './Prayer';
import '../styles/app.scss'

function App() {
  const prayerTimes = [ "3:38", "5:35", "12:53", "16:48", "20:08", "21:50" ];
  const prayers = prayerTimes.map((salah, id) => new PrayerModel({ time: salah, id: id}));

  const prayersWrap = prayers.map((prayer) => {
    return (
      <Prayer key={ prayer.id } {...prayer}/>
    );
  });

  return (
    <div className="app">
      <Header/>
      <div className="prayers">
        {prayersWrap}
      </div>
    </div>
  );
}

export default App;

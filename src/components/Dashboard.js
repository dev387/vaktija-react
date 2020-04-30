import React, { useState, useEffect } from 'react';
import api from '../services/api';
import helpers from '../services/helpers';
import Prayer from './Prayer';
import NextDaysPrayers from './NextDaysPrayers';
import PrayerModel from '../models/Prayer';

import '../styles/dashboard.scss';

export default ({ location }) => {
  const data = {
    prayers: helpers.getDataByKey('prayers'),
    location: helpers.getDataByKey('selectedLocation'),
  }

  const [prayerTimes, setPrayerTimes] = useState(data.prayers || []);

  useEffect(() => {
    const fetchData = async() => {
      const { vakat } = await api.getPrayerTimes({ location });
      setPrayerTimes(vakat);
      helpers.storeDataByKey({ key: 'prayers', value: vakat });
    };

    fetchData();
  }, [location]);

  const prayers = prayerTimes.map((salah, id) => new PrayerModel({ time: salah, id: id }));

  const prayersWrap = prayers.map((prayer) => {
    return (
      <Prayer key={prayer.id} {...prayer} />
    );
  });

  return (
    <div className="dashboard">
      <div className="prayers">
        {prayersWrap}
      </div>
      <NextDaysPrayers />
    </div>
  );
}

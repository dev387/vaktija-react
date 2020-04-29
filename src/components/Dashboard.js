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
  // const [date] = useState(helpers.getFullDate(new Date()));

  useEffect(() => {
    api.getPrayerTimes({ location }).then((prayers) => {
      setPrayerTimes(prayers.vakat);
      helpers.storeDataByKey({ key: 'prayers', value: prayers.vakat });
    });
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

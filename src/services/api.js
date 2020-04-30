const api = 'https://api.vaktija.ba/vaktija/v1';
// const api = 'http://localhost:8080/vaktija/v1';

const getLocations = () => {
  return fetch(`${api}/lokacije`).then(response => response.json());
};

const getPrayerTimes = ({
  day = (new Date()).getDate(),
  month = (new Date()).getMonth() + 1,
  year = (new Date()).getFullYear(),
  location
 }) => {
  return fetch(`${api}/${location}/${year}/${month}/${day}`).then(response => response.json());
};

export default {
  getLocations,
  getPrayerTimes,
};
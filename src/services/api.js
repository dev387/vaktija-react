const api = 'https://api.vaktija.ba/vaktija/v1';
// const api = 'http://localhost:8080/vaktija/v1';

const getLocations = async() => {
  return fetch(`${api}/lokacije`).then(response => response.json());
};

const getPrayerTimes = async({
  day = (new Date()).getDate(),
  month = (new Date()).getMonth() + 1,
  year = (new Date()).getFullYear(),
  location,
 }) => {
   const response = await fetch(`${api}/${location}/${year}/${month}/${day}`);
   return response.json();
 }

export default {
  getLocations,
  getPrayerTimes,
};
const api = 'https://api.vaktija.ba/vaktija/v1';
const getLocations = () => {
  return fetch(`${api}/lokacije`).then(response => response.json());
};

export default {
  getLocations,
};
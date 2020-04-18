const storeData = ({ locations, selectedLocation, prayers }) => {
  localStorage.setItem('locations', JSON.stringify(locations));
  localStorage.setItem('selectedLocation', JSON.stringify(selectedLocation));
  localStorage.setItem('prayers', JSON.stringify(prayers));
  localStorage.setItem('date', JSON.stringify(getFullDate(new Date())));
};

const getData = () => {
  let locations = localStorage.getItem('locations');
  let selectedLocation = localStorage.getItem('selectedLocation');
  let prayers = localStorage.getItem('prayers');
  let date = localStorage.getItem('date');

  if (locations !== null) {
    locations = JSON.parse(locations)
  }

  if (selectedLocation !== null) {
    selectedLocation = JSON.parse(selectedLocation)
  }

  if (prayers !== null) {
    prayers = JSON.parse(prayers)
  }

  if (date !== null) {
    date = JSON.parse(date)
  }

  if (prayers === null || selectedLocation === null || locations === null || date === null) return false;

  return {
    locations,
    selectedLocation,
    prayers,
    date,
  };
};

const getFullDate = (date) => {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

export default {
  storeData,
  getData,
  getFullDate,
};
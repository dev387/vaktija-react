const storeData = ({ locations, selectedLocation, prayers }) => {
  localStorage.setItem('locations', JSON.stringify(locations));
  localStorage.setItem('selectedLocation', JSON.stringify(prayers));
  localStorage.setItem('prayers', JSON.stringify(prayers));
};

const getData = () => {
  let locations = localStorage.getItem('locations');
  let selectedLocation = localStorage.getItem('selectedLocation');
  let prayers = localStorage.getItem('prayers');

  if(locations !== null) {
    locations = JSON.parse(locations)
  }

  if(selectedLocation !== null) {
    selectedLocation = JSON.parse(selectedLocation)
  }

  if(prayers !== null) {
    prayers = JSON.parse(prayers)
  }

  return {
    locations,
    selectedLocation,
    prayers,
  };
};

export default {
  storeData,
  getData,
};
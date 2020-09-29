// Import 3rd party packages
import React, { useState } from 'react';

// Import components and services
import Header from '../Header';
import Footer from '../Footer';
import Dashboard from '../Dashboard';
import helpers from '../../services/helpers';

// Import styles
import './app.scss';

const App = () => {
  const data = helpers.getData();

  // Reload data on location or date change
  const [location, setlocation] = useState(data.selectedLocation || 61);
  const [islamicDate, setiIslamicDate] = useState(null)
  const onChangeSelected = (location) => {
    setlocation(location);
  };

  const updateDate = (date) => {
    const [islamicDate] = date;
    setiIslamicDate(islamicDate)
  };

  return (
    <div className="app">
      <Header islamicDate={islamicDate} onChangeSelected={onChangeSelected} />
      <Dashboard location={location} onDataChange={updateDate} />
      <Footer />
    </div>
  );
}

export default App;
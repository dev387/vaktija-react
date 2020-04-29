// Import 3rd party packages
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components and services
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Settings from './Settings';
import helpers from '../services/helpers';

// Import styles
import '../styles/app.scss'

const App = () => {
  const data = helpers.getData();

  // Reload data on location or date change
  const [location, setlocation] = useState(data.selectedLocation || 61);
  const onChangeSelected = (location) => {
    setlocation(location);
  };

  return (
    <div className="app">
      <Router>
        <Header onChangeSelected={onChangeSelected} />

        <Route exact path="/">
          <Dashboard location={location} />
        </Route>
        <Route path="/settings" component={Settings} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
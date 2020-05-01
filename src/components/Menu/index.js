import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  return (
    <div className="header-menu">
      <NavLink activeClassName="active" exact to={'/'}>Vaktija</NavLink>
      <NavLink to={'/settings'}>Postavke</NavLink>
    </div>
  );
};

export default Menu;
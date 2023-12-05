import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeButton = ({isDarkTheme}) => {
 const homeButtonClasses = `home-button ${isDarkTheme ? 'home-buttonDark' : 'home-buttonLight'}`;
    return (
    <NavLink to='/'>
      <button className={homeButtonClasses}>Back To Main</button>
    </NavLink>
  );
};

export default HomeButton;

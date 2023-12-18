import React from 'react';
import { NavLink } from 'react-router-dom';

const FavoritePageButton = (isDarkTheme) => {
  const favoritePageButtonClasses = `favorites-button ${isDarkTheme ? 'favorites-buttonDark' : 'favorites-buttonLight'}`;
  return (
    <NavLink to="/favorites" className={favoritePageButtonClasses}>
      Favorites
    </NavLink>
  );
};

export default FavoritePageButton;
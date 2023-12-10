import React from 'react';
import { NavLink } from 'react-router-dom';

const FavoritePageButton = () => {
  return (
    <NavLink to="/favorites" className="favorite-page-button">
      Favorite Page
    </NavLink>
  );
};

export default FavoritePageButton;
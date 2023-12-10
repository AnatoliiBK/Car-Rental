// FavoritePage.js
import React from 'react';

const FavoritePage = ({ favorites, onRemoveFavorite }) => {
  return (
    <div className="favorite-page">
      <h2>Favorite Cars</h2>
      {favorites.map((car) => (
        <div key={car.id} className="favorite-card">
          <p>{`${car.make} ${car.model}`}</p>
          <button onClick={() => onRemoveFavorite(car.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritePage;

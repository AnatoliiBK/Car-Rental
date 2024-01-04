import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CarData } from '../carCard/CarData';
import { SectionCatalog } from '../sections/SectionCatalog';
import HomeButton from '../HomeButton';
import LoadMoreButton from '../LoadMoreButton';


const FavoritePage = ( {isDarkTheme }) => {
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(8);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('https://652ed5ac0b8d8ddac0b1f589.mockapi.io/favorites');
        setFavoriteCars(response.data);
      } catch (error) {
        console.error('Error fetching favorites', error);
      }
    };

    fetchFavorites();
  }, []);

  const loadMore = () => {
    setVisibleCars(prevVisibleCars => prevVisibleCars + 8);
  };

  return (
    // <div>
    //   <h1>Favorite Cars</h1>
    //   {favoriteCars.map((car) => (
    //     <CarData key={car.id} car={car} />
    //   ))}
    // </div>
    <SectionCatalog>
      <h1 className='all'>Favorites</h1>
      <HomeButton isDarkTheme={isDarkTheme} />
      <div className="catalog-page">
        {favoriteCars.slice(0, visibleCars).map((car) => (
          <CarData key={car.id} car={car} />
        ))}
      </div>
      {visibleCars < favoriteCars.length && (
        <LoadMoreButton onClick={loadMore} isDarkTheme={isDarkTheme} />
      )}
      <HomeButton isDarkTheme={isDarkTheme} />
    </SectionCatalog>
  );
};

export default FavoritePage;


// import React from 'react';

// const FavoritePage = ({ favorites, onRemoveFavorite }) => {
//   return (
//     <div className="favorite-page">
//       <h2>Favorite Cars</h2>
//       {favorites.map((car) => (
//         <div key={car.id} className="favorite-card">
//           <p>{`${car.make} ${car.model}`}</p>
//           <button onClick={() => onRemoveFavorite(car.id)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FavoritePage;


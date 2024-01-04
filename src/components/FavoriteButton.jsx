import React, { useState, useEffect } from 'react';
import heart from './images/heart.svg';
import axios from 'axios';

const FavoriteButton = ({ onToggle, car }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]); // створюємо локальний стан для favorites

  useEffect(() => {
    // викликаємо API при монтуванні компоненту, щоб отримати список favorites
    axios.get('https://652ed5ac0b8d8ddac0b1f589.mockapi.io/favorites')
      .then(response => {
        setFavorites(response.data); // зберігаємо отримані дані у стані
      })
      .catch(error => {
        console.error('Error fetching favorites', error);
      });
  }, []); // передаємо порожній масив залежностей, щоб запустити ефект тільки один раз

  useEffect(() => {
    // перевіряємо, чи об'єкт car є у списку favorites, щоб встановити значення isFavorite
    const found = favorites.find(fav => fav.id === car.id);
    setIsFavorite(!!found); // !! перетворює знайдений елемент у булеве значення
  }, [favorites, car]); // передаємо масив залежностей, щоб запустити ефект при зміні favorites або car

  const handleClick = async () => {
    setIsFavorite(!isFavorite);

    
    try {
      if (isFavorite) {
        
        await axios.delete(`https://652ed5ac0b8d8ddac0b1f589.mockapi.io/favorites/${car.id}`);
        // видаляємо об'єкт car з локального стану
        setFavorites(favorites.filter(fav => fav.id !== car.id));
      } else {
        
        await axios.post('https://652ed5ac0b8d8ddac0b1f589.mockapi.io/favorites', car);
        console.log('IDENTYFITY', car.id)
        // додаємо об'єкт car до локального стану
        setFavorites([...favorites, car]);
      }

      
      onToggle();
    } catch (error) {
      console.error('Error toggling favorite', error);
    }
  };

  return (
    <button onClick={handleClick} className="favorite-button">
      <img src={heart} alt="heart" className={`favorite-icon ${isFavorite ? "active" : "notactive"}`} />
    </button>
  );
};

export default FavoriteButton;


// import React, { useState } from 'react';
// import heart from './images/heart.svg';
// import axios from 'axios';

// const FavoriteButton = ({ onToggle, car }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleClick = async () => {
//     setIsFavorite(!isFavorite);

    
//     try {
//       if (isFavorite) {
        
//         await axios.delete(`https://652ed5ac0b8d8ddac0b1f589.mockapi.io/favorites/${car.id}`);
//       } else {
        
//         await axios.post('https://652ed5ac0b8d8ddac0b1f589.mockapi.io/favorites', car);
//         console.log('IDENTYFITY', car.id)
//       }

      
//       onToggle();
//     } catch (error) {
//       console.error('Error toggling favorite', error);
//     }
//   };

//   return (
//     <button onClick={handleClick} className="favorite-button">
//       <img src={heart} alt="heart" className={`favorite-icon ${isFavorite ? "active" : "notactive"}`} />
//     </button>
//   );
// };

// export default FavoriteButton;

// import React, { useState } from 'react';
// // import { BsHeart, BsHeartFill } from 'react-icons/bs';
// import heart from './images/heart.svg';


// const FavoriteButton = ({ onToggle }) => {
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleClick = () => {
//     setIsFavorite(!isFavorite);
//     onToggle();
//   };

//   return (
//     // <button onClick={handleClick} className={`favorite-button ${isFavorite ? 'active' : ''}`}>
//     //   ❤️
//     // </button>
//     // <button onClick={handleClick} className={`favorite-button ${isFavorite ? 'active' : 'light'}`}>
//     //   <span role="img" aria-label="heart">❤️</span>
//     // </button>
//     <button onClick={handleClick} className="favorite-button">
//       {/* {isFavorite ? <BsHeartFill /> : <BsHeart color="white"/>} */}
//       <img src={heart} alt="heart" className={`favorite-icon ${isFavorite ? "active" : "notactive"}`} />
//     </button>
//   );
// };

// export default FavoriteButton;

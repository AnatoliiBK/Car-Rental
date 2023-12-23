import React, { useState } from 'react';
import heart from './images/heart.svg';
import axios from 'axios';

const FavoriteButton = ({ onToggle, car }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = async () => {
    setIsFavorite(!isFavorite);

    
    try {
      if (isFavorite) {
        
        await axios.delete(`https://652ed5ac0b8d8ddac0b1f589.mockapi.io/favorites/${car.id}`);
      } else {
        
        await axios.post('https://652ed5ac0b8d8ddac0b1f589.mockapi.io/favorites', car);
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

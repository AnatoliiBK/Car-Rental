import React, { useState } from 'react';
// import { BsHeart, BsHeartFill } from 'react-icons/bs';
import heart from './images/heart.svg';


const FavoriteButton = ({ onToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    onToggle();
  };

  return (
    // <button onClick={handleClick} className={`favorite-button ${isFavorite ? 'active' : ''}`}>
    //   ❤️
    // </button>
    // <button onClick={handleClick} className={`favorite-button ${isFavorite ? 'active' : 'light'}`}>
    //   <span role="img" aria-label="heart">❤️</span>
    // </button>
    <button onClick={handleClick} className="favorite-button">
      {/* {isFavorite ? <BsHeartFill /> : <BsHeart color="white"/>} */}
      <img src={heart} alt="heart" className={`favorite-icon ${isFavorite ? "active" : "notactive"}`} />
    </button>
  );
};

export default FavoriteButton;

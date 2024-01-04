import React, { useState } from 'react';
import { ButtonModal } from '../ButtonModal';
import FavoriteButton from '../FavoriteButton';

export const CarData = ({ car }) => {
    const companyAddress = car.address.split(',');
    const city = companyAddress[1];
    const country = companyAddress[2];
    const [favorites, setFavorites] = useState([]);

  const addToFavorites = () => {
    setFavorites([...favorites, car]);
  };

  const removeFromFavorites = (carId) => {
    setFavorites(favorites.filter((car) => car.id !== carId));
  };
    return (
    <div className="car-card">
      <div className="car-img-container">
      <FavoriteButton onToggle={favorites.some((c) => c.id === car.id) ? removeFromFavorites : addToFavorites} car={car}/>
      <ButtonModal carId={car.id}>
        <img className="car-img" src={car.img} alt={`${car.make} ${car.model}`} />
      </ButtonModal>
      </div>
      <h2>{`${car.make} ${car.model}`}</h2>
      {/* descr встановлено на display none */}
      <div className='descr'>
        <p>Rental Price: {car.rentalPrice}</p>
        <p>Rental Company: {car.rentalCompany}</p>
        <p>{city} {country}</p>
      </div>
      <h3>{car.year} Mileage: {car.mileage}</h3>
      
    </div>
  );
};
import React from 'react';
import { ButtonModal } from '../ButtonModal';

export const CarData = ({ car }) => {
    const companyAddress = car.address.split(',');
    const city = companyAddress[1];
    const country = companyAddress[2];
    return (
    <div className="car-card">
      <ButtonModal carId={car.id}>
        <img className="car-img" src={car.img} alt={`${car.make} ${car.model}`} />
      </ButtonModal>
      <h2>{`${car.make} ${car.model}`}</h2>
      
      <div className='descr'>
        <p>Rental Price: {car.rentalPrice}</p>
        <p>Rental Company: {car.rentalCompany}</p>
        <p>{city} {country}</p>
      </div>
      <h3>{car.year} Mileage: {car.mileage}</h3>
      
    </div>
  );
};
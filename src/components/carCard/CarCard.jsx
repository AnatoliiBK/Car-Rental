import React from 'react';
// import { nanoid } from 'nanoid';

export const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img className="car-img" src={car.img} alt={`${car.make} ${car.model}`} />
      <h2>{`${car.year} ${car.make} ${car.model}`}</h2>
      <p>{car.description}</p>
      <p>Fuel Consumption: {car.fuelConsumption}</p>
      <p>Engine Size: {car.engineSize}</p>
      <p>Rental Price: {car.rentalPrice}</p>
      <p>Rental Company: {car.rentalCompany}</p>
      <p>Address: {car.address}</p>
      <p>Mileage: {car.mileage}</p>
      <h3>Accessories:</h3>
      <ul>
        {car.accessories.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Functionalities:</h3>
      <ul>
        {car.functionalities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Rental Conditions: {car.rentalConditions}</p>
    </div>
  );
};


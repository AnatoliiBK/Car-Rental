import React from 'react';
// import { nanoid } from 'nanoid';
// import { SeeMore } from './SeeMore';

export const CarData = ({ car }) => {
    const companyAddress = car.address.split(',');
    const city = companyAddress[1];
    const country = companyAddress[2];
    return (
    <div className="car-card">
      <img className="car-img" src={car.img} alt={`${car.make} ${car.model}`} />
      <h2>{`${car.make} ${car.model}`}</h2>
      {/* <SeeMore text='See more' /> */}
      <div className='descr'>
        <p>Rental Price: {car.rentalPrice}</p>
        {/* <p>{car.description}</p>
        <p>Fuel Consumption: {car.fuelConsumption}</p>
        <p>Engine Size: {car.engineSize}</p> */}
        
        <p>Rental Company: {car.rentalCompany}</p>
        <p>{city} {country}</p>
      </div>
      <h3>{car.year} Mileage: {car.mileage}</h3>
      {/* <h3>Accessories:</h3>
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
      </ul> */}
      {/* <p>Rental Conditions: {car.rentalConditions}</p> */}
    </div>
  );
};
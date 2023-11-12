import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CarData } from '../carCard/CarData';
import { SectionCatalog } from '../sections/SectionCatalog';

const SportingCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://652ed5ac0b8d8ddac0b1f589.mockapi.io/adverts');
        const fetchedAdverts = response.data;
        console.log("FETCH", fetchedAdverts)

        setCars(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  
  const sportingCars = cars.filter(car => car.type.includes('SPORTING'));

  return (
    <SectionCatalog>
      <h1 className='sport'>Sporting Cars</h1>
      <div className="catalog-page">
      
      {sportingCars.map(car => (
        <CarData key={car.id} car={car} />
      ))}
      </div>
    </SectionCatalog>
  );
};

export default SportingCars;

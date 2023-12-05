import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { CarCard } from '../carCard/CarCard';
import { CarData } from '../carCard/CarData';
import { SectionCatalog } from '../sections/SectionCatalog';
import HomeButton from '../HomeButton';

const CatalogPage = () => {
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

  return (
    <SectionCatalog>
      <h1 className='all'>All Cars</h1>
      <HomeButton />
      <div className="catalog-page">
      {cars.map((car, index) => (
        <CarData key={`${car.id}-${index}`} car={car} />
      ))}
    </div>
    </SectionCatalog>
  );
};

export default CatalogPage;

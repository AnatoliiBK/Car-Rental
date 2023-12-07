import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CarData } from '../carCard/CarData';
import { SectionCatalog } from '../sections/SectionCatalog';
import HomeButton from '../HomeButton';
import LoadMoreButton from '../LoadMoreButton';

const SportingCars = ({ isDarkTheme }) => {
  const [cars, setCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(8);

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

  const loadMore = () => {
    setVisibleCars(prevVisibleCars => prevVisibleCars + 8); // Збільшити кількість відображених автомобілів на 8
  };

  return (
    <SectionCatalog>
      <h1 className='sport'>Sporting Cars</h1>
      <HomeButton isDarkTheme={isDarkTheme} />
      <div className="catalog-page">
      
      {sportingCars.slice(0, visibleCars).map(car => (
        <CarData key={car.id} car={car} />
      ))}
      </div>
      {visibleCars < sportingCars.length && (
        <LoadMoreButton onClick={loadMore} isDarkTheme={isDarkTheme} />
      )}
      <HomeButton isDarkTheme={isDarkTheme} />
    </SectionCatalog>
  );
};

export default SportingCars;

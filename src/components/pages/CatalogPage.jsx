import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CarData } from '../carCard/CarData';
import { SectionCatalog } from '../sections/SectionCatalog';
import HomeButton from '../HomeButton';
import LoadMoreButton from '../LoadMoreButton';

const CatalogPage = ({ isDarkTheme }) => {
  const [cars, setCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(8); // Кількість відображених автомобілів
  
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

  const loadMore = () => {
    setVisibleCars(prevVisibleCars => prevVisibleCars + 8); // Збільшити кількість відображених автомобілів на 8
  };

  const handleToggleFavorite = (carId) => {
    // Оновлюємо стан favoriteCars після видалення або додавання об'єкта у обрані
    setCars((prevFavoriteCars) => {
      return prevFavoriteCars.filter((car) => car.id !== carId);
    });
  };

  return (
    <SectionCatalog>
      <h1 className='all'>All Cars</h1>
      <HomeButton isDarkTheme={isDarkTheme} />
      <div className="catalog-page">
        {cars.slice(0, visibleCars).map((car, index) => (
          <CarData key={`${car.id}-${index}`} car={car} onToggleFavorite={handleToggleFavorite}/>
        ))}
      </div>
      {visibleCars < cars.length && (
        <LoadMoreButton onClick={loadMore} isDarkTheme={isDarkTheme} />
      )}
      <HomeButton isDarkTheme={isDarkTheme} />
    </SectionCatalog>
  );
};

export default CatalogPage;


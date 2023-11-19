import React, {useState, useEffect, useMemo} from "react";
import { CarCard } from "./carCard/CarCard";
import axios from "axios";

export const ButtonModal = ({ children, carId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://652ed5ac0b8d8ddac0b1f589.mockapi.io/adverts');
        const fetchedAdverts = response.data;
        console.log("FETCH", fetchedAdverts)

        setCars(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const selectedCar = useMemo(() => {
    return cars.find(car => car.id === carId);
  }, [cars, carId]);

    return (
    <div>
      <button className="btn-img" onClick={openModal}>{children}</button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
          {!isLoading && (
            <CarCard car={selectedCar} />
          )}
        
      
            <button onClick={closeModal}>LEAVE THIS</button>
          </div>
        </div>
      )}
    </div>
        
    );
};
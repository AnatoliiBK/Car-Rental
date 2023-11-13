import React, {useState} from "react";
import { CarCard } from "./carCard/CarCard";

export const ButtonModal = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return (
    <div>
      <button className="btn-img" onClick={openModal}>{children}</button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <CarCard />
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
        
    );
};
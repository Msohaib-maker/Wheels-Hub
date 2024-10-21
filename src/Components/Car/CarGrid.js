// src/components/CarGrid.js
import React from 'react';
import Car from './CarSale';
import './CarSale.css'; // Optional: create a CSS file for grid styles

const CarGrid = ({ cars }) => {
  return (
    <div className="car-grid">
      {cars.map((car, index) => (
        <Car name={car.carModel}
        price={car.price}
        city={car.city}
        specs={car.mileage}
        cc={car.engine}
        year={car.year}
        type={car.type}
        image={car.file.file_remote}/>
      ))}
    </div>
  );
};

export default CarGrid;

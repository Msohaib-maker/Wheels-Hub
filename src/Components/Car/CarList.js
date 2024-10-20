import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../../reducers/carListSlice';
import CarSale from "./CarSale";

function CarList() {
  const dispatch = useDispatch();
  const { carsList, status, error } = useSelector((state) => state.carList);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCars());
    }
  }, [status, dispatch]);

  return (
    <>
      <div className="container">
        <img src="./car.jpg" className="background-image" alt="Background Image" />
        <div className="overlay-text">
          <h2>Welcome to ApnaWheels by Car Tech</h2>
          <p>Get the best car accessories</p>
        </div>
      </div>
      <br />
      <div>
        <h1><center><i>Car List - Used / New</i></center></h1>
      </div>
      <br />
      <ol>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>{error}</p>}
        {carsList.map((car) => (
          <CarSale
            key={car.carId} // Unique key prop
            name={car.carModel}
            price={car.price}
            city={car.city}
            specs={car.mileage}
            cc={car.engine}
            year={car.year}
            type={car.type}
            image={car.file.file_remote}
            info="Updated by Car Tech"
            phoneNo={car.contact}
          />
        ))}
      </ol>
    </>
  );
}

export default CarList;

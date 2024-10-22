import React, { useEffect, useMemo  } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../../reducers/carListSlice';
import CarSale from "./CarSale";
import CarGrid from "./CarGrid";

function CarList() {
  const dispatch = useDispatch();
  const { carsList, status, error } = useSelector((state) => state.carList);

  

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCars());
    }
  }, [status, dispatch]);


  // Use useMemo to memoize MyCars so it only recalculates when carsList changes
  const MyCars = useMemo(() => carsList.map(ele => ({
    carId: ele.carId,
    carModel: ele.carModel,
    price: ele.price,
    city: ele.city,
    mileage: ele.mileage,
    engine: ele.engine,
    year: ele.year,
    type: ele.type,
    image: ele.file.file_remote,
    contact: ele.contact
  })), [carsList]); // Only recalculate when carsList changes

  return (
    <>
      
      <br />
      <div>
        <h1>New & Used Cars</h1>
      </div>
      <br />
      <ol>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>{error}</p>}
        {/* {carsList.map((car) => (
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
        ))} */}
        <CarGrid cars={MyCars}/>
      </ol>
    </>
  );
}

export default CarList;

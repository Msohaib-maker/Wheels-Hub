// src/components/UsedCar.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";
import { setCars } from "../../../reducers/UsedCarSlice";
import CarSale from "../CarSale";
import FilteredCar from "./FilteredCar";

function UsedCar() {
  const dispatch = useDispatch();

  // Fetch car list from Redux store using useSelector
  const CarsData = useSelector(state => state.cars.CarsList);

  useEffect(() => {
    const db = getDatabase();
    const CarListRef = ref(db, 'cars/');
    
    onValue(CarListRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const dataArray = Object.values(data);
        const filteredCars = dataArray
          .filter(ele => ele.type === "Used" || ele.type === "Old")
          .map(ele => ({
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
          }));

        // Dispatch action to update the car list in the store
        dispatch(setCars(filteredCars));
      }
    });
  }, [dispatch]);

  let cars = CarsData.length
    ? CarsData.map(car => (
        <CarSale
          key={car.carId}
          name={car.carModel}
          price={car.price}
          city={car.city}
          specs={car.mileage}
          cc={car.engine}
          year={car.year}
          type={car.type}
          image={car.image}
          info="Updated by Car Tech"
          phoneNo={car.contact}
        />
      ))
    : <div>No Used Cars Found!</div>;

  return (
    <>
      <br /><br />
      <div>
        <div>
          <h1><center><i>Car List - Used</i></center></h1>
        </div>
        <br /><br />
        <ol>
          {cars}
        </ol>
      </div>
      <br /><br />
      <FilteredCar />
    </>
  );
}

export default UsedCar;

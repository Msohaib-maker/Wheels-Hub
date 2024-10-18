import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccessories } from "../../reducers/car_accessory_reducer"; // Import the thunk
import Accessory from "./Accessory";
import './car_accessories.css';

function CarAccessories() {
  
  const dispatch = useDispatch();
  
  // Get state from Redux store
  const accessoriesList = useSelector((state) => state.accessories.accessoriesList);
  const status = useSelector(state => state.accessories.status);
  const error = useSelector(state => state.accessories.error);


  console.log(accessoriesList);
  // Dummy backend Data
  let SpareParts = [
    { image: "./car_tyre.jpg" },
    { image: "./car_motor.jpg" },
    { image: "./battery.webp" },
    { image: "./rims.jpg" },
    { image: "./car_battery.jpg" },
    { image: "./carmotor.jpeg" }
  ];

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAccessories()); // Fetch data on component mount
    }
  }, [status, dispatch]);

  // Display loading, error or accessory data
  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = accessoriesList.map((ele, i) => (
      <Accessory
        key={i} // Add unique key
        image={SpareParts[i] ? SpareParts[i].image : "./default_image.jpg"} // Backup image
        name={ele.name}
        price={ele.price}
      />
    ));
  } else if (status === 'failed') {
    content = <p>Error: {error}</p>;
  }

  return (
    <div>
      {/* <div class="container">
        <img src="./car.jpg" class="background-image" alt="Background Image" />
        <div class="overlay-text">
          <h2>Welcome to ApnaWheels by Car Tech</h2>
          <p>Get the best car accessories</p>
        </div>
      </div> */}
    
      <h2>Best Car Accessories</h2>
      
      <ul class="item-list">
        {content}
      </ul>
    </div>
  );
}

export default CarAccessories;

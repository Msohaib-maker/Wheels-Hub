import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccessories } from "../../reducers/car_accessory_reducer"; // Import the thunk
import Accessory from "./Accessory";
import './car_accessories.css';

function CarAccessories() {
  
  const dispatch = useDispatch();
  
  // Get state from Redux store
  const accessoriesList = useSelector((state) => state.accessories.accessoriesList);
  const status = useSelector((state) => state.accessories.status);
  const error = useSelector((state) => state.accessories.error);

  
  // Dummy backend Data
  let SpareParts = [
    { image: "./carbrakes.png" },
    { image: "./carmotor.png" },
    { image: "./carbrakes.png" },
    { image: "./logo192.png" },
    { image: "./car_engine.png" },
    { image: "./carbrakes.png" }
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
    
      <h2 className="h2-style">Best Car Accessories</h2>
      <br></br>
      <ul class="item-list">
        {content}
      </ul>
      <br></br>
      <br></br>
      <ul class="item-list">
        {content}
      </ul>
      <br></br>
    </div>
  );
}

export default CarAccessories;


import './CarSale.css'
import UploadCar from './UploadCar';
import { useState, useEffect } from "react";

function CarSale(props){

    const [showPhoneNumber, setShowPhoneNumber] = useState(false);

    let flag = false
    if(props.image != ''){
        flag = true
    }

    const handleButtonClick = () => {
        setShowPhoneNumber(!showPhoneNumber);
    };

    return(
        <div className="car-container">
      <div className="image-container">
        <img src={props.image} alt="Image" />
      </div>
      <div className="details-container">
        <h2>{props.name}</h2>
        <p>{props.city}</p>
        <p>{props.specs}</p>
      </div>
      <div className="price-container">
        <h3>{props.price}</h3>
      </div>
      <div className="button-container">
        <button className="contact-button" onClick={handleButtonClick}>
          {showPhoneNumber ? `Hide phone number` : `Show phone number`}
        </button>
        {showPhoneNumber && <p>{props.phoneNo}</p>}
      </div>
    </div>
        
    );
}


export default CarSale;
import './CarSale.css'
import { useDispatch, useSelector } from 'react-redux';
import { togglePhoneNumber } from '../../reducers/carsaleSlice'; // Import the action

function CarSale(props) {
  const dispatch = useDispatch();

  const showPhoneNumber = useSelector((state) => state.carSale.showPhoneNumber);

  let flag = false;
  if (props.image !== '') {
    flag = true;
  }

  const handleButtonClick = () => {
    dispatch(togglePhoneNumber());
  };

  return (
    <>
      <div className="car">
        
        <img src={props.image} alt="Image" className='car-image' />
        
        <h3 style={{ color: 'blue' }}>{props.name} for sale</h3>
        <p>{props.city}</p>
        <p>{props.specs} | {props.cc} | {props.year} | Petrol</p>
        <p>{props.type} Car</p>
        <p>{props.info}</p>
        
        {/* <div className="price-container">
          <h3>PKR {props.price} lacs</h3>
        </div> */}
        {/* <div className="button-container">
          <button className="contact-button" onClick={handleButtonClick}>
            {showPhoneNumber ? `Hide phone number` : `Show phone number`}
          </button>
          {showPhoneNumber && <p>{props.phoneNo}</p>}
        </div> */}
      </div>
    </>
  );
}

export default CarSale;

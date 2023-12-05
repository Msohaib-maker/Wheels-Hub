
import './car_accessories.css';

function Accessory(props){

    const uniqueId = `stars-${props.name.replace(/\s/g, '-')}`; // Unique identifier based on the accessory name

  const Rating = (
    <div className="rating">
      <input type="checkbox" id={`${uniqueId}-5`} name={`${uniqueId}`} value="5"/>
      <label htmlFor={`${uniqueId}-5`}>&#9733;</label>
      <input type="checkbox" id={`${uniqueId}-4`} name={`${uniqueId}`} value="4"/>
      <label htmlFor={`${uniqueId}-4`}>&#9733;</label>
      <input type="checkbox" id={`${uniqueId}-3`} name={`${uniqueId}`} value="3"/>
      <label htmlFor={`${uniqueId}-3`}>&#9733;</label>
      <input type="checkbox" id={`${uniqueId}-2`} name={`${uniqueId}`} value="2"/>
      <label htmlFor={`${uniqueId}-2`}>&#9733;</label>
      <input type="checkbox" id={`${uniqueId}-1`} name={`${uniqueId}`} value="1"/>
      <label htmlFor={`${uniqueId}-1`}>&#9733;</label>
    </div>
  );


    return(
        <div class="Box2">
            <img src={props.image}/>
            {/* {Rating} */}
            <p class="text-style">{props.name}</p>
            <p class="text-style2">Rs. {props.price}</p>
            <button class="custom-button">Add to cart</button>
        </div>
    );
}

export default Accessory;
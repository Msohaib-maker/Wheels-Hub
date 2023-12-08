
import './CarSale.css'
import UploadCar from './UploadCar';

function CarSale(props){

    let flag = false
    if(props.image != ''){
        flag = true
    }

    return(
        <div>
            <div class="containerNew">
            {!flag && <img src="./car.jpg" alt="Background Image"></img>}
            {flag && <img src={props.image} alt="Background Image"></img>}
            <div>
                <p>{props.name}</p>
                <p>{props.city}</p>
                <p>{props.specs}</p>
                <p>{props.info}</p>
            </div>
            <div>
                {/* <p>Registered on {data['name']}</p> */}
                <p className='price-custom'>{props.price} lacs</p>
                <button class="button-customize">Contact</button>
            </div>
        </div>
        </div>
        
    );
}


export default CarSale;
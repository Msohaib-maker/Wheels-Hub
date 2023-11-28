import { Component } from "react"
import './car_accessories.css';
import Accessory from "./Accessory";

function CarAccessories(props)
{

    // backend Data
    let SpareParts = [
        {image: "./car_tyre.jpg",name: "Car tyre", price:"$120.65"},
        {image: "./car_motor.jpg",name: "Car Motor", price:"$420.50"},
        {image: "./car_battery.jpg",name: "Car battery", price:"$220.50"},
        {image: "./rims.jpg",name: "Car Rims", price:"$80.50"}
    ]

    const MapArr = SpareParts.map((ele) => {
        return <Accessory image={ele.image} name={ele.name} price={ele.price}/>
    })



    return(
        <div>
            <div class="container">
                <img src="./car.jpg" class="background-image" alt="Background Image"></img>
                <div class="overlay-text">
                    <h2>Welcome to HamzaWheels</h2>
                    <p>Get the best car accessories</p>
                </div>
            </div>
            <h2>Best Car Accessories</h2>

            <ul class="item-list">
                {MapArr}
            </ul>

            
            
        </div>
    );
}

export default CarAccessories;
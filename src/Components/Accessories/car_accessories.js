import { useState, Component } from "react"
import './car_accessories.css';
import Accessory from "./Accessory";
import { onValue, getDatabase, ref } from "firebase/database";

function CarAccessories(props)
{

    const [AccessoriesData, setAccessoriesData] = useState({
        AccessoriesDataList: []
    })

    // Dummy backend Data
    let SpareParts = [
        {image: "./car_tyre.jpg"},
        {image: "./car_motor.jpg"},
        {image: "./battery.webp"},
        {image: "./rims.jpg"},
        {image: "./car_battery.jpg"},
        {image: "./carmotor.jpeg"}
    ]

    const db = getDatabase();
    const CarAccessoryRef = ref(db, 'accessory/');

    let accessoryData = []


    // Reading from firebase
    onValue(CarAccessoryRef, (snapshot) => {
        const data = snapshot.val()

        if(data){
            const dataArray = Object.values(data);
            accessoryData = dataArray.map((ele, i) => (
                
                <Accessory
                    image={SpareParts[i].image} // Add a unique key prop
                    name={ele.name}
                    price={ele.price}
                />
            ));

            if(AccessoriesData.AccessoriesDataList.length !== accessoryData.length){
                setAccessoriesData({
                    AccessoriesDataList: accessoryData
                })
            }
        }

    });




    const MapArr = SpareParts.map((ele) => {
        return <Accessory image={ele.image} name={ele.name} price={ele.price}/>
    })



    return(
        <div>
            <div class="container">
                <img src="./car.jpg" class="background-image" alt="Background Image"></img>
                <div class="overlay-text">
                    <h2>Welcome to ApnaWheels by Car Tech</h2>
                    <p>Get the best car accessories</p>
                </div>
            </div>
            <br></br>
            <h2>Best Car Accessories</h2>
             <br></br>
            <ul class="item-list">
                {accessoryData}
            </ul>

            
            
        </div>
    );
}

export default CarAccessories;
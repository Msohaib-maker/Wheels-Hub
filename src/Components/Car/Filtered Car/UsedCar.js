import { useState, useEffect } from "react";
import CarSale from "../CarSale";
import { getDatabase, ref, set, onValue } from "firebase/database";
import FilteredCar from "./FilteredCar";

function UsedCar(props){
    const [CarsData, setCarsData] = useState({
        CarsList: []
    })

    let cars = []
    const db = getDatabase();
    const CarListRef = ref(db, 'cars/');

    onValue(CarListRef, (snapshot) => {
        const data = snapshot.val();

        if (data == null) {
            console.log("yes data null")
        }

        if (data) {
            const dataArray = Object.values(data);
            if (dataArray == null) {
                console.log("yes dataArray null")
            }

            cars = dataArray
            .filter(ele => ele.type === "Used" || ele.type === "Old") // Filter the array based on the condition
            .map(ele => (
              <CarSale
                key={ele.carId}
                name={ele.carModel}
                price={ele.price}
                city={ele.city}
                specs={ele.mileage}
                cc={ele.engine}
                year={ele.year}
                type={ele.type}
                image={ele.file.file_remote}
                info="Updated by Car Tech"
                phoneNo={ele.contact}
              />
            ));
          


            // let isUpdate = false;
            if (cars == null) {
                console.log("yes cars null")
                cars=<div>No Used Car found!!</div>
            }
            if (CarsData.CarsList == null) {
                console.log("yes CarsList null")
                cars=<div>No Used Car found!!</div>
            }
            if (CarsData.CarsList != null && cars != null) {
                let k = cars.length;
                let j = CarsData.CarsList.length;
                console.log(k + " " + j)
                if (k != j) {
                    setCarsData({ CarsList: cars });
                }
            }


            // setCarsData({ carList: cars });
        } else {
            console.log("No data available");
            cars=<div>No Used Car found!!</div>
        }
    });



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
            <br/><br/>
            <FilteredCar/>
        </>
    );

}

export default UsedCar;
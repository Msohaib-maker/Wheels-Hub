
import './CarSale.css'
//import { getDatabase, ref, onValue } from "firebase/database";

function CarSale(props){
    // let data;
    // console.log("firebase db")
    // const db = getDatabase();
    // const starCountRef = ref(db, 'Customers/ZFvoGCRqc9Pj5bNjWgSE4ltAhUv2');
    // onValue(starCountRef, (snapshot) => {
    //     data = snapshot.val();
    //     //updateStarCount(postElement, data);
    //     console.log(data)
    // });

    return(
        <div class="containerNew">
            <img src="./car.jpg" alt="Background Image"></img>
            <div>
                <p>{props.name}</p>
                <p>{props.city}</p>
                <p>{props.specs}</p>
                <p>{props.info}</p>
            </div>
            <div>
                {/* <p>Registered on {data['name']}</p> */}
                <p>{props.price}</p>
                <button class="button-customize">Contact</button>
            </div>
        </div>
    );
}


export default CarSale;
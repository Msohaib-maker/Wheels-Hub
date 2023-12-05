import './car_accessories.css';

function Inspection(props){


    return(
        <div class="container2">
            <img src='./toyota.png'/>
            <p>Ge the best Inspection on ApnaWheels</p>
            <div class="Box3">
                <h4>Schedule ApnaWheels Car Inspection</h4>
                <input type='text' placeholder='Enter Location'/>
                <input type='text' placeholder='House no.'/>
                <input type='text' placeholder='Make/Model/Variant'/>
                <input type='text' placeholder='Inspection Slot'/>
                <input type='text' placeholder='Enter Full Name'/>
                <input type='text' placeholder='Enter Your Phone'/>
                <button class="button-submit">Submit</button>
            </div>
        
        </div>
        

        
    );
}

export default Inspection;
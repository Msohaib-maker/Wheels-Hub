import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { getDatabase,ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

import './car_accessories.css';
import { useLocation } from 'react-router-dom';

function Inspection(props) {
  const location=useLocation()
  const user = location.state || {};
  const navigate = useNavigate();
  const userId='123'
  function redirect() {
    const database = getDatabase();
  
    const newInspection = {
      location: document.getElementById('location').value,
      houseNo: document.getElementById('houseNo').value,
      makeModelVariant: document.getElementById('makeModelVariant').value,
      inspectionSlot: document.getElementById('inspectionSlot').value,
      fullName: document.getElementById('fullName').value,
      phone: document.getElementById('phone').value,
      userID: userId,
    };
   const phone= document.getElementById('phone').value
    set(ref(database, `inspection/`+phone+'/'+uuidv4()), newInspection)
      .then(() => {
        console.log('Data successfully set in the database');
      })
      .catch((error) => {
        console.error('Error setting data in the database:', error.message);
      });
       navigate('/InspectionList',{state:{
       phone,
     }})
  }

  return (
    <div className="container2">
      <img src="./toyota.png" alt="Toyota Logo" />
      <p>Get the best Inspection on ApnaWheels</p>
      <div className="Box3">
        <h4>Schedule ApnaWheels Car Inspection</h4>
        <input type="text" id="location" placeholder="Enter Location" />
        <input type="text" id="houseNo" placeholder="House no." />
        <input type="text" id="makeModelVariant" placeholder="Make/Model/Variant" />
        <input type="text" id="inspectionSlot" placeholder="Inspection Slot" />
        <input type="text" id="fullName" placeholder="Enter Full Name" />
        <input type="text" id="phone" placeholder="Enter Your Phone" />
        <button className="button-submit" onClick={redirect}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Inspection;

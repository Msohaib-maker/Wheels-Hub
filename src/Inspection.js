import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import './car_accessories.css';

function Inspection() {
  const navigate = useNavigate();
  const [inspections, setInspections] = useState([]);
  
  function redirect() {
    const newInspection = {
      location: document.getElementById('location').value,
      houseNo: document.getElementById('houseNo').value,
      makeModelVariant: document.getElementById('makeModelVariant').value,
      inspectionSlot: document.getElementById('inspectionSlot').value,
      fullName: document.getElementById('fullName').value,
      phone: document.getElementById('phone').value,
    };
    console.log(newInspection)
    setInspections([...inspections, newInspection]);
    navigate('/InspectionList')
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

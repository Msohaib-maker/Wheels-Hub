import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";
import './InspectionsList.css';

function InspectionList() {
  const location = useLocation();
  const user = location.state || {};
  const [inspections, setInspections] = useState([]);
  const database = getDatabase();
  const phone = user.phone || '';

  useEffect(() => {
    const inspectionsRef = ref(database, `inspection/` + phone);

    const fetchData = onValue(inspectionsRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.values(data);
      console.log('data array ',dataArray)
      console.log('data is', data);
      if (data) {
        setInspections(dataArray);
      } else {
        setInspections([]);
      }
    });

    return () => {
      fetchData();
    };

  }, [phone, database]);

  return (
    <div className="inspection-list-container">
      <h2>User Inspections</h2>
      {inspections.map((inspection, index) => (
        <div key={index} className="inspection-item">
          <div className="attribute">
            <strong>Location:</strong> {inspection.location || ''}
          </div>
          <div className="attribute">
            <strong>House No:</strong> {inspection.houseNo || ''}
          </div>
          <div className="attribute">
            <strong>Make/Model/Variant:</strong> {inspection.makeModelVariant || ''}
          </div>
          <div className="attribute">
            <strong>Inspection Slot:</strong> {inspection.inspectionSlot || ''}
          </div>
          <div className="attribute">
            <strong>Full Name:</strong> {inspection.fullName || ''}
          </div>
          <div className="attribute">
            <strong>Phone:</strong> {inspection.phone || ''}
          </div>
        </div>
      ))}
    </div>
  );
}

export default InspectionList;

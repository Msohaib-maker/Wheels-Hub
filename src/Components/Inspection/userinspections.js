// src/components/InspectionList.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue } from "firebase/database";
import './InspectionsList.css';

function InspectionList() {
  // Get phone number from Redux state
  const phone = useSelector((state) => state.InspectReducer.phone);
  const [inspections, setInspections] = useState([]);
  const database = getDatabase();

  useEffect(() => {
    if (!phone) {
      return;
    }
    
    const inspectionsRef = ref(database, `inspection/` + phone);

    const fetchData = onValue(inspectionsRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = data ? Object.values(data) : [];
      console.log('data array ', dataArray);
      console.log('data is', data);
      setInspections(dataArray);
    });

    return () => {
      fetchData();
    };
  }, [phone, database]);

  return (
    <div className="inspection-list-container">
      <h2>User Inspections</h2>
      {inspections.length > 0 ? (
        inspections.map((inspection, index) => (
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
        ))
      ) : (
        <p>No inspections found for this user.</p>
      )}
    </div>
  );
}

export default InspectionList;

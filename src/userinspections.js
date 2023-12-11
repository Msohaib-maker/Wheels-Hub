import React from 'react';

function InspectionList({ inspections }) {
  return (
    <div>
      <h2>User Inspections</h2>
      <ul>
        {inspections.map((inspection, index) => (
          <li key={index}>
            <strong>Location:</strong> {inspection.location},{' '}
            <strong>House No:</strong> {inspection.houseNo},{' '}
            <strong>Make/Model/Variant:</strong> {inspection.makeModelVariant},{' '}
            <strong>Inspection Slot:</strong> {inspection.inspectionSlot},{' '}
            <strong>Full Name:</strong> {inspection.fullName},{' '}
            <strong>Phone:</strong> {inspection.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InspectionList;

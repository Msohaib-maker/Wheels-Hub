import React, { useState } from 'react';
import './StyledUserProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../store/userProfileSlice'; // Adjust the import path

const UserProfile = () => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const [editing, setEditing] = useState(false);
  const [fullName, setFullName] = useState(userProfile.fullName);
  const [email, setEmail] = useState(userProfile.email);
  const [streetAddress, setStreetAddress] = useState(userProfile.streetAddress);
  const [city, setCity] = useState(userProfile.city);
  const [country, setCountry] = useState(userProfile.country);
  const [postalCode, setPostalCode] = useState(userProfile.postalCode);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ fullName, email, streetAddress, city, country, postalCode }));
    setEditing(false);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>User Profile</h2>
        {editing ? (
          <form className="user-profile-form" onSubmit={handleUpdateProfile}>
            <label>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <label>
              Street Address:
              <input
                type="text"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <label>
              Country:
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <label>
              Postal Code:
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </label>
            <button type="submit">Update Profile</button>
          </form>
        ) : (
          <div>
            <p>
              <strong>Full Name:</strong> {fullName}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Street Address:</strong> {streetAddress}
            </p>
            <p>
              <strong>City:</strong> {city}
            </p>
            <p>
              <strong>Country:</strong> {country}
            </p>
            <p>
              <strong>Postal Code:</strong> {postalCode}
            </p>
            <button onClick={handleEditClick}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

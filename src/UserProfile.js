import React, { useState } from 'react';
import './StyledUserProfile.css';

const UserProfile = () => {



  const [fullName, setFullName] = useState(localStorage.getItem('person_name')
    || '');
  const [email, setEmail] = useState(localStorage.getItem('person_email')
    || '');
  const [streetAddress, setStreetAddress] = useState(localStorage.getItem('address') || '');
  const [city, setCity] = useState(localStorage.getItem('City') || '');
  const [country, setCountry] = useState(localStorage.getItem('Country') || '');
  const [postalCode, setPostalCode] = useState(localStorage.getItem('zip_code')
    || '');
  const [editing, setEditing] = useState(false);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log('Profile Updated!');
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
            </label>  <p>
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
              <strong>streetAddress:</strong> {streetAddress}
            </p>
            <p>
              <strong>City:</strong> {city}
            </p>
            <p>
              <strong>Country:</strong> {country}
            </p>
            <p>
              <strong>PostalCode:</strong> {postalCode}
            </p>
            {/* Include other details */}
            <button onClick={handleEditClick}>Edit Profile</button>
          </div>
        )}

      </div>
    </div>
  );
};

export default UserProfile;

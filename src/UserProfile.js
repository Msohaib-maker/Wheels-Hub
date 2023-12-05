import React, { useState } from 'react';
import './StyledUserProfile.css';

const UserProfile = (props) => {
  const [fullName, setFullName] = useState(props.fullName || '');
  const [email, setEmail] = useState(props.email || '');
  const [password, setPassword] = useState(props.password || '');
  const [streetAddress, setStreetAddress] = useState(props.streetAddress || '');
  const [city, setCity] = useState(props.city || '');
  const [country, setCountry] = useState(props.country || '');
  const [postalCode, setPostalCode] = useState(props.postalCode || '');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log('Profile Updated!');
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>User Profile</h2>
        <form className="user-profile-form" onSubmit={handleUpdateProfile}>
          <label>
            Full Name:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
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
      </div>
    </div>
  );
};

export default UserProfile;

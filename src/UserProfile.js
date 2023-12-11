import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './StyledUserProfile.css';

const UserProfile = () => {
  const location=useLocation()
  console.log(location)
  const user = location.state || {};
  const [fullName, setFullName] = useState(user.fullName || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState(user.password || '');
  const [streetAddress, setStreetAddress] = useState(user.streetAddress || '');
  const [city, setCity] = useState(user.city || '');
  const [country, setCountry] = useState(user.country || '');
  const [postalCode, setPostalCode] = useState(user.postalCode || '');
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
        ):(
          <div>
            <p>
              <strong>Full Name:</strong> {fullName}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Password:</strong> {password}
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

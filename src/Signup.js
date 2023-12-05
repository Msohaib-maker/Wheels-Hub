import React, { useState } from 'react';
import './StyledSignup.css';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [streetAddress, setStreetAddress] =  useState('');
  const [city, setCity] =  useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add user registration logic here
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Create Your Car Account</h2>
        <form className="signup-form" onSubmit={handleSignup}>
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
              type="text"
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

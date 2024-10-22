import React, { useState } from 'react';
import './StyledSignup.css';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../reducers/signupSlice'; // Import the signup slice
import { Link, useNavigate } from 'react-router-dom';
import './Styledlogin.css';


const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const dispatch = useDispatch();
  const nav = useNavigate();
  
  // Redux state to track signup status and error
  const signupStatus = useSelector((state) => state.RegisterReducer.status);
  const signupError = useSelector((state) => state.RegisterReducer.error);

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Dispatch signup action
    dispatch(signupUser({
      email,
      password,
      fullName,
      streetAddress,
      city,
      country,
      postalCode
    }))
    .unwrap()
    .then(() => {
      alert("Sign Up Successful!");
      nav("/"); // Redirect to home
    })
    .catch((error) => {
      alert("Failed to Sign Up: " + error);
    });
  };

  return (
    <div>
      {signupStatus === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <div className="signup-container">
          
          <div className='rounded-container'>
            <div className="form-container">
            <p>Create Your Account</p>
            <form className="signup-form" onSubmit={handleSignup}>
              <label>
                Full Name
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </label>
              <label>
                Email

              
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label>
                Street Address
                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
              </label>
              <label>
                City
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </label>
              <label>
                Country
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </label>
              <label>
                Postal Code
                <input
                  type="text"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </label>
              <button type="submit">Sign Up</button>
            </form>
            {signupError && <div className="error">{signupError}</div>}
            </div>
            <div className='simple-div-container'>
              <img src='./car-real-dark.jpg'></img>
            </div>
          </div>  
          
        </div>
        
      )}

      <br></br>
      <br></br>
    </div>
  );
};

export default SignupForm;

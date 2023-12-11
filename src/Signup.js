import React, { useState } from 'react';
import './StyledSignup.css';
import {auth} from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";


const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [streetAddress, setStreetAddress] =  useState('');
  const [city, setCity] =  useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const [signupSuccess, setSignupSuccess] = useState(false);
  const nav = useNavigate();
  const db = getDatabase();

  const handleSignup = (e) => {
    e.preventDefault();
    // Add user registration logic here

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successful Signed up 
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), {
          City: city,
          Country: country,
          address: streetAddress,
          person_email: email,
          person_name: fullName,
          zip_code: postalCode
        })
        .then(() => {
          alert("Sign Up");
          nav("/");
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    
      });

  };

  return (
    <div>
      {signupSuccess ? (
          <Link to="/" className="nav-link">Home</Link>
      ) : (
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
      )
    }
    </div>
    
  );
};

export default SignupForm;

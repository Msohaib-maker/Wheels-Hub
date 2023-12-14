import React, { useState } from 'react';
import './Styledlogin.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue } from "firebase/database";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate();
  const db = getDatabase();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const starCountRef = ref(db, 'users/' + user.uid);
          onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();


              // Cache data locally
              localStorage.setItem('City', data['City'])
              localStorage.setItem('Country', data['Country'])
              localStorage.setItem('address', data['address'])
              localStorage.setItem('person_email', data['person_email'])
              localStorage.setItem('person_name', data['person_name'])
              localStorage.setItem('zip_code', data['zip_code'])
              alert("Login Successfull!!");
              nav("/");
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Failed to Login!!");
        });
    };



  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Login to Your Car Account</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

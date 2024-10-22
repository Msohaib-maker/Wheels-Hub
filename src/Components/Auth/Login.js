import React, { useState } from 'react';
import './Styledlogin.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../reducers/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const nav = useNavigate();

  // Accessing the auth state from the Redux store
  const authState = useSelector((state) => state.auth);
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Dispatch the loginUser action
    dispatch(loginUser({ username, password }))
      .unwrap()  // Unwrap the promise to handle success or error
      .then(() => {
        alert("Login Successful!");
        nav("/"); // Navigate to home page on successful login
      })
      .catch((error) => {
        alert("Failed to Login! " + error); // Show error if login fails
      });
  };

  return (
    <div className="login-container">
      <div class="rounded-container">
      <div className="form-container">
        <p>Login to Your Account</p>
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
          <button type="submit" disabled={authState.status === 'loading'}>
            {authState.status === 'loading' ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {authState.error && <p className="error">{authState.error}</p>}
      </div>
      <div className="simple-div-container">
        <img src="./car.jpg" alt="Car" />
      </div>

      </div>
      
    </div>
  );
  
};

export default LoginForm;

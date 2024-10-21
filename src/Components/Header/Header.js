// src/components/Header.js
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../Firebase/firebase';
import { signOut } from "firebase/auth";
import { login, logout } from "../../reducers/NewAuthSlice"; // Import actions from the slice
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Get authentication state from Redux store
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // Dispatch login action
                dispatch(login(user));
            } else {
                // Dispatch logout action
                dispatch(logout());
            }
        });

        return () => unsubscribe();
    }, [dispatch]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(logout()); // Dispatch logout action on sign out
        }).catch((error) => {
            // Handle any errors here
            console.error("Sign out error: ", error);
        });
    };

    const handleClick = () => {
        if (isLoggedIn) {
            navigate('/Inspect');
        } else {
            navigate('/Login');
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg custom-navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <span className="car-highlight">CarTech</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/CarSale">Cars</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Accesories">Accesories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Review">Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Inspect" onClick={(e) => {
                                    e.preventDefault();
                                    handleClick();
                                }}>Inspection</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/UploadCar">Post a Car</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/FilteredCar">Filtered Cars</Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Conditionally render Logout, Signup, Login, and User Info */}
                    {isLoggedIn ? (
                        <>
                            <Link className="nav-link active" aria-current="page" onClick={handleSignOut}> Logout</Link>
                            <Link className="nav-link active" aria-current="page" to="/UserInfo">User Info</Link>
                        </>
                    ) : (
                        <div className="row">
                            <Link className="nav-link active" aria-current="page" to="/Signup"> SignUp</Link>
                            <Link className="nav-link active" aria-current="page" to="/Login"> Login</Link>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Header;

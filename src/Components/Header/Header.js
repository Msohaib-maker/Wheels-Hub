import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { auth } from '../../Firebase/firebase';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

function Header() {
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {

                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        });
    };


    const handleClick = () => {
        if(isLoggedIn){
        navigate('/Inspect' )   
    
    }
    else{
        navigate('/Login ')
    }

        };


        

     return (
        <div>
            <nav class="navbar navbar-expand-lg custom-navbar">
                <div class="container-fluid">
                    {/* <Link class="navbar-brand" to="/">CarTech</Link> */}
                    <Link className="navbar-brand" to="/">
                        <span className="car-highlight">CarTech</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/CarSale">Cars</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Accesories">Accesories</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Review">Review</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/Inspect" onClick={(e) => {
                                    e.preventDefault();
                                    handleClick();
                                }}>Inspection</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/UploadCar">Post a Car</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/FilteredCar">Filtered Cars</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}

                    {
                        isLoggedIn &&
                        <Link class="nav-link active" aria-current="page" onClick={handleSignOut}> Logout</Link>
                    }
                    {
                        !isLoggedIn &&
                        <div class="row">
                            <Link class="nav-link active" aria-current="page" to="/Signup"> SignUp</Link>
                            <Link class="nav-link active" aria-current="page" to="/Login"> Login</Link>
                        </div>
                    }
                    {
                        isLoggedIn &&
                        <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/UserInfo"
                    >
                        User Info
                    </Link>
                    }
                    </div>
            </nav>
        </div>
    );
}

export default Header;

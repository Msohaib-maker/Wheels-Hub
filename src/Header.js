import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
    const navigate = useNavigate(); 
    const handleClick = () => {
        navigate('/UserInfo', {
            state: {
                fullName: 'John Doe',
                email: 'john.doe@example.com',
                password: '123',
                streetAddress: '123',
                city: 'Lahore',
                country: 'pak',
                postalCode: '123',
            },
        });
    }; return (
        <div>
            <nav class="navbar navbar-expand-lg custom-navbar">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">CarTech</Link>
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
                                <Link class="nav-link active" aria-current="page" to="/Inspect">Inspection</Link>
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

                    <Link class="nav-link active" aria-current="page" to="/Signup"> SignUp</Link>
                    <Link class="nav-link active" aria-current="page" to="/Login"> Login</Link>
                    <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/UserInfo"
                        onClick={(e) => {
                            e.preventDefault(); 
                            handleClick();     }}
                    >
                        User Info
                    </Link></div>
            </nav>
        </div>
    );
}

export default Header;

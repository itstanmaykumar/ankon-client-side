import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo2 from '../../../img/logo2.png';

const Navbar = () => {
    const { user, signOutUser } = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark-pro">
                <div className="container px-4">
                    <Link className="navbar-brand" to="/home">
                        <img src={logo2} className="" height="35" alt="logo img" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pt-1 mb-lg-0">
                            <li className="nav-item me-4 btn p-0">
                                <span className="nav-link text-white">
                                    {
                                        user?.email && (<span>Hi {user?.displayName?.slice(0, user?.displayName?.indexOf(" "))},</span>)
                                    }
                                </span>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link text-main" to="/">Home</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className="nav-link text-main" to="/gallery">Gallery</Link>
                            </li>
                            {
                                user?.email &&
                                <li className="nav-item me-2">
                                    <Link className="nav-link text-main" to="/dashboard">Dashboard</Link>
                                </li>
                            }
                            <li className="me-5 pe-3"></li>
                            {user?.email ? (
                                <li className="nav-item" onClick={signOutUser}>
                                    <Link className="btn btn-outline-main" to="/home">
                                        Sign Out <i className="fas fa-sign-in-alt"></i>
                                    </Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="btn btn-outline-main" to="/signin">
                                        Sign In <i className="fas fa-sign-in-alt"></i>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
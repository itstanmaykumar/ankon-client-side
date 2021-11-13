import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import signin from '../../../img/signin.png';

const SignIn = () => {
    const [signinData, setSigninData] = useState({});
    const { user, signInUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSigninData = { ...signinData };
        newSigninData[field] = value;
        setSigninData(newSigninData);
        console.log(newSigninData);
    }

    const handleSigninSubmit = e => {
        signInUser(signinData.email, signinData.password, location, history);
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="row mx-2">
                <div className="col-lg-6 col-md-9 my-lg-3">
                    <img className="img-fluid" src={signin} alt="sign in" />
                </div>
                <div className="col-lg-6 p-md-4">
                    <div className="p-5 bg-dark-pro rounded-10">
                        <form className="" onSubmit={handleSigninSubmit}>
                            <h3 className="text-white mb-3">Please Sign In!</h3>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-main">Email address</label>
                                <input type="email" name="email" onBlur={handleOnChange} className="form-control" id="email" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pass" className="form-label text-main">Password</label>
                                <input type="password" name="password" onBlur={handleOnChange} className="form-control" id="pass" required />
                            </div>
                            <button type="submit" className="btn btn-main me-4">Submit</button>
                            {
                                isLoading &&
                                <button className="btn btn-main" type="button" disabled>
                                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>
                            }
                            {
                                user?.email &&
                                <div className="alert alert-success mt-2" role="alert">
                                    Signed In Successfully!!
                                </div>
                            }
                            {
                                authError &&
                                <div className="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                                    <span>{authError}</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            }
                            <div className="mt-3">
                                <span className="text-second pe-3">Are You New Here? </span>
                                <Link className="btn text-main p-0" to="signup">Register Here!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import signup from '../../../img/signup.png';

const SignUp = () => {
    const [signupData, setSignupData] = useState({});
    const { user, signUpUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSignupData = { ...signupData };
        newSignupData[field] = value;
        setSignupData(newSignupData);
        console.log(newSignupData);
    }

    const handleSignupSubmit = e => {
        signUpUser(signupData.name, signupData.email, signupData.password, history);
        e.preventDefault();
    }
    return (
        <div className="container">
            <div className="row mx-2">
                <div className="col-lg-6 col-md-9 my-lg-3 order-lg-2">
                    <img className="img-fluid" src={signup} alt="sign in" />
                </div>
                <div className="col-lg-6 p-md-4">
                    <div className="p-5 bg-dark-pro rounded-10">
                        <form onSubmit={handleSignupSubmit}>
                            <h3 className="text-white mb-3">Fill Up This Form!</h3>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label text-main">Full Name</label>
                                <input type="text" name="name" onBlur={handleOnBlur} className="form-control" id="email" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-main">Email address</label>
                                <input type="email" name="email" onBlur={handleOnBlur} className="form-control" id="email" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pass" className="form-label text-main">Password</label>
                                <input type="password" name="password" onBlur={handleOnBlur} className="form-control" id="pass" required />
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
                                <div className="alert alert-success" role="alert">
                                    Signed Up Successfully!!
                                </div>
                            }
                            {
                                authError &&
                                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                    <span>{authError}</span>
                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>
                            }
                            <div className="mt-3">
                                <span className="text-second pe-3">Already Have An Acoount?</span>
                                <Link className="btn text-main p-0" to="signin">Sign In Here!</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React from 'react';
import { Link } from 'react-router-dom';
import pay from '../../../img/pay.png';
import DashNav from '../DashNav/DashNav';

const Pay = () => {
    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-8">
                    <div className="ms-3 mt-3 container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6 col-sm-8 mx-auto">
                                <img className="img-fluid" src={pay} alt="payment" />
                            </div>
                            <div className="col-lg-5 col-sm-10 mx-auto text-lg-end mt-4">
                                <h2><span className="text-main">Payment System</span> Comming Soon. <br />Please Stay With Us....</h2>
                                <small className="d-block mb-3">We are so sorry for this inconvenience..</small>
                                <Link className="btn btn-main my-4 box rounded-pill" to="/">Go Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5"></div>
        </div>
    );
};

export default Pay;
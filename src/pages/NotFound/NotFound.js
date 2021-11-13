import React from 'react';
import { Link } from 'react-router-dom';
import nf from '../../img/404.png';

const NotFound = () => {
    return (
        <div className="container">
            <div className="mx-2">
                <div className="row align-items-center">
                    <div className="col-md-5 my-5">
                        <h4 className="text-main">404 ERROR...!!</h4>
                        <h1 className="mb-0">PAGE NOT FOUND</h1>
                        <small className="d-block mb-3">We are so sorry for this inconvenience..</small>
                        <Link className="btn btn-main my-4 box rounded-pill" to="/">Go Back To Home</Link>
                    </div>
                    <div className="col-md-7 col-9 my-5">
                        <img className="img-fluid" src={nf} alt="404 img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
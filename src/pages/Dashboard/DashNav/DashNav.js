import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DashNav = () => {
    const { isAdmin, signOutUser } = useAuth();
    return (
        <div className="col-lg-3">
            <div className="m-3 shadow-lg bg-dark-pro rounded-10 p-4">
                <Link className="btn text-main text-start fw-bolder d-lg-block my-3 me-4" to="/myorders">My Orders</Link>
                <Link className="btn text-main text-start fw-bolder d-lg-block my-3 me-4" to="/pay">Pay</Link>
                <Link className="btn text-main text-start fw-bolder d-lg-block my-3 me-4" to="/review">Review</Link>
                <Link className="btn text-main text-start fw-bolder d-lg-block my-3 me-4" to="/" onClick={signOutUser}>Log Out</Link>
                {
                    isAdmin &&
                    <Link className="btn text-main text-start fw-bolder d-lg-block my-3 me-4" to="/mkadmin">Make Admin</Link>
                }
            </div>
        </div>
    );
};

export default DashNav;
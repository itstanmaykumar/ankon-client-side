import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DashNav = () => {
    const { status, signOutUser } = useAuth();
    return (
        <div className="col-lg-4">
            <div className="m-3 shadow-lg bg-dark-pro rounded-10 p-4">
                {
                    status ?
                        (
                            <span>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/allorders">Manage Orders</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/allpaintings">Manage Products</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/addpainting">Add Product</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/mkadmin">Make Admin</Link>
                            </span>
                        )
                        :
                        (
                            <span>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/myorders">My Orders</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/pay">Pay</Link>
                                <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/review">Review</Link>
                            </span>
                        )
                }
                <Link className="btn btn-outline-main text-start my-3 me-4" to="/" onClick={signOutUser}>Sign Out</Link>
            </div>
        </div>
    );
};

export default DashNav;
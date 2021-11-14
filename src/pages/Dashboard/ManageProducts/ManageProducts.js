import React from 'react';
import DashNav from '../DashNav/DashNav';

const ManageProducts = () => {
    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-8">
                    <div className="m-3 py-2 bg-dark-pro container rounded-10">
                        <h1 className="text-white">Manage Products</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
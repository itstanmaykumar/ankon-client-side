import React from 'react';
import DashNav from '../DashNav/DashNav';

const AddPainting = () => {
    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-8">
                    <div className="ms-3 mt-3 container">
                        <div className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg">
                            <h1>Add New Painting</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5"></div>
        </div>
    );
};

export default AddPainting;
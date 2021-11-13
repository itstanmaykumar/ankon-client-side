import React from 'react';
import useAuth from '../../hooks/useAuth';
import DashNav from './DashNav/DashNav';

const Dashboard = () => {
    const { user } = useAuth();
    const defaultPic = "https://i.ibb.co/42LvjMx/default.png";

    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-9">
                    <div className="m-3 py-2 bg-dark-pro container rounded-10 text-white">
                        <p className="text-main text-center mt-5">You are now logged in as</p>
                        <div className="row mx-2 my-5 align-items-center justify-content-center">
                            <div className="col-2">
                                {
                                    user.photoURL ?
                                        (
                                            <img className="img-fluid rounded-circle" src={user.photoURL} alt={user.displayName} />
                                        )
                                        :
                                        (
                                            <img className="img-fluid rounded-circle" src={defaultPic} alt={user.displayName} />
                                        )
                                }
                            </div>
                            <div className="col-4">
                                <h3>{user.displayName}</h3>
                                <small>{user.email}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
import React, { useState } from 'react';
import DashNav from '../DashNav/DashNav';

const MakeAdmin = () => {
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const [email, setEmail] = useState('');


    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://serene-badlands-47415.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Admin Added Successfuly!!");
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-9">
                    <div className="ms-lg-3 mt-lg-3 container">
                        <div className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg text-white">
                            <h1>Make An admin</h1>
                            <form onSubmit={handleAdminSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1"
                                        className="form-label text-main">Email address</label>
                                    <input type="email" onBlur={handleOnBlur} className="form-control" id="exampleInputEmail1" aria-describedby="email" placeholder="Would Be Admin Email" />
                                </div>
                                <button type="submit" className="btn btn-main">Make Admin</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
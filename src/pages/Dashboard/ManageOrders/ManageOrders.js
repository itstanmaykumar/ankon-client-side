import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DashNav from '../DashNav/DashNav';

const ManageOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://serene-badlands-47415.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email]);

    const updateStatus = (id) => {
        const url = `https://serene-badlands-47415.herokuapp.com/orders/${id}`
        axios.put(url)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('Order is delivered!!!');
                    // fetching API data again to refresh
                    fetch("https://serene-badlands-47415.herokuapp.com/orders")
                        .then(res => res.json())
                        .then(data => setOrders(data));
                }
            })
    }

    const cancelOrder = id => {
        const proceed = window.confirm("Are you sure , you want to delete this order?");
        if (proceed) {
            const url = `https://serene-badlands-47415.herokuapp.com/orders/${id}`
            axios.delete(url)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("Booking Cancelled Successfully!!");
                        const remainingOrders = orders.filter(cart => cart._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }
    return (
        <div className="container">
            <div className="row container">
                <DashNav></DashNav>
                <div className="col-lg-8 col-12">
                    <div className="m-3 py-2 bg-dark-pro container rounded-10">
                        {
                            orders.length === 0 ?
                                (
                                    <h3 className="my-5 py-5 text-white text-center"><i className="far fa-folder-open pe-3"></i> Your Cart is Empty</h3>
                                )
                                :
                                (
                                    <table className="table text-light">
                                        <thead className="text-second">
                                            <tr>
                                                <th>Title</th>
                                                <th>Name</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orders.map((order) => (
                                                    <tr key={order._id}>
                                                        <td>{order.title}</td>
                                                        <td>{order.name}</td>
                                                        {
                                                            (order.status) ?
                                                                (

                                                                    <td className="text-success">Shipped</td>
                                                                )
                                                                :
                                                                (
                                                                    <td><span className="pointer text-main" onClick={() => updateStatus(order._id)}>Pending</span></td>
                                                                )
                                                        }
                                                        <td onClick={() => cancelOrder(order._id)} className="pointer ico text-danger">Delete</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;
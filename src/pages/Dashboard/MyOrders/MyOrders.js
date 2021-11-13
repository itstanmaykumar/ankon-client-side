import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DashNav from '../DashNav/DashNav';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://serene-badlands-47415.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email]);

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
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-9">
                    <div className="m-3 py-2 bg-dark-pro container rounded-10">
                        {
                            orders.length === 0 ?
                                (
                                    <h3 className="my-5 py-5 text-white text-center"><i className="far fa-folder-open pe-3"></i> Your Cart is Empty</h3>
                                )
                                :
                                (
                                    <table className="table text-light">
                                        <thead className="text-main">
                                            <tr>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                orders.map((order) => (
                                                    <tr key={order._id}>
                                                        <td>{order.title}</td>
                                                        <td>${order.price}</td>
                                                        {
                                                            (order.status) ?
                                                                (

                                                                    <td><i className="fas fa-truck pe-1"></i>Shipped</td>
                                                                )
                                                                :
                                                                (
                                                                    <td><i className="fas fa-hourglass-half pe-1"></i>Pending</td>
                                                                )
                                                        }
                                                        <td onClick={() => cancelOrder(order._id)} className="pointer ico"><i className="fas fa-trash pe-1"></i> Remove</td>
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

export default MyOrders;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DashNav from '../DashNav/DashNav';

const ManageProducts = () => {

    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://serene-badlands-47415.herokuapp.com/paintings`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email]);

    const deleteProduct = id => {
        const proceed = window.confirm("Are you sure , you want to delete this order?");
        if (proceed) {
            axios.delete(`https://serene-badlands-47415.herokuapp.com/paintings/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert("Product Is Deleted Successfully!!");
                        const remainingOrders = products.filter(product => product._id !== id);
                        setProducts(remainingOrders);
                    }
                })
        }
    }


    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-8">
                    <div className="m-3 py-2 bg-dark-pro container rounded-10">
                        {
                            products.length === 0 ?
                                (
                                    <h3 className="my-5 py-5 text-white text-center"><i className="far fa-folder-open pe-3"></i> Your Cart is Empty</h3>
                                )
                                :
                                (
                                    <table className="table text-light">
                                        <thead className="text-main">
                                            <tr>
                                                <th>Name</th>
                                                <th>Artist</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products.map((product) => (
                                                    <tr key={product._id}>
                                                        <td>{product.title}</td>
                                                        <td>{product.painter}</td>
                                                        <td onClick={() => deleteProduct(product._id)} className="pointer ico text-danger">Delete</td>
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

export default ManageProducts;
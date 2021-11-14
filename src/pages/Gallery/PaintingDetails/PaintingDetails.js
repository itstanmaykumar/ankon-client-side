import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PaintingDetails = () => {
    const { user } = useAuth();
    const { paintingId } = useParams();

    // getting paintings from database
    const [singlePainting, setSinglePainting] = useState([]);
    useEffect(() => {
        fetch(`https://serene-badlands-47415.herokuapp.com/paintings/${paintingId}`)
            .then(res => res.json())
            .then(data => setSinglePainting(data))
    }, [paintingId]);

    // getting orders from database
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch("https://serene-badlands-47415.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // console.log(singlePainting);

    const id = orders.length;
    const { title, img, painter, pImg, year, description, dimensions, medium, price } = singlePainting;

    const refAdd = useRef();
    const refCell = useRef();
    const history = useHistory();

    const handleBooking = (e) => {
        const name = user.displayName;
        const email = user.email;
        const address = refAdd.current.value;
        const phone = refCell.current.value;
        const status = false;
        const cart = { id, title, price, name, email, address, phone, status };

        axios.post("https://serene-badlands-47415.herokuapp.com/orders", cart)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Order Is Being Placed!!");
                    history.push("/gallery");
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="mx-2 bg-warnin">
                <div className="container">
                    <h1 className="text-center mt-4">P<span className="border-bottom border-main border-3">ainting Deta</span>ils</h1>
                    <div className="row my-4 align-items-center">
                        <div className="col-lg-6">
                            <img className="img-fluid" src={img} alt="painting" />
                        </div>
                        <div className="col-lg-6 mt-4">
                            <h2 className="text-main mb-0">{title}</h2>
                            <h5 className="mt-2">Price: <span className="text-main">${price}</span></h5>
                            <h6 className="mt-2">Description</h6>
                            <small>{description}</small>
                            <h6 className="mt-2">Dimensions: <span className="text-main">{dimensions}</span></h6>
                            <h6 className="mt-2">Type: <span className="text-main">{medium}</span></h6>
                        </div>
                    </div>
                    <div className="py-5">
                        <h2 className="text-second">Painted By</h2>
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-3"></div>
                            <div className=" col-md-3 col-6">
                                <img className="rounded-circle img-fluid" src={pImg} alt={painter} />
                            </div>
                            <div className="col-lg-7 col-6">
                                <h4 className="text-main">{painter}</h4>
                                <small className="text-second">He Painted this masterpiece in {year}</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mx-auto mb-5">
                    <form onSubmit={handleBooking} className="px-5 pt-3 pb-5 mt-5 bg-dark-pro rounded-10 shadow-lg">
                        <h3 className="mt-4 mb-0 text-main">Purchase This Painting</h3>
                        <small className="mb-3 text-second d-block">You Must Fill Up This Form To Purchase This Painting</small>
                        <div className="my-4">
                            <label htmlFor="name" className="form-label text-secondary">Your Full Name</label>
                            <input type="text" className="form-control" id="name" defaultValue={user.displayName} disabled />
                        </div>
                        <div className="my-4">
                            <label htmlFor="email" className="form-label text-secondary">Your Email Address</label>
                            <input type="email" className="form-control" id="email" defaultValue={user.email} disabled />
                        </div>
                        <div className="my-4">
                            <label htmlFor="add" className="form-label text-main">Your Address</label>
                            <input ref={refAdd} type="text" className="form-control" id="add" placeholder="59, Some Street, Some City" required />
                        </div>
                        <div className="my-4">
                            <label htmlFor="cNum" className="form-label text-main">Your Cell Number</label>
                            <input ref={refCell} type="text" className="form-control" id="cNum" placeholder="+8801711-xxxxxx" required />
                        </div>
                        <button type="submit" className="mt-4 btn btn-main box"><i className="fas fa-shopping-cart pe-2"></i> Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaintingDetails;
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import DashNav from '../DashNav/DashNav';

const AddPainting = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://serene-badlands-47415.herokuapp.com/paintings")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const history = useHistory();

    const refTitle = useRef();
    const refImg = useRef();
    const refPainter = useRef();
    const refPImg = useRef();
    const refYear = useRef();
    const refDes = useRef();
    const refDim = useRef();
    const refMedium = useRef();
    const refPrice = useRef();

    const handleBooking = (e) => {
        const totalCurrentProducts = products.length;
        const id = parseInt(totalCurrentProducts);
        const title = refTitle.current.value;
        const img = refImg.current.value;
        const painter = refPainter.current.value;
        const pImg = refPImg.current.value;
        const year = refYear.current.value;
        const description = refDes.current.value;
        const dimensions = refDim.current.value;
        const medium = refMedium.current.value;
        const price = refPrice.current.value;

        const newProduct = { id, title, img, painter, pImg, year, description, dimensions, medium, price };

        axios.post("https://serene-badlands-47415.herokuapp.com/paintings", newProduct)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Feedback Is Posted!! Redirecting you to Dashboard...");
                    history.push("/dashboard");
                }
            })
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-8">
                    <div className="ms-lg-3 mt-lg-3 container">
                        <form onSubmit={handleBooking} className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg text-main">
                            <h3 className="mt-4 mb-0 text-main">Add A New Product</h3>
                            <small className="mb-3 text-second d-block">Please fill up this form to add the product.</small>
                            <div className="my-4">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input ref={refTitle} type="text" className="form-control" id="title" placeholder="The Vitruvian Man" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="img" className="form-label">Painting Image Url</label>
                                <input ref={refImg} type="text" className="form-control" id="img" placeholder="ex- https://i.ibb.co/YX4sB1W/dhaka-01.jpg" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="painter" className="form-label">Artist Name</label>
                                <input ref={refPainter} type="text" className="form-control" id="painter" placeholder="Jane Doe" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="pImg" className="form-label">Artist Image Url</label>
                                <input ref={refPImg} type="text" className="form-control" id="pImg" placeholder="Square Shaped Image Url" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="year" className="form-label">Creation Year (Original)</label>
                                <input ref={refYear} type="text" className="form-control" id="year" placeholder="Ex- 1857" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="Description" className="form-label">Painting Description</label>
                                <textarea ref={refDes} maxLength="200" type="text" className="form-control" id="Description" placeholder="Provide a brief and short description of the painting" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="dim" className="form-label">Dimensions ( h x w )</label>
                                <input ref={refDim} type="text" className="form-control" id="dim" placeholder="40 in x 30 in" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="medium" className="form-label">Medium</label>
                                <input ref={refMedium} type="text" className="form-control" id="medium" placeholder="Ex - Oil Paint" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input ref={refPrice} type="number" className="form-control" id="price" placeholder="Ex - 420" required />
                            </div>
                            <button type="submit" className="mt-4 btn btn-main box">Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="my-5"></div>
        </div>
    );
};

export default AddPainting;
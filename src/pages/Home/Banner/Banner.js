import React from 'react';
import { Link } from 'react-router-dom';
import showcase from '../../../img/showcase.png';

const Banner = () => {
    return (
        <div className="container py-3">
            <div className="row justify-content-between align-items-center">
                <div className="my-3 col-lg-6 pe-4">
                    <p className="mb-0 text-second">Genuine Fine Art Reproduction Oil Paintings</p>
                    <h1 className="mb-3">Buy The <span className="text-main">Finest Reproductions</span> of Your Favourite Paintings</h1>
                    <small className="mb-2 d-block text-secondary">Our talented artists have created hundreds of thousands of replica paintings for art lovers around the world. Choose your favourite oil painting reproduction by famous artist.</small>
                    <Link className="mt-4 px-4 border-2 fw-bolder btn btn-outline-main" to="/gallery">Explore <i className="ps-1 fas fa-angle-double-right"></i></Link>
                </div>
                <div className="my-3 col-lg-6 col-10">
                    <img className="img-fluid" src={showcase} alt="banner img" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
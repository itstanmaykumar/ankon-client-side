import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../img/logo1.png';

const Footer = () => {
    return (
        <div className="bg-dark-pro">
            <div className="container px-4">
                <div className="py-4 row justify-content-between text-start">
                    <div className="mt-4 col-lg-2 col-sm-6 order-lg-2 order-xs-2">
                        <h6 className="mb-2 text-white"><span className="border-2 border-bottom border-main">Quick L</span>inks</h6>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/info">FAQ</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/feedback">Feedback</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/career">Career</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/payment">Payment Options</Link>
                        <Link className="text-decoration-none d-block text-second foo-hover" to="/return">Return Policy</Link>
                    </div>
                    <div className="mt-4 mb-3 text-white col-lg-4 col-sm-6 order-lg-3 order-xs-1">
                        <h6 className="mb-2 text-white"><span className="border-2 border-bottom border-main">Connect Wi</span>th Us</h6>
                        <div className="my-2 d-flex text-second">
                            <small className="col-1"><i className="text-white fas fa-map-marker-alt"></i></small>
                            <small>12, Jhankar Mahbub Street,<br />Programming Hero, Bangladesh</small>
                        </div>
                        <div className="my-2 d-flex text-second">
                            <small className="col-1"><i className="text-white fas fa-phone-alt"></i></small>
                            <small>999, +88012345</small>
                        </div>
                        <h6 className="mt-3 mb-3 text-white"><span className="border-2 border-bottom border-main">Get Discount Al</span>erts</h6>
                        <div className="row justify-content-between">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                                <button className="btn btn-outline-main" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 col-lg-4 col-sm-12 order-lg-1 order-xs-3">
                        <div className="pb-2">
                            <Link className="navbar-brand" to="/home">
                                <img src={logo1} className="w-25" alt="logo img" />
                            </Link>
                        </div>
                        <small className="text-second d-block"><span className="text-white">ankon</span> provides the finest replica painting of verious famous oil paintings by different famous artists.</small>
                        <div className="mt-4 mb-2">
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-facebook-f"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-twitter"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-google-plus-g"></i></Link>
                            <Link to="/social"><i className="ico text-white pe-3 fab fa-linkedin-in"></i></Link>
                        </div>
                        <small className="text-second">Copyright &copy; 2021. <span className="text-light">Tanmay Kumar.</span></small>
                        <div>
                            <Link to="/desclaimer" className="text-decoration-none text-main foo-hover"><small>Desclaimer.</small></Link>
                            <Link to="/tnc" className="px-2 text-decoration-none text-main foo-hover"><small>Terms & Conditions.</small></Link>
                            <Link to="/privacy" className="text-decoration-none text-main foo-hover"><small>Privacy Policy.</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
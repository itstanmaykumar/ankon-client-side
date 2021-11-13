import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import DashNav from '../DashNav/DashNav';

const Review = () => {
    const { user } = useAuth();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://serene-badlands-47415.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const img = user.photoURL ? user.photoURL : "https://i.ibb.co/42LvjMx/default.png";
    const id = reviews.length;
    console.log(id);
    const refFeed = useRef();
    const refRate = useRef();
    const history = useHistory();

    const handleBooking = (e) => {
        const name = user.displayName;
        const email = user.email;
        const feed = refFeed.current.value;
        const rating = refRate.current.value;
        const rate = parseInt(rating);
        const review = { id, img, name, email, feed, rate };

        // console.log(review);

        axios.post("https://serene-badlands-47415.herokuapp.com/reviews", review)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Your Feedback Is Posted!! Redirecting you to homepage...");
                    history.push("/home");
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
                        <form onSubmit={handleBooking} className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg">
                            <h3 className="mt-4 mb-0 text-main">Provide Us About Your Feedback</h3>
                            <small className="mb-3 text-second d-block">Please fill up this form to review.</small>
                            <div className="my-4">
                                <label htmlFor="name" className="form-label text-secondary">Your Full Name</label>
                                <input type="text" className="form-control" id="name" defaultValue={user.displayName} disabled />
                            </div>
                            <div className="my-4">
                                <label htmlFor="email" className="form-label text-secondary">Your Email Address</label>
                                <input type="email" className="form-control" id="email" defaultValue={user.email} disabled />
                            </div>
                            <div className="my-4">
                                <label htmlFor="add" className="form-label text-main">Your Feedback</label>
                                <textarea maxlength="200" ref={refFeed} type="text" className="form-control" id="add" placeholder="Write Something Here... (in 200 character or less)" required />
                            </div>
                            <div className="my-4">
                                <label htmlFor="cNum" className="form-label text-main">Give Us A Rating</label>
                                <input ref={refRate} type="number" className="form-control" id="cNum" placeholder="From 0 to 5" min="0" max="5" required />
                            </div>
                            <button type="submit" className="mt-4 btn btn-main box">Submit Now</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="my-5"></div>
        </div>
    );
};

export default Review;
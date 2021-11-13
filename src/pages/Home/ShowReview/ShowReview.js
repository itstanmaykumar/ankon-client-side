import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const ShowReview = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://serene-badlands-47415.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="container">
            <h2 className="text-center">What O<span className="border-bottom border-main border-3">ur Clients Say About</span> Us?</h2>
            <div>
                <div id="carouselExampleIndicators" className="my-5 col-md-10 mx-auto bg-dark-pro rounded-20 shadow-lg carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {
                            reviews.map((review) => (
                                <button key={review._id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={review.id} className={review.cls} aria-current="true" aria-label={`Slide ${review.id + 1}`}></button>
                            ))
                        }
                    </div>
                    <div className="carousel-inner">
                        {
                            reviews.map((review) => (
                                <SingleReview key={review._id} review={review}></SingleReview>
                            ))
                        }
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowReview;
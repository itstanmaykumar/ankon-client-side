import React from 'react';

const SingleReview = (props) => {
    const { id, img, name, feed, rate } = props.review;

    const restRate = 5 - rate;

    let activeClass = "";
    if (id === 0) {
        activeClass = "active";
    }

    return (
        <div className={`carousel-item ${activeClass}`} data-bs-interval="2000">
            <div className="my-5 text-center text-white mh-5 d-flex flex-column justify-content-between">
                <div className="text-center pt-4">
                    <div className="mb-4">
                        {
                            [...Array(rate)].map((e, i) => <i key={i} className="text-main fas fa-star"></i>)
                        }
                        {
                            [...Array(restRate)].map((e, i) => <i key={i} className="text-main far fa-star"></i>)
                        }
                    </div>
                </div>
                <p className="px-5 mx-5">"{feed}"</p>
                <div className="py-5">
                    <img className="rounded-circle mb-3 d-block mx-auto img-fluid" src={img} height="100" alt="r img" />
                    <h4>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
import React, { useEffect, useState } from 'react';
import Paintings from '../Paintings/Paintings';

const Gallery = () => {

    const [paintings, setPainings] = useState([]);

    useEffect(() => {
        fetch("https://serene-badlands-47415.herokuapp.com/paintings")
            .then(res => res.json())
            .then(data => setPainings(data))
    }, []);

    return (
        <div className="text-center">
            <div className="container">
                <h3 className="mt-5 text-main">Most Popular Oil Painting Reproductions</h3>
                <div className="mx-lg-5 px-lg-5">
                    <small className="mb-2 mx-md-5 px-md-5 d-block text-secondary">Our talented artists have created hundreds of thousands of replica paintings for art lovers around the world. Choose your favourite oil painting reproduction by famous artist.</small>
                </div>
            </div>
            <div className="container my-5 px-4">
                <div className="container px-5 py-5 rounded-10 bg-light-pro">
                    <div className="row g-4">
                        {
                            paintings.length === 0 ?
                                (
                                    <div className="d-flex justify-content-center text-main">
                                        <h1>Loading.....</h1>
                                        <div className="mt-2 ms-2 spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                )
                                :
                                (
                                    paintings.map((painting) => (
                                        <Paintings key={painting.id} painting={painting}></Paintings>
                                    ))
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
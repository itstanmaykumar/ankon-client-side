import React, { useEffect, useState } from 'react';
import Paintings from '../../Gallery/Paintings/Paintings';

const BestSellers = () => {
    const [paintings, setPainings] = useState([]);

    useEffect(() => {
        fetch("https://serene-badlands-47415.herokuapp.com/paintings")
            .then(res => res.json())
            .then(data => setPainings(data))
    }, []);

    const bestSeller = paintings.slice(0, 6);

    return (
        <div className="px-2">
            <div className="container p-5 pb-3 text-center bg-light-pro rounded-10">
                <h2 className="mb-3">Our <span className="border-bottom border-main border-3">Best Seller Reprodu</span>ctions</h2>
                <div className="row g-4 pt-5">
                    {
                        bestSeller.length === 0 ?
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
                                bestSeller.map((painting) => (
                                    <Paintings key={painting.id} painting={painting}></Paintings>
                                ))
                            )

                    }
                </div>
            </div>
        </div>
    );
};

export default BestSellers;
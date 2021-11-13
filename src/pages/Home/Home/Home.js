import React from 'react';
import Banner from '../Banner/Banner';
import BestSellers from '../BestSellers/BestSellers';
import Info from '../Info/Info';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div className="container">
            <Banner></Banner>
            <BestSellers></BestSellers>
            <Info></Info>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;
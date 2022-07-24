import React from 'react';
import hero from'../../images/hero-image.png'
import brand from '../../images/brandsection.png'
import review from '../../images/review.png'

const MainPage = () => {
    return (
        <div>
            <img src={hero} alt="" />
            <img src={brand} alt="" />
            <img src={review} alt="" />
        </div>
    );
};

export default MainPage;
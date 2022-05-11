import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Subscribe from '../Subscribe/Subscrib';
import './Home.css';


const Home = () => {
    return (
        <div className='add'>

           <Banner></Banner>
           <Products></Products>
           <Reviews></Reviews>
           <Subscribe></Subscribe>
         

        </div>
    );
};

export default Home;
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
           <div className='home-inventory'>
               <a href="/manage">Manage Inventories<i className="fa-solid fa-angles-right px-1"></i></a>
           </div>
           <Reviews></Reviews>
           <Subscribe></Subscribe>
         

        </div>
    );
};

export default Home;
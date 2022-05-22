import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { pathname } = useLocation();


    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => { setProducts(data); })

    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='Products-title mt-5 text-white'>FEATURED <span className='color'>BOOKS</span></h2>
                <div className="Products-container">
                    {
                        pathname === '/' ? (
                            products.slice(0, 6).map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        ) : (
                            products.map(product => <Product
                                key={product._id}
                                product={product}

                            ></Product>)
                        )
                    }
                </div>

            </div>

        </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProduts';
import Product from '../Home/Product/Product';



import './Inventory.css';

const Inventory = ({ children }) => {
    // const [product, setProduct] = useState([]);
    const [product, setProduct] = useProducts();

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => { setProduct(data); })
    })
    return (
        <div>
            <h2 className='text-white py-5 text-center '>All <span className='color'>Product</span></h2>
            <div className='container pro-items '>

                {
                    product.map(product => <Product
                        key={product._id}
                        Product={product}
                    ></Product>)
                }

            </div>
           

        </div>

    );
};

export default Inventory;
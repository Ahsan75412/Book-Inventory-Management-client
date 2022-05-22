import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProduts';
import Product from '../Home/Product/Product';
import './Inventory.css';

const Inventory = ({ children }) => {
    // const [product, setProduct] = useState([]);
    const [product, setProduct] = useProducts();


    useEffect(() => {
        fetch('https://safe-cliffs-63488.herokuapp.com/product')
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
                        product={product}
                    ></Product>)
                    // <button className='btn btn-warning'>delete</button>  
                }

            </div>


        </div>

    );
};

export default Inventory;
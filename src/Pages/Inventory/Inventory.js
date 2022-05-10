import React from 'react';
import useProducts from '../../hooks/useProduts';
import Product from '../Home/Product/Product';

const Inventory = () => {
    const [products, setProducts] = useProducts();


    return (
        <div>
            {
                products.map(product => <Product key={product._id} Product={product}></Product>)
            }
            
        </div>
    );
};

export default Inventory;
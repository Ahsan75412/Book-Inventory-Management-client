import React from 'react';
import './product.css';

const Product = ({Product}) => {
    const { price ,  img , description , product_name , quantity } = Product; 
    return (
        <div className='product p-3 card'>
            <img className='w-100 bredth' src={img} alt="" />
            <h4 className='text-white mt-2'> {product_name}</h4>
            <p className='stye text-center'>Quantity: {quantity}</p>
            <p className='stye text-center'>Price: {price}</p>
            <p className='stye'><small>{description}</small></p>
            {/* <button onClick={() => nevigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button> */}
            <button className='btn btn-outline-warning'>Manage</button>
        </div>
    );
};

export default Product;
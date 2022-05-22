import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css';

const Product = ({ product, children }) => {
    const { _id, price, img, description, product_name, quantity } = product;

    const navigate = useNavigate();
    const nevigateToProductDetail = (id) => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='product p-3 card'>
            <img className='w-100 bredth' src={img} alt="" />
            <h4 className='text-white mt-2'> {product_name}</h4>
            <p className='stye text-center'>Quantity: {quantity}</p>
            <p className='stye text-center'>Price: {price}</p>
            <p className='stye'><small>{description}</small></p>

            <button onClick={() => nevigateToProductDetail(_id)} className='btn btn-outline-warning'>Manage</button>
            {
                children
            }

        </div>

    );
};

export default Product;
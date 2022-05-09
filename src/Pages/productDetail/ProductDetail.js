import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    return (
        <div>
            <h2>You are about To Book {product.name}</h2>

            <div className='text-center'>
                <Link to={`/checkout/${productId}`}>
                    <button className="btn btn-outline-warning">Check Out</button>
                </Link>
            </div>

        </div>
    );
};

export default ProductDetail;
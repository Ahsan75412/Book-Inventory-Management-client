import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';
import './productDetails.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    console.log(product);

    // style={{ maxWidth: '650px' }}
    return (
        <div className="product-pa container mt-5">
            <div className="card mb-3 " > 
                <div className="row g-0">
                    <div className="col-md-5 px-5 py-3">
                        <img src={product.img} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-7 ">
                        <div className="card-body text-white mt-5">
                            <h5 className="card-title">{product.product_name}</h5>
                            <p>Price: ${product.price}</p>
                            <p>Id: {product._id}</p>
                            <p>Supplier: {product.supplier}</p>
                            <p class="card-text">{product.description}</p>
                            <p className='text-warning'>Quantity: {product.quantity}</p>
                            <input type="number" name="" id="" placeholder='Update Quantity' />
                            <button className='btn btn-warning mx-3'>Restock </button>
                            <button className='btn btn-outline-warning '>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      
    );
};

export default ProductDetail;
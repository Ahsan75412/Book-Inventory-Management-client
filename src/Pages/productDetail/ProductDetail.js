import React, { useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetail from '../../hooks/useProductDetail';
import './productDetails.css';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDetail(productId);
    const quantityRef = useRef(null);




    // add a product
    const handleRestock = (quantity) => {
        const updatedQuantity = parseInt(quantity) + parseInt(quantityRef.current.value);
        const newQuantity = { updatedQuantity };

        fetch(`https://safe-cliffs-63488.herokuapp.com/product/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const updateItem = {
                        ...product,
                        quantity: updatedQuantity,
                    };
                    setProduct(updateItem);
                    quantityRef.current.value = '';
                    toast('Restock Updated', { type: 'success' });
                }
            })

    }


    // Delivered button to click an item to be delivered

    const handleDelivered = (quantity) => {
        const updatedQuantity = parseInt(quantity) - 1;
        // console.log(updatedQuantity);

        const newQuantity = { updatedQuantity };
        // Update Product 

        fetch(`https://safe-cliffs-63488.herokuapp.com/product/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const updateItem = {
                        ...product,
                        quantity: updatedQuantity,
                    };
                    setProduct(updateItem);
                    quantityRef.current.value = '';
                    toast('Updated to Delivered', { type: 'success' });
                }
            });
    }

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
                            <p className="card-text">{product.description}</p>
                            <p className='text-warning'>Quantity: {product.quantity}</p>
                            <input ref={quantityRef} type="number" placeholder='Update Quantity' />
                            <button className='btn btn-warning mx-3' onClick={() => handleRestock(product.quantity)}>Restock </button>
                            <button className='btn btn-outline-warning ' onClick={() => handleDelivered(product.quantity)}>Delivered</button>
                            {/* <Link to={`/purchase/${productId}`}>
                                <button className="btn btn-warning">Purchase</button>
                            </Link> */}


                            <a href='/manage' className='px-3'>Manage Inventories</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;
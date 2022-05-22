
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProduts';
import Product from '../Home/Product/Product';
import './ManageItem.css';

const ManageItem = ({ children }) => {
    const [product, setProduct] = useProducts();




    // Delete Product code 
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this product?');
        if (proceed) {
            const url = `https://safe-cliffs-63488.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingProducts = product.filter(product => product._id !== id);
                    setProduct(remainingProducts);

                })

        }
    }

    useEffect(() => {
        fetch('https://safe-cliffs-63488.herokuapp.com/product')
            .then(res => res.json())
            .then(data => { setProduct(data); })
    })
    return (
        <div>
            <h2 className='text-white py-5 text-center '>Manage <span className='color'>Product</span></h2>
            <div className='container pro-items '>

                {
                    product.map(product => <Product
                        key={product._id}
                        product={product}
                    ><button className='delete' onClick={() => handleDelete(product._id)}> <i className="fa-solid fa-trash"></i></button></Product>)

                }

            </div>

        </div>
    );
};

export default ManageItem;
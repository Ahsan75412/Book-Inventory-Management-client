import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProduts';
import Product from '../Home/Product/Product';
import Inventory from '../Inventory/Inventory';

const ManageItem = ({children}) => {
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
                    ><button className='btn text-white'> Delete<i class="fa-solid fa-trash text-danger px-1"></i></button></Product>)
                    
                }
            
            </div>
           
        </div>
    );
};

export default ManageItem;
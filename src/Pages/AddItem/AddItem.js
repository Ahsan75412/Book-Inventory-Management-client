import React from 'react';
import { useForm } from 'react-hook-form';
import './AddItem.css';

const AddItem = () => {

        const { register, handleSubmit } = useForm();
    
        const onSubmit = data => {
            console.log(data);
            const url = `http://localhost:5000/product`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
    
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })
        };
    
    return (
        <div className='w-50 mx-auto'>
            <h2 className='mt-5 mb-5 text-warning text-center '>Please add a Book in inventory</h2>

            <form className='d-flex flex-column pd' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Name' {...register("product_name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplier", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='btn btn-outline-warning w-50 mx-auto mt-5' value="Add Product" type="submit" />

            </form>
            
        </div>
    );
};

export default AddItem;
import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
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
        <h2 className='mt-5 mb-5 text-warning text-center '>Please add a Review</h2>

        <form className='d-flex flex-column pd' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2' placeholder='Name' type="text" {...register("name")} />
            <input className='mb-2' placeholder='Add Review' {...register("review", { required: true, maxLength: 20 })} />
            <input className='mb-2' placeholder='Rate' type="number" {...register("rate", { required: true, maxLength: 20 })} />
           
            <input className='btn btn-outline-warning w-50 mx-auto mt-5' value="Add Review" type="submit" />

        </form>
        
    </div>
    );
};

export default AddReview;
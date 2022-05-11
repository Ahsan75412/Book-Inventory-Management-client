import React, { useEffect, useState } from 'react';
import './Reviews.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    // https://dry-dusk-43936.herokuapp.com/reviews
    
    useEffect(() => {
        setLoading(true);
        fetch('https://dry-dusk-43936.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="page text-center">
                <div className="spinner-grow text-primary m-5 text-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container home-reviews text-center text-white">
            <h2 className="fw-bold mt-5">Client's <span className="text-warning">Review</span></h2>

            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 g-lg-3 py-5">
                {
                    reviews.length > 4 ? (reviews.slice((reviews.length - 4), (reviews.length))).map(review => (
                        <div className="col" key={review._id}>
                            <div className="card single-agent h-100 p-3 p-lg-4 rounded mx-lg-2">
                                <div className="card-body pt-3 px-0">
                                    <h5 className="card-title fw-bold">{review.name}</h5>
                                    <p className="card-text description">{review.details}</p>
                                    <div>
                                        {
                                            [...Array(parseInt(review.rating))].map((x, index) => (
                                                <i key={index} className="fas fa-star"></i>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : (
                        reviews.map(review => (
                            <div className="col" key={review._id}>
                                <div className="card single-agent h-100 p-3 p-lg-4 rounded mx-lg-2">
                                    <div className="card-body pt-3 px-0">
                                        <h5 className="card-title fw-bold">{review.name}</h5>
                                        <p className="card-text description">{review.details}</p>
                                        <div>
                                            {
                                                [...Array(parseInt(review.rating))].map((x, index) => (
                                                    <i key={index} className="fas fa-star"></i>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;
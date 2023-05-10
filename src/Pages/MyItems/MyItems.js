// import React from 'react';
//MyItems

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import auth from "../../firebase.init";
import Product from "../Home/Product/Product";

import './MyItems.css';




const MyItems = () => {
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        setLoading(true);
        const author = { author: user?.email };
        const url = "https://book-inventory-wvx9.onrender.com/items";
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(author),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data[0]) {
                    setProduct(data);
                    setLoading(false);
                    console.log(data);
                } else {
                    alert("No items found");
                }
            });
    }, [user.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm(
            "Are you sure you want to delete this service?"
        );
        if (proceed) {
            const url = `https://book-inventory-wvx9.onrender.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingProducts = product.filter(product => product._id !== id);
                    setProduct(remainingProducts);

                });

        }
    };

    if (loading) {
        return <div>Loading...</div>
    }

    return (

        <div className="pdd">
            <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 g-lg-5 py-5 mt-5 ">
                {product.map((product) => (
                    <Product key={product._id} product={product}>
                        <div className="d-flex gap-4  ">
                            <button
                                onClick={() => handleDelete(product._id)}
                                className="btn btn-book btn-danger mt-2 mx-auto"
                            >
                                Delete &nbsp;
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </Product>
                ))}
            </div>
        </div>
    );
};

export default MyItems;
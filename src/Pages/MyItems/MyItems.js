// import React from 'react';
//MyItems

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import auth from "../../firebase.init";
import Product from "../Home/Product/Product";




const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const author = { author: user?.email };
        const url = "http://localhost:5000/product";
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
                    setProducts(data);
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
            const url = `http:localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = products.filter((p) => p._id !== id);
                    setProducts(remaining);
                });
        }
    };
    return (
        <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4 g-lg-5 py-5">
            {products.map((product) => (
                <Product key={product._id} product={product}>
                    <div className="d-flex gap-4">
                        <Link to={`/product/${product._id}`}>
                            <button className="btn btn-book">
                                Manage &nbsp;
                                <i className="fas fa-cart-plus"></i>
                            </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(product._id)}
                            className="btn btn-book"
                        >
                            Delete &nbsp;
                            <i className="fas fa-cart-plus"></i>
                        </button>
                    </div>
                </Product>
            ))}
        </div>
    );
};

export default MyItems;
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='page'>
             <div className="not-found text-center py-5">
                <h1 className="not-found-title fw-bold">404</h1>
                <h1 className="fw-bold">OPSS! PAGE NOT FOUND</h1>
                <h5>Sorry, the page you're looking for doesn't exist.</h5>
                <br />
                <Link to="/" className="mx-4"><button className="btn btn-regular px-3">RETURN HOME</button></Link>
            </div>
        </div>
    );
};

export default NotFound;
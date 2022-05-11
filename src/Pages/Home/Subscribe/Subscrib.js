import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="home-subscribe container-fluid text-center py-5">
            <div className="mb-5">
                <h2>FOR <span className="text-warning">NEWS</span> AND <span className="text-warning">UPDATES</span></h2>
                <hr />
            </div>
            <h4 className="text-info fw-bold">SUBSCRIBE</h4>
            <p>Give us your email and we will let you know what's up.</p>
            <input className="shadow-lg" type="email" placeholder="Your email address" />
            <br /><br />
            <button className="btn btn-submit">Submit</button>
        </div>
    );
};

export default Subscribe;
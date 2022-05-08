import React from 'react';
import './Footer.css';
import logo from '../../../Images/logo/logo.jpg'

const Footer = () => {
    return (
        <div className="footer container-fluid text-center py-4 d-flex justify-content-around">
            <div className="row row-cols-1 row-cols-md-3 align-items-center justify-content-around">
                
                <div className="col pt-2 py-lg-0 px-auto px-lg-5 text-center text-lg-start">
                    <div className="d-flex align-items-center justify-content-center">
                        <a className="navbar-brand text-light" href="/"><img src={logo} alt="" /></a>
                        <a href="/" className="navbar-brand text-light text-start">
                            <h4 className="m-0 fw-bold">Book Inventory</h4>
                        </a>
                    </div>
                </div>

                <div className="col footer-mid pt-5 ps-5 py-lg-0 px-auto px-lg-5">
                    <div className="d-flex align-items-center justify-content-start text-start">
                        <div className="footer-icon">
                            <i className="fas fas2 fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <p className="py-0 m-0">Dhaka,Bangladesh</p>
                            {/* <p className="py-0 m-0">Maldives</p> */}
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start text-start pt-3">
                        <div className="footer-icon">
                            <i className="fas fas2 fa-phone-alt"></i>
                        </div>
                        <div>
                            <p className="py-0 m-0 fw-bold">+088 017 000000</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-start text-start pt-3">
                        <div className="footer-icon">
                            <i className="fas fas2 fa-envelope"></i>
                        </div>
                        <div>
                            <p className="py-0 m-0">support@bookinventory.com</p>
                        </div>
                    </div>
                </div>


                <div className="col footer-end pt-5 py-lg-0 px-auto px-lg-5">
                    <div className="text-center text-lg-start">
                        <h6 className="fw-bold">About US</h6>
                        <p className="py-2">Book Inventory. We help you get the best book in your budget.</p>
                        <div>
                            <i className="footer-icons fab fab2 fa-facebook-square"></i>
                            <i className="footer-icons fab fab2 fa-instagram"></i>
                            <i className="footer-icons fab fab2 fa-twitter-square"></i>
                            <i className="footer-icons fab fab2 fa-github-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
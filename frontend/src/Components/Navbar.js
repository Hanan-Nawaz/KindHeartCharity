import React from 'react';
import '../css/navbar.css'
import logo from '../imgs/logo.png'

const Navbar = () => {
    return (
        <>
            <header className="site-header">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-12 d-flex flex-wrap">
                            <p className="d-flex me-4 mb-0">
                                <i className="fa fa-map-marker me-2"></i>
                                NUML, H9/4 Islamabad, Pakistan
                            </p>

                            <p className="d-flex mb-0">
                                <i className="fa fa-envelope me-2"></i>
                                <a href="mailto:info@company.com">info@kindheartcharity.com</a>
                            </p>
                        </div>

                        <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                            <ul className="social-icon">
                               
                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link fa fa-facebook"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link fa fa-instagram"></a>
                                </li>

                                <li className="social-icon-item">
                                    <a href="#" className="social-icon-link fa fa-whatsapp"></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </header>

            <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} className="logo img-fluid" alt="Kind Heart Charity" />
                        <span>
                            Kind Heart Charity
                            <small>Non-profit Organization</small>
                        </span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="/#top">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="/#about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="/#our-story">Our Story</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="/#join-us">Join Us</a>
                            </li>
                          
                            <li className="nav-item">
                                <a className="nav-link click-scroll" href="/#contact">Contact</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link click-scroll text-primary custob-btn" href="/login">Sign In</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

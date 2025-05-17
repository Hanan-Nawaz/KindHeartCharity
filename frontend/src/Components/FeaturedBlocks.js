import React from 'react';
import '../css/featured-block.css'
import icon1 from '../imgs/icons/hands.png'
import icon2 from '../imgs/icons/heart.png'
import icon3 from '../imgs/icons/receive.png'
import icon4 from '../imgs/icons/scholarship.png'

const FeaturedBlocks = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 text-center mx-auto">
            <h2 className="mb-5">Welcome to Kind Heart Charity</h2>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="#join-us" className="d-block">
                <img src={icon1} className="featured-block-image img-fluid" alt="" />
                <p className="featured-block-text">Become a <strong>volunteer</strong></p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="#join-us" className="d-block">
                <img src={icon2} className="featured-block-image img-fluid" alt="" />
                <p className="featured-block-text"><strong>Become a</strong> Donor</p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="#join-us" className="d-block">
                <img src={icon3} className="featured-block-image img-fluid" alt="" />
                <p className="featured-block-text">Make a <strong>Donation</strong></p>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="#join-us" className="d-block">
                <img src={icon4} className="featured-block-image img-fluid" alt="" />
                <p className="featured-block-text">Scholarship <strong>inFuture..</strong></p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlocks;

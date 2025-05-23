import React from 'react';
import '../css/cta.css'

const CtaSection = () => {
  return (
    <section className="cta-section section-padding section-bg">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-12 ms-auto">
            <h2 className="mb-0">Make an impact. <br /> Save lives.</h2>
          </div>
          <div className="col-lg-5 col-12">
            <a href="#join-us" className="me-4">
              Become a Donor
            </a>
            <a href="#join-us" className="custom-btn btn smoothscroll">
              Become a volunteer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

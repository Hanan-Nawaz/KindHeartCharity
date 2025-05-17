import React from 'react';
import img1 from '../imgs/our-story/hanan.jpg'
import '../css/about.css'

const AboutFounder = () => {
  return (
    <section className="about-section section-padding" id='about'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-12">
            <img
              src={img1}
              className="about-image ms-lg-auto bg-light shadow-lg img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-5 col-md-7 col-12">
            <div className="custom-text-block">
              <h2 className="mb-0">Abdul Hanan Nawaz</h2>
              <p className="text-muted mb-lg-4 mb-md-4">Founder</p>
              <p>
               Abdul Hanan Nawaz, A Software Engineer, having 2 years of industry experience, started this initative
               as a Student and as an Advanced Web Project to help students.
              </p>
              <p>Contact Abdul Hanan Nawaz on Social Sites.</p>
              <ul className="social mt-4">
                <li className="social-icons-item">
                  <a href="#" className="social-icon-link fa fa-twitter"></a>
                </li>
                <li className="social-icons-item">
                  <a href="#" className="social-icon-link fa fa-facebook"></a>
                </li>
                <li className="social-icons-item">
                  <a href="#" className="social-icon-link fa fa-instagram"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;

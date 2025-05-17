import React from 'react';
import '../css/our-story.css'
import img1 from '../imgs/our-story/team.jpg'

const OurStorySection = () => {
  return (
    <section className="section-padding section-bg" id="our-story">
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <img src={img1} className="custom-text-box-image img-fluid" height="100px" alt="" />
          </div>

          <div className="col-lg-6 col-12">
            <div className="custom-text-box">
              <h2 className="mb-2">Our Story</h2>
              <h5 className="mb-3">Kind Heart Charity, Non-Profit Organization</h5>
              <p className="mb-0">
                We Started this Project as our University Project and Aimed to Launch Kind Heart Charity. Thank you.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="custom-text-box mb-lg-0">
                  <h5 className="mb-3">Our Mission</h5>
                  <p>Helping Poor students in their education.</p>
                  <ul className="custom-list mt-2">
                    <li className="custom-list-item d-flex">
                      <i className="fa fa-check custom-text-box-icon me-2"></i>
                      Education
                    </li>
                    <li className="custom-list-item d-flex">
                      <i className="fa fa-check custom-text-box-icon me-2"></i>
                      Uniform etc.
                    </li>
                  </ul>
                </div>
              </div>

             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStorySection;

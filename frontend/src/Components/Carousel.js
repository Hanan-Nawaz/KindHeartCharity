import React from 'react'
import '../css/carousel.css'
import img1 from '../imgs/carousel/medium-shot-people-collecting-donations.jpg'
import img2 from '../imgs/carousel/volunteer-helping-with-donation-box.jpg'
import img3 from '../imgs/carousel//volunteer-selecting-organizing-clothes-donations-charity.jpg'

const Carousel = () => {
  return (
    <section className="carousel-section carousel-section-full-height" id='top'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-12 p-0">
            <div id="carousel-slide" className="carousel carousel-fade slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={img1}
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1>be a Kind Heart</h1>
                    <p>Please tell your friends about our website</p>
                  </div>
                </div>

                <div className="carousel-item active">
                  <img
                    src={img2}
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1>Non-profit</h1>
                    <p>You can support us to grow more</p>
                  </div>
                </div>

                <div className="carousel-item active">
                  <img
                    src={img3}
                    className="carousel-image img-fluid"
                    alt="..."
                  />
                  <div className="carousel-caption d-flex flex-column justify-content-end">
                    <h1>Humanity</h1>
                    <p>Support Other and Allah will Support You.</p>
                  </div>
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carousel-slide" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carousel-slide" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

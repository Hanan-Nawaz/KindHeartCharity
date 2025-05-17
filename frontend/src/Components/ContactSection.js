import React from 'react';
import img1 from '../imgs/our-story/hanan.jpg'
import '../css/contact.css'

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
            <div className="contact-info-wrap">
              <h2>Get in touch</h2>
              <div className="contact-image-wrap d-flex flex-wrap">
                <img
                  src={img1}
                  className="img-fluid avatar-image"
                  alt=""
                />
                <div className="d-flex flex-column justify-content-center ms-3">
                  <p className="mb-0">Abdul Hanan Nawaz</p>
                  <p className="mb-0">
                    <strong>CEO</strong>
                  </p>
                </div>
              </div>
              <div className="contact-info">
                <h5 className="mb-3">Contact Information</h5>
                <p className="d-flex mb-2">
                  <i className="fa fa-map-marker me-2"></i>
                  NUML, H9/4 Islamabad, Pakistan
                </p>
                <p className="d-flex mb-2">
                  <i className="fa fa-phone me-2"></i>
                  <a href="tel:305-240-9671">+923447818962</a>
                </p>
                <p className="d-flex">
                  <i className="fa fa-envelope me-2"></i>
                  <a href="mailto:info@yourgmail.com">admin@kindheartcharity.org</a>
                </p>
                <a href="#" className="custom-btn btn mt-3">
                  Get Direction
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-12 mx-auto">
            <form
              className="custom-form contact-form"
              action="#"
              method="post"
              role="form"
              onSubmit={handleSubmit}
            >
              <h2 className='text-white'>Contact form</h2>
              <p className="mb-4">
                Or, you can just send an email: <a href="#">hanannawaz0@gmail.com</a>
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="form-control"
                    placeholder="Jack"
                    required
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="form-control"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                pattern="[^ @]*@[^ @]*"
                className="form-control"
                placeholder="Jackdoe@gmail.com"
                required
              />
              <textarea
                name="message"
                rows="5"
                className="form-control"
                id="message"
                placeholder="What can we help you?"
              ></textarea>
              <button type="submit" className="form-control">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

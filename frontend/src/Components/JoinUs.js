import React, { useState } from 'react';
import '../css/join-us.css'
import img from '../imgs/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg'

const JoinUsSection = () => {
  const [formData, setFormData] = useState({
    cnic: '',
    password: '',
    name: '',   
    type: '',
    status: 'active'
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowSuccessAlert(true);
        setShowErrorAlert(false);
        setErrorMessage('');

        setFormData({
          name: '',
          password: '',
          cnic: '',
          type: ''
        });

        setTimeout(() => {
          setShowSuccessAlert(false);
        }, 5000);
      } else {
        setShowErrorAlert(true);
        setShowSuccessAlert(false);

        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Error occurred:', error);

      setShowErrorAlert(true);
      setShowSuccessAlert(false);
      setErrorMessage('Network or server error occurred. Please try again.');
    }
  };

  return (
    <section className="volunteer-section section-padding mt-5" id="join-us">
      <div className="container">
      {showSuccessAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Signup successful! You have joined us as.
          <button type="button" className="btn-close" onClick={() => setShowSuccessAlert(false)}></button>
        </div>
      )}

      {showErrorAlert && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          Error: {errorMessage}
          <button type="button" className="btn-close" onClick={() => setShowErrorAlert(false)}></button>
        </div>
      )}

        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="text-white mb-4">Join US</h2>
            <form className="custom-form volunteer-form mb-5 mb-lg-0" onSubmit={handleSubmit}>
              <h3 className="mb-4">Become a family member today</h3>
              <div className="row">
                <div className="col-lg-6 col-12">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name here.."
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password here.."
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <input
                    type="number"
                    name="cnic"
                    id="cnic"
                    className="form-control"
                    placeholder="Enter your cnic here.."
                    required
                    value={formData.cnic}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-lg-6 col-12">
                <select
                    name="type"
                    id="type"
                    className="form-control"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    >
                    <option value="">Select Type</option>
                    <option value="donor">Donor</option>
                    <option value="volunteer">Volunteer</option>
                    </select>
                </div>
              </div>
             
              <button type="submit" className="form-control">
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-12">
            <img
              src={img}
              className="volunteer-image img-fluid"
              alt=""
            />
            <div className="custom-block-body text-center">
              <h4 className="text-white mt-lg-3 mb-lg-3">About Joining Us</h4>
              <p className="text-white">
                You can Join us as Volunteer or Donor. As a Volunteer, You will have to add
                Benificiaries and As a Donor, You have to donate. A Person is not both Donor and Volunteer 
                at the same time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cnic: '',
    password: '',
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
      const response = await fetch('https://kindheartcharity.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem('type', data.type);
        localStorage.setItem('cnic', data.cnic);
        localStorage.setItem('token', data.token);

        console.log(data);

        setShowSuccessAlert(true);
        setShowErrorAlert(false);
        setErrorMessage('');


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

  useEffect(() => {
    if (showSuccessAlert) {
      window.location.href = '/main/dashboard';
    }
  }, [showSuccessAlert, navigate]);

  return (
    <section className="vh-100 mt-5">
      {showSuccessAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Login successful!
          <button type="button" className="btn-close" onClick={() => setShowSuccessAlert(false)}></button>
        </div>
      )}

      {showErrorAlert && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          Error: {errorMessage}
          <button type="button" className="btn-close" onClick={() => setShowErrorAlert(false)}></button>
        </div>
      )}

      <div className="container-fluid h-custom mt-5">
        <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form onSubmit={handleSubmit}>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <h1>Sign in</h1>
              </div>
            <div className="form-outline mb-4">
              <input
                type="number"
                name="cnic"
                className="form-control form-control-lg"
                placeholder="Enter a valid cnic"
                value={formData.cnic}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-outline mb-3">
              <input
                type="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
              <button
                type="submit"
                className="custom-btn"
                style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
              >
                Login
              </button>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't have an account? <a href="http://localhost:3001#join-us" className="link-danger">SignUp</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Login;

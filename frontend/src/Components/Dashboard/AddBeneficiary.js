import React, { useState } from 'react';
import axios from 'axios';

const AddBeneficiary = () => {
  const volunteerCnic = localStorage.getItem('cnic');


  const [formData, setFormData] = useState({
    volunteer_cnic: volunteerCnic,
    name: '',
    cnic: '',
    needs: '',
    amount_needed: 0,
    donor_cnic: '0000',
    status: 'pending',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('https://kindheartcharity.onrender.com/beneficiary/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if(response.ok){
            setSuccess('Beneficiary added successfully!');
            setError(null);
            setFormData({
              name: '',
              cnic: '',
              needs: '',
              amount_needed: 0,
            });
            console.log('API Response:', response.data);
          }
          else{
            setError('Failed to add beneficiary. Please try again.');
      setSuccess(null);
          }
    
    } catch (error) {
      setError('Failed to add beneficiary. Please try again.');
      setSuccess(null);
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="col-md-13">
        <div className="card">
          <div className="card-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success" role="alert">
                {success}
              </div>
            )}
            <div className="row">
              <div className="col">
                <center>
                  <label style={{ color: 'blue', fontSize: '20px', userSelect: 'none' }}>
                    Add Beneficiary
                  </label>
                </center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <label>Name</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label>CNIC</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="cnic"
                      value={formData.cnic}
                      onChange={handleChange}
                      placeholder="Enter CNIC"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label>Needs</label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="needs"
                      value={formData.needs}
                      onChange={handleChange}
                      placeholder="Enter Needs"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label>Amount Needed</label>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      name="amount_needed"
                      value={formData.amount_needed}
                      onChange={handleChange}
                      placeholder="Enter Amount Needed"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-8 mx-auto">
                  <center>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block btn-lg">
                        Add Beneficiary
                      </button>
                    </div>
                  </center>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBeneficiary;

import React, { useState, useEffect } from 'react';

const ViewBenificaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cnic =  localStorage.getItem('cnic');

        const response = await fetch(`${import.meta.env.VITE_API_URL}/beneficiary/view/${cnic}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        console.log(data);
        setBeneficiaries(data.beneficiaries); // Assuming data.beneficiaries is an array
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  const handleUpdate = (id) => {
    const editPageURL = `http://localhost:3001/main/edit/${id}`; 

    window.location.href = editPageURL;
  };

  return (
    <div className="container">
<div className="row">
              <div className="col">
                <center>
                  <label style={{ color: 'blue', fontSize: '20px', userSelect: 'none' }}>
                    View Your Added Benificaries
                  </label>
                </center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-responsive">
          <thead className="thead-primary">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Volunteer CNIC</th>
              <th scope="col">CNIC</th>
              <th scope="col">Needs</th>
              <th scope="col">Donor CNIC</th>
              <th scope="col">Amount Needed</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
          {beneficiaries.map((beneficiary, index) => (
      <tr key={beneficiary._id}>
        <td>{beneficiary.name}</td>
        <td>{beneficiary.volunteer_cnic}</td>
        <td>{beneficiary.cnic}</td>
        <td>{beneficiary.needs}</td>
        <td>{beneficiary.donor_cnic}</td>
        <td><span className='text-warning'>RS </span> {beneficiary.amount_needed} </td>
        <td>{beneficiary.status == "pending" ? <p className='text-danger'>Pending</p> : <p className='text-success'>Donated</p>}</td>
        {beneficiary.status == "pending" ? 
        <td><button className='btn btn-warning'onClick={() => handleUpdate(beneficiary._id)}> Update</button></td>
    : ''}
      </tr>
    ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewBenificaries;

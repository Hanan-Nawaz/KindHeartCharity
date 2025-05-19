import React, { useState, useEffect } from 'react';



const NeedsTable = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_base = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api_base}/beneficiary/pending`);
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
  
  const handleDonate = async (amountNeeded) => {

    try {
      const response = await fetch(`http://localhost:3000/payment/donate/${amountNeeded}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const { sessionId } = await response.json();
        console.log(sessionId)
        redirectToCheckout(sessionId);
      } else {
        console.error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };
  

  const redirectToCheckout = (sessionId) => {
    const stripeCheckoutUrl = `${sessionId}`;
    window.open(stripeCheckoutUrl, '_blank');
  };
    



  return (
    <div className="container">
<div className="row">
              <div className="col">
                <center>
                  <label style={{ color: 'blue', fontSize: '20px', userSelect: 'none' }}>
                    View Beneficiaries
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
              <th scope="col">Amount Needed</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {beneficiaries.map((beneficiary, index) => (
      <tr key={beneficiary._id}>
        <td>{beneficiary.name}</td>
        <td>{beneficiary.volunteer_cnic}</td>
        <td>{beneficiary.cnic}</td>
        <td>{beneficiary.needs}</td>
        <td><span className='text-warning'>RS </span> {beneficiary.amount_needed} </td>
        <td>{beneficiary.status == "pending" ? <p className='text-danger'>Pending</p> : <p className='text-success'>Paid</p>}</td>
        <td><button className='btn btn-success'onClick={() => handleDonate(beneficiary.amount_needed, beneficiary._id)}> Donate</button></td>
      </tr>
    ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default NeedsTable;

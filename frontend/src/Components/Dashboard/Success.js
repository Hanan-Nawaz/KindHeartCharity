import React, { useEffect } from 'react';
import '../../css/success.css'

const Success = () => {

    useEffect(() => {
        // Retrieve beneficiaryId and donorCNIC from local storage
        const beneficiaryId = localStorage.getItem('_id');
        const donorCNIC = localStorage.getItem('cnic');
    
        // API endpoint URL
        const apiUrl = `http://localhost:3000/beneficiary/donated/${beneficiaryId}`;
    
        // Update donor_cnic and status via API call
        const updateDonationStatus = async () => {
          try {
            const response = await fetch(apiUrl, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ donor_cnic: donorCNIC, status: 'Donated' }),
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
    
            const data = await response.json();
            console.log('Beneficiary updated:', data);
          } catch (error) {
            console.error('There was a problem updating the beneficiary:', error.message);
            // Handle error if needed
          }
        };
    
        if (beneficiaryId && donorCNIC) {
          updateDonationStatus();
        }
      }, []);

  return (
    <div className="card">
      <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto' }}>
        <i id='checkmark' className="checkmark">✓</i>
      </div>
      <h1 className='title'>Success</h1>
      <p className='textbody'>We received your donation;<br/> Thanks for the Donation!</p>
    </div>
  );
};

export default Success;

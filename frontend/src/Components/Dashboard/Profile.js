import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState({
    cnic: '',
    name: '',
    password: '',
    status: '',
    type: '',
  });

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
        const cnic = localStorage.getItem('cnic');

      try {
        const response = await fetch(`http://localhost:3000/user/profile/${cnic}`);
        const userData = await response.json();
        setUserData(userData.user);
        console.log(userData)

      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = async () => {
    const cnic = localStorage.getItem('cnic');

    try {
      const response = await fetch(`http://localhost:3000/user/profile/${cnic}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setEditable(false);
      } else {
        console.error('Error saving profile data');
      }
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container-fluid">
      <div className="col-md-13">
        <div className="card">
          <div className="card-body">
           
            <div className="row">
              <div className="col">
                <center>
                  <label style={{ color: 'blue', fontSize: '20px', userSelect: 'none' }}>
                    User Profile
                  </label>
                </center>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <hr />
              </div>
            </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="cnic"
                      value={userData.cnic}
                      readOnly={!editable}
                      onChange={handleInputChange}
                      placeholder="Enter CNIC"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={userData.password}
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={userData.name}
                      readOnly={!editable}
                      onChange={handleInputChange}
                      placeholder="Enter Name"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="type"
                      value={userData.type}
                      disabled={!editable}
                      onChange={handleInputChange}
                    >
                      <option value="donor">Donor</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>

              
              </div>
          </div>
        </div>
    </div>

  );
};

export default Profile;

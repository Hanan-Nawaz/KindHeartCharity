import React, { useState, useEffect } from 'react';

const UserComponent = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://kindheartcharity.onrender.com/user/get`);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const userData = await response.json();
      console.log(userData);
      setUser(userData.users)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
      setLoading(false);
    }
  };



  useEffect(() => {
    
    fetchUser();
  }, []);

  const updateUserStatus = async (newStatus, storedCnic) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/user/update/${storedCnic}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }), 
      });

      if (response.ok) {
        const updatedUserData = await response.json();
        console.log('User updated:', updatedUserData);
        fetchUser();
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="container">
    <div className="row">
                  <div className="col">
                    <center>
                      <label style={{ color: 'blue', fontSize: '20px', userSelect: 'none' }}>
                        View All Users
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
      ) : user ? (
          <table className="table table-responsive">
          <thead className="thead-primary">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">CNIC</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col" colSpan='2'>Action</th>
            </tr>
          </thead>
          <tbody>
          {user.map((users, index) => (
      <tr key={users._id}>
        <td>{users.name}</td>
        <td>{users.cnic}</td>
        <td>{users.type}</td>
        <td>{users.status == "inactive" ? <p className='text-danger'>InActive</p> : <p className='text-success'>Active</p>}</td>
        <td><button className='btn btn-success' style={{marginRight : '20px'}} onClick={() => updateUserStatus('active', users.cnic, users._id)}> Active</button>
        <button className='btn btn-danger'onClick={() => updateUserStatus('inactive', users.cnic, users._id)}> InActive</button></td>
      </tr>
))}
</tbody>
</table>

      ) : (
        <p>Users not found</p>
      )}
    </div>
  );
};

export default UserComponent;

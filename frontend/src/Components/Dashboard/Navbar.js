import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../imgs/logo.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to logout?');

        if(confirmLogout){
            try {
                // Remove 'type', 'cnic', and 'token' from localStorage
                localStorage.removeItem('type');
                localStorage.removeItem('cnic');
                localStorage.removeItem('token');
                
                // Simulate an asynchronous task (e.g., API call, delay) if needed
                // await someAsyncTask();
    
                // Redirect to the login page
                navigate('/login');
            } catch (error) {
                console.error('Error occurred during logout:', error);
            }
        }
       
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light shadow-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a className="navbar-brand" href="#">
                    <img
                        src={img}
                        height="55"
                        alt=""
                        loading="lazy"
                    />
                </a>

                <ul className="navbar-nav ms-auto d-flex flex-row">
                    <li className="nav-item">
                        <a className="btn btn-primary" style={{ marginRight: '20px' }} href="/main/profile">
                            Profile
                        </a>
                    </li>
                    <li className='ml-2 nav-item'>
                        <button className="btn btn-danger" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

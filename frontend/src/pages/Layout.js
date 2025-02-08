import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();  // To determine the active tab

    // Define the active tab based on the current location
    const getTabClass = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    };

    return (
        <div className="container">
            {/* Bootstrap Navigation with spacing */}
            <nav className="nav nav-tabs justify-content-between">
                <button 
                    className={getTabClass('/home')} 
                    onClick={() => navigate('/home')}
                >
                    Home
                </button>
                <button 
                    className={getTabClass('/therapy')} 
                    onClick={() => navigate('/therapy')}
                >
                    Therapy
                </button>
                <button 
                    className={getTabClass('/webcam')} 
                    onClick={() => navigate('/webcam')}
                >
                    Webcam
                </button>
            </nav>

            {/* Outlet renders the component of the current route */}
            <Outlet />
        </div>
    );
};

export default Layout;

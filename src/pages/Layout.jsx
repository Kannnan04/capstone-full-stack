/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Layout = () => {
    const location = useLocation();
    const noNavbarRoutes = ['/login', '/', '/forgotPassword'];

    return (
        <>
            {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
            <Outlet />
        </>
    );
};

export default Layout;

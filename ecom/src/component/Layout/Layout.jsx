import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom';
import Footers from './Footers';

const Layout = () => {
  return (
    <>
        <Header />
        <div>
            <Outlet />
        </div>
        <Footers/>
    </>
  );
};

export default Layout;
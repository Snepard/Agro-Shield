import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'; 

const MainLayout = () => {
  return (
    <>
      {/* This layout includes the Navbar */}
      <Navbar />

      {/* The Outlet component renders the specific page component for the current route */}
      <main className="pt-24">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
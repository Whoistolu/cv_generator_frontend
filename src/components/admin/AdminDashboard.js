import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const AdminDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow pt-16">
        <h1>Welcome to the Admin Dashboard</h1>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
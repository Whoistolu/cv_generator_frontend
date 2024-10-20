import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import FormInput from '../shared/FormInput';
import Sidebar from './SideBar';

const AdminDashboard = () => {
 
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow pt-16 text-center">
        <h1>Welcome to the Admin Dashboard</h1>
      </div>
      <Sidebar />
      <FormInput />
      <Footer />
    </div>
  );
};

export default AdminDashboard;
import React from 'react';
import TemplateList from './TemplateList';

const AdminDashboard = () => {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Admin Dashboard</h1>
      <TemplateList />
    </div>
  );
};

export default AdminDashboard;
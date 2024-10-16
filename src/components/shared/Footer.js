import React from 'react';

const Footer = () => {
 
  return (
    <footer className="w-full h-16 py-4 text-white bg-blue-600">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="text-sm">
          © {new Date().getFullYear()} CV GENERATOR. All rights reserved.
        </div>

        <div className="flex space-x-4">
          <div href="#" className="hover:text-red-900">Privacy Policy</div>
          <div href="#" className="hover:text-red-900">Terms of Service</div>
          <div href="#" className="hover:text-red-900">Contact Us</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer ;
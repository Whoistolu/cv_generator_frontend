import React from 'react';

const Footer = () => {
 
  return (
    <footer className="w-full py-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="text-sm">
          © {new Date().getFullYear()} CV Generator. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer ;
import React from 'react';

const Sidebar = () => {
  return (
   <div className='left-0 w-64 h-full bg-blue-100 shadow-md top-16'>
        <ul className='p-4 mt-6 space-y-4'>
            <li className="p-2 rounded hover:bg-red-700">
                <a href="#">Manage Templates</a>
            </li>
            <li className="p-2 rounded hover:bg-red-700">
                <a href="#">View Users</a>
            </li>
            <li className="p-2 rounded hover:bg-red-700">
                <a href="#">Settings</a>
            </li>
        </ul>
   </div>
  );
};

export default Sidebar;
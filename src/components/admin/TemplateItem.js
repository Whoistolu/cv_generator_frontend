import React from 'react';

const TemplateItem  = ({name}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="flex justify-between mt-4">
        <button className="text-blue-500 hover:underline">Edit</button>
        <button className="text-red-500 hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default TemplateItem;
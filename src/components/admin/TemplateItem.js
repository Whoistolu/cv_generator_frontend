import React from 'react';

const TemplateItem = ({ name, description, imageUrl }) => {
  return (
    <div className="p-4 border cv-template-item">
      <img src={imageUrl} alt={name} className="w-full mb-2 template-image" />
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TemplateItem;
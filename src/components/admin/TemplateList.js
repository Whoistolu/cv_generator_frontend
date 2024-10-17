import React from 'react';
import TemplateItem from './TemplateItem';

const TemplateList = () => {

  const templates = [
    { id: 1, name: 'Simple CV', description: 'A clean and simple CV template.' },
    { id: 2, name: 'Professional CV', description: 'A professional-looking CV template.', imageUrl: '/images/professional_cv.png' }
  ]

  return (
    <div className="template-list">
      {templates.map((template) => (
        <TemplateItem
          key={template.id}
          name={template.name}
          description={template.description}
          imageUrl={template.imageUrl}
        />
      ))}
    </div>
  );
};

export default TemplateList;
import React from 'react';

const Section = ({ title, children, icon }) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6 relative font-montserrat">
        <div className="flex items-center gap-3 uppercase">{icon}<span>{title}</span></div>
        <div className="rounded absolute -bottom-2.5 left-0 w-10 h-1.5 bg-black"></div>
      </h2>{<span></span>}
      {children}
    </div>
  );
};

export default Section;
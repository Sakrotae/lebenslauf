import React from 'react';

const SkillBar = ({ skill, progress, level }) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-montserrat">{skill}</span><span className="font-montserrat">{level}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded">
        <div 
          className="h-full bg-black rounded relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute -right-2 -top-1 w-4 h-4 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
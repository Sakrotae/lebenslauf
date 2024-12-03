import React from 'react';

const Event = ({ education }) => {
  return (
    <div className="mb-4">
      <div className='flex justify-between'>
        <h3 className="font-medium">{education.title}</h3>
        <h3 className='font-medium' style={{ minWidth: "fit-content" }}>{education.start} - {education.end}</h3>
      </div>
      <h3 className='font-light'>{education.institution}</h3>
      {education.infoTexts && education.infoTexts.length > 0 && (
        <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
          {education.infoTexts.map((text, index) => (
            <li key={index} className='text-gray-800'>{text}</li>
          ))}
        </ul>
      )}
      {education.freeText && (
        <p className="text-gray-800">{education.freeText}</p>
      )}
    </div>
  );
};

export default Event;
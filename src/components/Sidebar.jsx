import React from 'react';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { FaBirthdayCake } from "react-icons/fa";
import profilbild from '../img/profilbild.jpg';

const Sidebar = ({lang = 'en'}) => {
  return (
    <div className="bg-white p-8 pt-12 flex flex-col items-end">
        <img 
        src={profilbild}
        alt="Portrait of Fabian Bösel" 
        className="w-48 rounded-lg mb-8"
      />
      
      <h1 className="text-7xl font-black mb-1 font-montserrat uppercase">Fabian</h1>
      <h1 className="text-7xl font-black mb-4 font-montserrat uppercase">Bösel</h1>
      <h2 className="text-xl font-montserrat">{lang === 'en' ? "Software Developer" : "Software-Entwickler"}</h2>
      <h2 className="text-xl mb-14 font-montserrat">{lang === 'en' ? "Computer Science Student" : "Informatik Masterand"}</h2>
      <div className="space-y-4 text-gray-600 flex flex-col items-end">
        <div className="rounded left-0 w-10 h-1.5 mb-2 bg-black"></div>
        <div className="flex items-center gap-3">
          <span>+49 15159045670</span>
          <MdPhone className="text-2xl" />
        </div>
        <div className="flex items-center gap-3">
          <span>fabian.boesel@web.de</span>
          <MdEmail className="text-2xl" />
        </div>
        
        <div className="flex items-center gap-3">
          <span>86679 Ellgau, Deutschland</span>
          <MdLocationOn className="text-2xl" />
        </div>
        <div className="flex items-center gap-3">
          <span>19.07.1996</span>
          <FaBirthdayCake className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
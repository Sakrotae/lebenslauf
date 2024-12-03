import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="max-w-6xl w-full bg-white flex flex-col md:flex-row">
        <div className="md:w-1/3  content-start">
          <Sidebar />
        </div>
        <div className="md:w-2/3">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
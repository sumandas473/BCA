import React from 'react';

const Preloader = () => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
    <div className="w-16 h-16 border-4 border-t-4 border-b-purple-700 border-solid rounded-full animate-spin"></div>
  </div>
);

export default Preloader;
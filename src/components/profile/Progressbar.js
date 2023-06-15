import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded overflow-hidden">
      <div className="h-2 bg-[#fd2d34]" style={{ width: 16 }}></div>
    </div>
  );
};

// Example usage:
const App = () => {
  const progress = 12; // Set your desired progress value here

  return (
    <div className="container mx-auto mt-5 px-3 py-1">
      <h1 className="text-center font-medium text-gray-400 text-base">Points:<span className='text-center font-bold text-[#fd2d34] text-base'>{progress}</span>/100</h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;

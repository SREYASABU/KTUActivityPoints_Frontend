import React from 'react';

const ProgressBar = ({ progress }) => {
  const progressBarStyles = {
    width: `${progress}%`,
    backgroundColor: '#fd2d34',
  };

  return (
    <div className="w-full bg-gray-200 rounded overflow-hidden">
      <div className="h-2" style={progressBarStyles}></div>
    </div>
  );
};

const Progressbar = () => {
  const progress = 45;

  return (
    <div className="container mx-auto mt-5 px-3 py-1">
      <h1 className="text-center font-medium text-gray-700 text-sm">
        Points: {progress}/100
      </h1>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Progressbar;

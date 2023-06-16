
import React from 'react';
import pointstable from '../../assets/pointstable.pdf'

const PdfButton = () => {
  const handleButtonClick = () => {
    // Function to open the PDF in a new tab/window
    window.open(pointstable);
  };

  return (
    
    <button
      className="flex items-center bg-[#fd2d34] text-white font-bold rounded-full px-4 py-2 hover:bg-[#e9161d]"
      onClick={handleButtonClick}
    >
      Open PDF
    </button>
  );
};

export default PdfButton;
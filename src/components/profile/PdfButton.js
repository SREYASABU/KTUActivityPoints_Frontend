import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PdfButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <button
        className="flex items-center bg-[#fd2d34] text-white font-bold rounded-full px-4 py-2"
        onClick={openModal}
      >
        Open PDF
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white w-4/5 h-4/5 rounded-lg p-6">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
            {/* Render the PDF viewer here */}
            <Document
              file="your-pdf-document.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={index + 1} pageNumber={index + 1} />
              ))}
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfButton;

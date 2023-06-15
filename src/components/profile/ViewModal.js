import React, { useState } from 'react';

const ViewModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModal = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleViewClick = () => {
    const data = {
    //   date: '2023-06-15',
      date: new Date().toLocaleDateString('en-GB'),
      activityType: 'Workshop',
      file: 'path/to/file.pdf',
      description: 'I attended the workshop on AI/ML conducted in NITC as part of Tathva 2022. Kindly find the certificate attached.',
    };

    openModal(data);
  };

  const Modal = ({ isOpen, closeModal, data }) => {
    const [isAccepted, setIsAccepted] = useState(false);
    const { date, activityType, file, description } = data;

    const acceptModal = () => {
      setIsAccepted(true);
      // Perform any necessary actions here
    };

    const rejectModal = () => {
      setIsAccepted(false);
      // Perform any necessary actions here
    };

    return (
      <>
        {isOpen && (
          <div className="font-primary fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white rounded-lg pt-10 px-14 pb-4 w-[50rem] relative">
              <button
                className="absolute top-4 right-4 bg-slate-100 p-1 rounded-md text-gray-700 hover:text-gray-700"
                onClick={closeModal}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className='flex flex-col gap-4'>
                <p>Date: <span className='bg-slate-100 ml-2 px-2 py-1 rounded-md'>{date}</span></p>
                <p>Activity Type:</p>
                <div className='bg-slate-100 p-4 rounded-md -mt-2'> {activityType}</div>
                <p>Description:</p>
                <div className='bg-slate-100 p-4 rounded-md -mt-2'>{description}</div>
                <div className='mt-1 mb-4'>
                  File:
                  {file && (
                    <a href={file} target="_blank" rel="noopener noreferrer" className='ml-2 bg-slate-100 rounded-md px-2 py-1 text-sm shadow-sm shadow-slate-300 hover:bg-slate-200'>
                      View File
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                {!isAccepted ? (
                  <>
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
                      onClick={acceptModal}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      onClick={rejectModal}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="">
      <button
        className="bg-[#fd2d34] text-white text-sm px-4 py-0.5 rounded-2xl"
        onClick={handleViewClick}
      >
        View
      </button>

      <Modal isOpen={isModalOpen} closeModal={closeModal} data={modalData} />
    </div>
  );
};

export default ViewModal;

import React, {useState} from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activityType, setActivityType] = useState('');
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleActivityTypeChange = (event) => {
    setActivityType(event.target.value);
  };

  const handleFileChange = (event) => {
    const fileList = Array.from(event.target.files);
    setFiles(fileList);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submit logic here
    console.log({
      activityType,
      files,
      description
    });
    handleCloseModal();
  };

  return (
    <div>
             <button onClick={handleOpenModal} className="flex items-center bg-[#fd2d34] text-white font-bold rounded-full px-4 py-2 hover:bg-[#e9161d]">
                     Upload files
             </button>
      {/* <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenModal}
      >
        Open Modal
      </button> */}

      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            &#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <form onSubmit={handleSubmit}>
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <div className="mt-2">
                        <label htmlFor="activityType" className="block text-sm font-medium text-gray-700">
                          Activity Type
                        </label>
                        <select
                          id="activityType"
                          name="activityType"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={activityType}
                          onChange={handleActivityTypeChange}
                        >
                          <option value="">Select an option</option>
                          <option value="workshop">Workshop</option>
                          <option value="internship">Internship</option>
                          <option value="sports">Arts</option>
                          <option value="sports">Hackathon</option>
                          <option value="sports">Webinar</option>
                          <option value="sports">Sports</option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <label htmlFor="files" className="block text-sm font-medium text-gray-700">
                          Upload Files
                        </label>
                        <input
                          type="file"
                          id="files"
                          name="files"
                          className="mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          onChange={handleFileChange}
                          multiple
                        />
                      </div>

                      <div className="mt-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                          Comments
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows="3"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          value={description}
                          onChange={handleDescriptionChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
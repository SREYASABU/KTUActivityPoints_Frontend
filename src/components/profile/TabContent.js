import React, { useState } from 'react';
import ViewModal from './ViewModal';
import Filter from './Filter';
import AddStudents from './AddStudents';

const TabContent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const data1 = [
    ['John Doe', 'CSA', '2024', 'Workshop', '.doc'],
    ['Jane Smith', 'ECB', '2024', 'Internship', '.doc'],
    ['Mark Johnson', 'CSA', '2024', 'Sports', '.doc'],
    ['Sarah Williams', 'CSA', '2024', 'Workshop', '.doc'],
    ['David Brown', 'ECB', '2024', 'Arts', '.doc'],
    ['David Brown', 'ECB', '2024', 'Arts', '.doc'],
    ['David Brown', 'ECB', '2024', 'Arts', '.doc'],
    ['David Brown', 'ECB', '2024', 'Arts', '.doc'],
  ];

const [classList, setclassList] = useState([
['1', 'Abhishek Kurien', '75', '1'],
['2', 'Abin Mathew', '50', '3'],
['3', 'Achyuth Mohan', '40', '0'],
['4', 'Adam Oommen Jacob', '70', '1'],
['5', 'Aditya Anil', '60', '0'],
['6', 'Adithya Kartha', '55', '2'],
]);

  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return (
          <div className='font-primary mx-16 bg-gray-50 mb-10 pt-4 px-4'>
            <table className="w-full">
              <thead className='border-b-2'>
                <tr className="bg-gray-50 text-sm">
                  <th className="p-3">Full Name</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Year</th>
                  <th className="p-3">Activity</th>
                  <th className="p-3">Document</th>
                  <th className='p-3'>View</th>
                </tr>
              </thead>
              <tbody>
                {data1.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-9 py-4">
                        {cell}
                      </td>
                    ))}
                    <td className="p-2">
                      {/* <button className="bg-[#fd2d34] text-white text-sm px-4 py-0.5 rounded-2xl">
                        View
                      </button> */}
                      <ViewModal/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'tab2':
        return (
          <div className='font-primary mx-16 bg-gray-50 mb-10 pt-4 px-4'>
            <div className='flex flex-row justify-between'>
              
              <h1 className='font-semibold bg-[#f8d8d9] px-5 py-2 w-52 mb-2 rounded-2xl '>CS6A - Batch of 2024</h1>
              {/* <p className='font-semibold bg-[#f8d8d9] px-2 py-2 w-24 mb-2 rounded-2xl justify-center flex'>Filter</p> */}
              {/* <h1 className='font-semibold flex w-52'>CS6A - Batch of 2024</h1> */}
              
            </div>
            <table className="w-full">
              <thead className='border-b-2'>
                <tr className="bg-gray-50 text-sm">
                  <th className="p-3">Roll no.</th>
                  <th className="p-3">Full Name</th>
                  <th className="p-3">Activity points</th>
                  <th className="p-3">Pending</th>
                </tr>
              </thead>
              <tbody>
                {classList.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-36 py-4">
                        {cell}
                      </td>
                    ))}
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'tab3':
        return (
          <div className='font-primary mx-16 bg-gray-50 p-10'>
            <div className='flex flex-row justify-between ml-4 -mt-4'>
              <h1 className='font-semibold bg-[#f8d8d9] px-5 py-2 w-52 mb-2 rounded-2xl '>CS6A - Batch of 2024</h1>
            </div>
            <Filter/>
          </div>
        );
      case 'tab4':
        return (
          <div className='font-primary mx-16 bg-gray-50 p-10'>
            <div className='flex flex-row justify-between ml-4 -mt-4'>
              <h1 className='font-semibold bg-[#f8d8d9] px-5 py-2 w-52 mb-2 rounded-2xl '>CS6A - Batch of 2024</h1>
            </div>
            <AddStudents classList = {classList} setclassList = {setclassList}/>
          </div>
        );
        // case 'tab5':
        // return (
        //   <div className='mx-16 bg-gray-50 p-10'>
        //     <h2 className="font-primary text-2xl font-bold mb-4">Tab 5</h2>
        //     <p>Content for Tab 4</p>
        //   </div>
        // );
        // case 'tab6':
        // return (
        //   <div className='mx-16 bg-gray-50 p-10'>
        //     <h2 className="font-primary text-2xl font-bold mb-4">Tab 6</h2>
        //     <p>Content for Tab 4</p>
        //   </div>
        // );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex mt-6 mx-16 bg-[#fd2d34] pt-4 px-4 rounded-t-3xl">
        <button
          className={`w-96 mr-1 py-3 rounded-tr-xl rounded-tl-xl font-semibold ${
            activeTab === 'tab1' ? 'bg-gray-50' : 'bg-[#f0bbbd] text-white'
          }`}
          onClick={() => handleTabClick('tab1')}
        >
          Pending Requests
        </button>
        <button
          className={`w-96 mr-1 py-3 rounded-tr-xl rounded-tl-xl font-semibold ${
            activeTab === 'tab2' ? 'bg-gray-50' : 'bg-[#f0bbbd] text-white'
          }`}
          onClick={() => handleTabClick('tab2')}
        >
          Class List
        </button>
        <button
          className={`w-96 mr-1 py-3 rounded-tr-xl rounded-tl-xl font-semibold ${
            activeTab === 'tab3' ? 'bg-gray-50' : 'bg-[#f0bbbd] text-white'
          }`}
          onClick={() => handleTabClick('tab3')}
        >
          Filter
        </button>
        <button
          className={`w-96 mr-1 py-3 rounded-tr-xl rounded-tl-xl font-semibold ${
            activeTab === 'tab4' ? 'bg-gray-50' : 'bg-[#f0bbbd] text-white'
          }`}
          onClick={() => handleTabClick('tab4')}
        >
          Add students
        </button>
        {/* <button
          className={`w-56 mr-1 py-3 rounded-tr-xl rounded-tl-xl font-semibold ${
            activeTab === 'tab5' ? 'bg-gray-50' : 'bg-[#f0bbbd] text-white'
          }`}
          onClick={() => handleTabClick('tab5')}
        >
          User management
        </button>
        <button
          className={`w-56 mr-1 py-3 rounded-tr-xl rounded-tl-xl font-semibold ${
            activeTab === 'tab6' ? 'bg-gray-50' : 'bg-[#f0bbbd] text-white'
          }`}
          onClick={() => handleTabClick('tab6')}
        >
          Something
        </button> */}
      </div>

      <div className="">{renderContent()}</div>
    </div>
  );
};

export default TabContent;

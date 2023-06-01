import React, { useState } from 'react';

const TabContent = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const data = [
    ['John Doe', 'CSA', '2024', 'Workshop', '.doc'],
    ['Jane Smith', 'ECB', '2024', 'Internship', '.doc'],
    ['Mark Johnson', 'CSA', '2024', 'Sports', '.doc'],
    ['Sarah Williams', 'CSA', '2024', 'Workshop', '.doc'],
    ['David Brown', 'ECB', '2024', 'Arts', '.doc'],
    ['David Brown', 'ECB', '2024', 'Arts', '.doc'],
    ['David Brown', 'ECB', '2024', 'Arts', '.doc'],
    ['David Brown', 'ECB', '2024', 'Arts', '.doc'],
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'pending':
        return (
          <div className='mx-16 bg-gray-50 mb-10'>
            <table className="w-full">
              <thead className=''>
                <tr className="bg-gray-200">
                  <th className="p-3">Name</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">Year</th>
                  <th className="p-3">Activity</th>
                  <th className="p-3">Document</th>
                  <th className='p-3'>View</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-200'}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-9">
                        {cell}
                      </td>
                    ))}
                    <td className="p-2">
                      <button className="bg-[#fd2d34] text-white px-4 py-1.5 rounded">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'tab2':
        return (
          <div className='mx-16 bg-gray-100 p-10'>
            <h2 className="text-2xl font-bold mb-4">Class List</h2>
            <p>Content for Tab 2</p>
          </div>
        );
      case 'tab3':
        return (
          <div className='mx-16 bg-gray-100 p-10'>
            <h2 className="text-2xl font-bold mb-4">Tab 3</h2>
            <p>Content for Tab 3</p>
          </div>
        );
      case 'tab4':
        return (
          <div className='mx-16 bg-gray-100 p-10'>
            <h2 className="text-2xl font-bold mb-4">Tab 4</h2>
            <p>Content for Tab 4</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-evenly mt-8 mx-16">
        <button
          className={`w-96 py-2 border-2 ${
            activeTab === 'pending' ? 'bg-[#fd2d34] text-white' : 'bg-gray-100'
          }`}
          onClick={() => handleTabClick('pending')}
        >
          Pending Requests
        </button>
        <button
          className={`w-96 py-2 border-2 ${
            activeTab === 'tab2' ? 'bg-[#fd2d34] text-white' : 'bg-gray-100'
          }`}
          onClick={() => handleTabClick('tab2')}
        >
          Class List
        </button>
        <button
          className={`w-96 py-2 border-2 ${
            activeTab === 'tab3' ? 'bg-[#fd2d34] text-white' : 'bg-gray-100'
          }`}
          onClick={() => handleTabClick('tab3')}
        >
          Tab 3
        </button>
        <button
          className={`w-96 py-2 border-2 ${
            activeTab === 'tab4' ? 'bg-[#fd2d34] text-white' : 'bg-gray-100'
          }`}
          onClick={() => handleTabClick('tab4')}
        >
          Tab 4
        </button>
      </div>

      <div className="">{renderContent()}</div>
    </div>
  );
};

export default TabContent;

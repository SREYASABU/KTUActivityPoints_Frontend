import React from "react";
import Navbar from "../layout/Navbar";
import teacher from '../../assets/teacher.jfif'
import { FaPencilAlt } from 'react-icons/fa';

const data=[["1","12-07-2022","workshop","pdf","approved"],
["2","12-07-2022","workshop","pdf","pending"],
["3","12-07-2022","workshop","pdf","rejected"],
["6","12-07-2022","workshop","pdf","approved"],
["4","12-07-2022","workshop","pdf","approved"],
["5","12-07-2022","workshop","pdf","rejected"]]



const Profile = () => {
    return (
        <div>
            <Navbar/>
            <div className="relative flex flex-row items-center bg-gray-50 p-8 mx-16 mt-4 rounded-3xl shadow-md">
                <img
                    src={teacher}
                    alt="Profile"
                    className="w-36 h-36 rounded-full mr-8 ml-10">
                </img>
                {/* <FaPencilAlt
                    className="absolute text-gray-500 top-0 right-0 -mr-1 -mt-1 w-4 h-4 cursor-pointer"
                    aria-label="Change Profile"
                /> */}
                <div>
                    <h1 className="text-2xl font-bold">Leesa Babe</h1>
                    {/* <p className="text-gray-700 text-xl">student</p> */}
                    <div className="grid grid-cols-2 gap-x-14 gap-2 mt-4">
                        <p className="text-gray-700">Registration ID: MDL19CS321</p>
                        <p className="text-gray-700">Class: CS6A</p>
                        <p className="text-gray-700">Email: lvcdabomb@gmail.com</p>
                        <p className="text-gray-700">DOB: 22/05/2002</p>
                    
                    </div>
                </div>
                {/* <button className="flex ml-96 mt-24 bg-slate-200 px-10 py-2 rounded-lg shadow-sm">Edit</button> */}
                <div className="absolute top-4 right-6 p-2">Activity points earned:<span className="font-bold text-3xl text-[#fd2d34]">12</span></div>
                <div className="absolute bottom-4 right-6 p-2">
                    <button className="flex items-center bg-[#fd2d34] text-white font-bold rounded-full px-4 py-2">
                    <FaPencilAlt className="mr-2 h-4" />
                        Edit
                    </button>
                
                </div>
            </div>
            <div className="bg-gray-50 p-1 shadow-md my-8 mx-2 ">
                
                <table className="w-full min-w-max table-auto text-left">         
                <thead className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <tr className="bg-gray-200">
                  <th className="p-3">Sr.no</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">ActivityType</th>
                  <th className="p-3">Document</th>
                  <th className="p-3">Status</th>

                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-gray-50  p-4' : 'bg-gray-200  '}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className={`${cell==="approved"?'bg-green-200 p-4':cell==="rejected"?'bg-red-200 p-4':cell=="pending"?'bg-blue-200 p-4':''}`}>
                        {cell}
                      </td>
                    ))}

                  </tr>
                ))}
              </tbody>
              </table>
            </div>
        </div>
    )
}

export default Profile
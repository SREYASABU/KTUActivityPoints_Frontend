import React from "react";
import Navbar from "../layout/Navbar";
import dp from '../../assets/dp.jpg'
import { FaPencilAlt } from 'react-icons/fa';
import Modal from './Modal'
import Progressbar from './Progressbar'
import PdfButton from "./PdfButton";


const data=[["1","12-07-2022","workshop","pdf","approved"],
["2","12-07-2022","workshop","pdf","pending"],
["3","12-07-2022","workshop","pdf","rejected"],
["4","12-07-2022","workshop","pdf","approved"],
["5","12-07-2022","workshop","pdf","approved"],
["6","12-07-2022","workshop","pdf","rejected"],
["7","12-07-2022","workshop","pdf","pending"],
]



const Profile = () => {
    return (
        <div>
            <Navbar/>
            <div className="font-primary relative flex flex-row items-center bg-gray-50 p-8 mx-16 mt-4 rounded-3xl shadow-md">
                <img
                    src={dp}
                    alt="Profile"
                    className="w-36 h-36 rounded-full mr-8 ml-10 border-zinc-300 border-solid border-4">
                </img>
                {/* <FaPencilAlt
                    className="absolute text-gray-500 top-0 right-0 -mr-1 -mt-1 w-4 h-4 cursor-pointer"
                    aria-label="Change Profile"
                /> */}
                <div>
                  <div className="flex items-center"><h1 className="text-[1.8rem] font-bold">Cynthia John</h1>
                    <div className="text-gray-500 text-sm p-2">
                  <button className="flex items-center bg-[#fd2d34] text-white font-bold rounded-full hover:bg-[#e9161d] px-2 py-1">
                    <FaPencilAlt className="mr-0.5 h-4" />
                    </button></div></div>
                    
                    {/* <p className="text-gray-700 text-xl">student</p> */}
                    <div className="grid grid-cols-2 gap-x-14 gap-2 mt-4">
                        <p className="text-gray-500 text-sm">Registration ID: <span className="font-medium text-gray-700 text-base">MDL19CS321</span></p>
                        <p className="text-gray-500 text-sm">Class: <span className="font-medium text-gray-700 text-base">CS6A</span></p>
                        <p className="text-gray-500 text-sm">Email: <span className="font-medium text-gray-700 text-base">cynthia@gmail.com</span></p>
                        <p className="text-gray-500 text-sm">DOB: <span className="font-medium text-gray-700 text-base">22/05/2002</span></p>
                    
                    </div>
                </div>
                {/* <button className="flex ml-96 mt-24 bg-slate-200 px-10 py-2 rounded-lg shadow-sm">Edit</button> */}
                <div className="text-gray-500 text-sm absolute top-4 right-6 p-2"><Progressbar/></div>
                <div className="absolute bottom-4 right-6 p-2">
                    <Modal/>    
                </div>
                <div className="absolute bottom-6 right-40">
                    <PdfButton/>
                </div>

            </div>
            <div className="font-primary mx-16 bg-gray-50 mb-10 pt-4 px-4 mt-5 rounded-3xl">
                <table className="w-full">         
                <thead className="border-b-2">
                <tr className="bg-gray-50 text-sm">
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
        <td key={cellIndex} className="px-24 py-4">
          {cell === 'approved' && (
            <span className="bg-green-200 px-7 py-0.5 rounded-full text-green-700 text-sm">
              {cell}
            </span>
          )}
          {cell === 'rejected' && (
            <span className="bg-red-200 px-7 py-0.5  rounded-full text-red-600 text-sm">
              {cell}
            </span>
          )}
          {cell === 'pending' && (
            <span className="bg-yellow-100 px-7 py-0.5  rounded-full text-yellow-600 text-sm">
              {cell}
            </span>
          )}
          {!(cell === 'approved' || cell === 'rejected' || cell === 'pending') && (
            <span>{cell}</span>
          )}
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
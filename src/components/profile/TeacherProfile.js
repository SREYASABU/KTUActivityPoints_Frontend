import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import TabContent from "./TabContent";
import teacher from '../../assets/teacher.jfif'
import { FaPencilAlt } from 'react-icons/fa';
import PdfButton from "./PdfButton";

const Profile = () => {
    return (
        <div>
            <Navbar/>
            <div className="font-primary relative flex flex-row items-center bg-gray-50 p-8 mx-16 mt-4 rounded-3xl shadow-md">
                <img
                    src={teacher}
                    alt="Profile"
                    className="w-36 h-36 rounded-full mr-8 ml-10 border-zinc-300 border-solid border-4">
                </img>
                {/* <FaPencilAlt
                    className="absolute text-gray-500 top-0 right-0 -mr-1 -mt-1 w-4 h-4 cursor-pointer"
                    aria-label="Change Profile"
                /> */}
                <div>
                    <h1 className="text-[1.8rem] font-bold">Prof. Sandra Sam</h1>
                    <p className="text-gray-700 text-xl font-medium -mt-1">Associate Professor</p>
                    <div className="grid grid-cols-2 gap-x-14 gap-2 mt-5">
                        <p className="text-gray-500 text-sm">Department: <span className="font-medium text-gray-700 text-base">Computer Science</span></p>
                        <p className="text-gray-500 text-sm">KTU ID: <span className="font-medium text-gray-700 text-base">KTU1F36</span></p>
                        {/* <p className="text-gray-700">Contact: 9072721931</p> */}
                        <p className="text-gray-500 text-sm">Appointed Class: <span className="font-medium text-gray-700 text-base">CS6A</span></p>
                        <p className="text-gray-500 text-sm">Qualifications: <span className="font-medium text-gray-700 text-base">M.Sc., B.Ed.</span></p>
                        {/* <p className="text-gray-700">Email: sreyababes@gmail.com</p> */}
                    </div>
                </div>
                {/* <button className="flex ml-96 mt-24 bg-slate-200 px-10 py-2 rounded-lg shadow-sm">Edit</button> */}
                <div className="absolute bottom-4 right-6 p-2">
                    <button className="flex items-center bg-[#fd2d34] text-white font-bold rounded-full px-4 py-2 hover:bg-[#e9161d]">
                    <FaPencilAlt className="mr-2 h-4" />
                        Edit
                    </button>
                    
                </div>
                <div className="absolute bottom-6 right-32">
                    <PdfButton/>
                </div>
            </div>
            <TabContent/>
        </div>
    )
}

export default Profile
import React from "react";
import Navbar from "../layout/Navbar";
import TabContent from "./TabContent";
import teacher from '../../assets/teacher.jfif'
import { FaPencilAlt } from 'react-icons/fa';

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
                    <h1 className="text-2xl font-bold">Prof. Sreya Babu</h1>
                    <p className="text-gray-700 text-xl">Associate Professor</p>
                    <div className="grid grid-cols-2 gap-x-14 gap-2 mt-4">
                        <p className="text-gray-700">Appointed Class: CS6A, EC6B</p>
                        <p className="text-gray-700">Registration ID: MDL19CS321</p>
                        <p className="text-gray-700">Qualifications: M.Sc., B.Ed.</p>
                        <p className="text-gray-700">Department: Computer Science</p>
                    </div>
                </div>
                {/* <button className="flex ml-96 mt-24 bg-slate-200 px-10 py-2 rounded-lg shadow-sm">Edit</button> */}
                <div className="absolute bottom-4 right-6 p-2">
                    <button className="flex items-center bg-[#fd2d34] text-white font-bold rounded-full px-4 py-2">
                    <FaPencilAlt className="mr-2 h-4" />
                        Edit
                    </button>
                </div>
            </div>
            <TabContent/>
        </div>
    )
}

export default Profile
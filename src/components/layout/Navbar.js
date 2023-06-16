import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Provider';
import logo from '../../assets/logo.png';
import axios from 'axios';
import { pageRoutes } from '../../utils/routes';
import Landing from './Landing';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;



const Navbar = () =>{
    const [currentUser, setCurrentUser] = useState();
    const {setUser} = useContext(UserContext)

    const navigate = useNavigate();

    const client = axios.create({
      baseURL: "http://43.205.228.231:8000"
    });

    function submitLogout(e) {
      e.preventDefault();
      localStorage.removeItem("user_id")
      localStorage.removeItem("role")
      localStorage.removeItem("isAuth")
      navigate("/")
    }
        
    return(
        <div>
            <nav className="bg-gray-50 p-1 shadow-md ">
            <div className="flex items-center justify-between">
                <img className="h-[4.4rem] ml-12" src={logo} alt="Logo" />
                
                <form onSubmit={e => submitLogout(e)}>
                    <button type="submit" className='mr-6 bg-[#fd2d34] hover:bg-red-600 text-white font-bold py-2 px-4 rounded'>Log out</button>
                </form>
            </div>
            </nav>
            
    </div>
    )
}

export default Navbar
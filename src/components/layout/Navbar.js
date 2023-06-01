import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;



const Navbar = () =>{
    const [currentUser, setCurrentUser] = useState();

    const client = axios.create({
        baseURL: "http://127.0.0.1:8000"
      });
      useEffect(() => {
          client.get("/api/user")
          .then(function(res) {
            setCurrentUser(true);
          })
          .catch(function(error) {
            setCurrentUser(false);
          });
        }, []);
      
      function submitLogout(e) {
          e.preventDefault();
          client.post(
            "/api/logout",
            {withCredentials: true}
          ).then(function(res) {
            setCurrentUser(false);
          });
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
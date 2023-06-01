import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Profile from '../profile/TeacherProfile';
import Spinner from '../layout/Spinner';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const Login = () => {

  const [currentUser, setCurrentUser] = useState();
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    client.get("/api/user")
    .then(function(res) {
      setCurrentUser(true);
    })
    .catch(function(error) {
      setCurrentUser(false);
    });
  }, []);

  function submitLogin(e) {
    e.preventDefault();
    setIsLoading(true)
    client.post(
      "/api/login",
      {
        role: role,
        email: email,
        password: password
      }
    ).then(function(res) {
      setCurrentUser(true);
    });
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/api/logout",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
  }

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

  
  if (currentUser){
    return(
      <div>
  {isLoading ? <Spinner/> : <></>}

        <Navbar/>
        <Profile/>
      </div>
    )
  }


  return(
    <div className="flex justify-center items-center h-screen">
       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4">
         <div className="mb-4">
           <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="role"
          >
            Select Role:
          </label>
          <div className="relative">
            <select
              id="role"
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={role}
              onChange={handleRoleChange}
              required
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12l-6-6h12l-6 6zm0 2l6-6H4l6 6z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email:
          </label>
          <input
            id="username"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            id="password"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={submitLogin}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;
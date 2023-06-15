import React from 'react';
import { useState, useEffect, useContext } from 'react';
import Navbar from '../layout/Navbar';
import Profile from '../profile/TeacherProfile';
import Spinner from '../layout/Spinner';
import axios from 'axios';
import image1 from '../../assets/image1.jpg';
import logo from '../../assets/logo.png';
import { UserContext } from '../../Provider';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

// const client = axios.create({
//   baseURL: "http://127.0.0.1:8000"
// });
const client = axios.create({
  baseURL: "http://43.205.228.231:8000"
});
// http://43.205.228.231:8000/api/login

const Login = () => {
  const {user, login,logout, setUser} = useContext(UserContext)
  const [currentUser, setCurrentUser] = useState();
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   client.get("/api/user")
  //   .then(function(res) {
  //     setCurrentUser(true);
  //   })
  //   .catch(function(error) {
  //     setCurrentUser(false);
  //   });
  // }, []);

  function submitLogin(e) {
    e.preventDefault();
    //setIsLoading(true)
    // console.log("role", role)
    // console.log("email", email)
    // console.log("pass", password)
    if(role == 'teacher'){
      client.post(
        "/api/faculty-login",
        {
          email: email,
          password: password
        }
      ).then(function(res) {
        console.log("Response",res.data['user_id'])
        setCurrentUser(true);
        //login(res.data['user_id'], 'teacher', true)
        setUser((user)=>({user_id:res.data['user_id'], role :'teacher', isAuth : true}))
        console.log("user after returning from Provider inside Login.js",user)
        //(res.data['user_id'])
      }).catch(function(err) {
        console.log("Error",err)
        
      });
    }else
    if (role=='student'){
        client.post(
          "/api/student-login",
          {
            email: email,
            password: password
          }
        ).then(function(res) {
          login(res.data['user_id'], 'student')
          console.log("Response",res)
          setCurrentUser(true);
        });
      
    }


    
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
    <div className="flex justify-center items-center h-screen bg-slate-50 font-primary">
      <div className='bg-white shadow-md rounded-[2.5rem] flex'>
      
        <form className=" px-14 pt-16 relative text-sm -mr-10">
          <a href='https://www.mec.ac.in/' target='blank'><img src={logo} alt='logo' className='w-[6rem] mb-6'></img></a>
          <div className='mb-10 text-3xl font-bold'>
            <h2>Welcome Back!</h2>
          </div>
          <div className="mb-6">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Select Role:
            </label> */}
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
          <div className="mb-6">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email:
            </label> */}
            <input
              id="username"
              className="appearance-none border rounded w-[16rem] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label> */}
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
              className="bg-[#fd2d34] hover:bg-red-500 text-white font-medium mt-4 py-[0.6rem] px-[6.6rem] rounded-[0.8rem] focus:outline-none focus:shadow-outline text-sm"
              type="submit"
              onClick={submitLogin}
            >
              Sign In
            </button>
          </div>
          <div className='text-xs mt-1 underline text-gray-300 hover:text-gray-400 flex justify-center items-center'>
            <a href='/'>Forgot password</a>
          </div>
      </form>
      <img src={image1} alt='bg' className='rounded-[4rem] p-8 bg-cover'></img>
      </div>
    </div>
  );
};

export default Login;
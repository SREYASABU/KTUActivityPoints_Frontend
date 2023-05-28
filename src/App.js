import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing';
import Profile from './components/profile/Profile';
import ProtectedRoute from './utils/ProtectedRoute';
import { pageRoutes } from './utils/routes';
import './App.css';


function App() {

  return (
    <div className="">
      <Router>
                <Navbar/>
                <div>
                    <Routes>
                        <Route path={pageRoutes.landing} element={<Landing/>}/>

                        {/* <Route path={pageRoutes.register} element={<Register/>}/> */}
                        <Route path={pageRoutes.profile} element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                        {/* <Route path={pageRoutes.certificates} element={<ProtectedRoute><Certificates/></ProtectedRoute>}/> */}
                        {/* <Route path="*" element={authenticated ? <Navigate to={pageRoutes.profile}/> : <Login/>}/> */}
                    </Routes>
                </div>
            </Router>
    </div>
  );
}

export default App;

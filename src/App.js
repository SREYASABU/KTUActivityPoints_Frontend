import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import TeacherProfile from './components/profile/TeacherProfile';
import StudentProfile from './components/profile/StudentProfile';
import ProtectedRoute from './utils/ProtectedRoute';
import { pageRoutes } from './utils/routes';
import './App.css'; 
import {UserProvider} from './Provider';


function App() {

  return (
    <div className="">
      <Router>
      <UserProvider >
                <div>
                    <Routes>
                        
                        <Route path={pageRoutes.landing} element={<Landing/>}/>

                    {/* <Route path={pageRoutes.register} element={<Register/>}/> */}
<Route path={pageRoutes.teacherprofile} element={<TeacherProfile/>}/>
<Route path={pageRoutes.studentprofile} element={<StudentProfile/>}/>
{/* <Route path={pageRoutes.certificates} element={<ProtectedRoute><Certificates/></ProtectedRoute>}/> */}
{/* <Route path="*" element={authenticated ? <Navigate to={pageRoutes.profile}/> : <Login/>}/> */}
                        
                        
                    </Routes>
                </div>
                </UserProvider>
            </Router>
    </div>
  );
}

export default App;

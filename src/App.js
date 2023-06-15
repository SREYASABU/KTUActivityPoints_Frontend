import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import TeacherProfile from './components/profile/TeacherProfile';
import StudentProfile from './components/profile/StudentProfile';
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
                        <Route path={pageRoutes.teacherprofile} element={<TeacherProfile/>}/>
                        <Route path={pageRoutes.studentprofile} element={<StudentProfile/>}/>
                    </Routes>
                </div>
          </UserProvider>
      </Router>
    </div>
  );
}

export default App;

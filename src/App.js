import React from "react";
import {  Routes, Route } from "react-router-dom";
import Launch from "./pages/lanchPage.js";
import Page from "./pages/page.js";
import Admin from "./pages/adminPage";
import Login from "./pages/loginPage";
import Entertainment from './pages/entertainmentPage'
import Sample from './pages/sample'

const App = () => {
    localStorage.setItem("tenantid","1e4c8e40-a7f8-46de-9ac7-cedde81aa046")
  return (
    <div>
    <Routes> 
     
      <Route path="*" element={<Launch/>} />
      <Route path="/SBE" element={<Launch/>} />
      <Route path="/SBE/launch" element={<Launch/>} />
      <Route path="/SBE/page" element={<Page/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/SBE/login" element={<Login/>} />
      <Route path="/SBE/enter" element={<Entertainment/>} />
      <Route path="/SBE/sample" element={<Sample/>} />




  
    </Routes>
  </div>
  );

};

export default App;



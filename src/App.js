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
      <Route path="/SPE" element={<Launch/>} />
      <Route path="/SPE/launch" element={<Launch/>} />
      <Route path="/SPE/page" element={<Page/>} />
      <Route path="/SPE/admin" element={<Admin/>} />
      <Route path="/SPE/login" element={<Login/>} />
      <Route path="/SPE/enter" element={<Entertainment/>} />
      <Route path="/SPE/sample" element={<Sample/>} />




  
    </Routes>
  </div>
  );

};

export default App;



import React from "react";
import {  Routes, Route } from "react-router-dom";
import Launch from "../pages/lanchPage.js";
import Page from "../pages/page.js";
import Admin from "../pages/adminPage";
import Login from "../pages/loginPage";
import Entertainment from '../pages/entertainmentPage';



const RouteApp = () => {
  return (
    <div>
    <Routes> 
      <Route path="*" element={<Launch/>} />
      <Route path="/launch" element={<Launch/>} />
      <Route path="/page" element={<Page/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/enter" element={<Entertainment/>} />
      
    </Routes>
  </div>
  );

};

export default RouteApp;



import React from "react";
import {  Routes, Route } from "react-router-dom";
import Launch from "../pages/lanchPage.js";
import Page from "../pages/page.js";
import Admin from "../pages/adminPage";
import Login from "../pages/loginPage";
import Entertainment from '../pages/entertainmentPage';
<<<<<<< Updated upstream



const RouteApp = () => {
=======
import Headertest from '../component/headertest';
import Test from '../component/testhead';
import Test1 from "../pages/entertaintest";
import Test3 from "../pages/entertaintestbody";
import Test4 from "../component/drawer";
const App = () => {
    localStorage.setItem("tenantid","1e4c8e40-a7f8-46de-9ac7-cedde81aa046")
>>>>>>> Stashed changes
  return (
    <div>
    <Routes> 
<<<<<<< Updated upstream
      <Route path="*" element={<Launch/>} />
      <Route path="/launch" element={<Launch/>} />
      <Route path="/page" element={<Page/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/enter" element={<Entertainment/>} />
      
=======
       <Route path="/SPE/test2" element={<Test3/>}/>
       <Route path="/SPE/test4" element={<Test4/>}/>
      <Route path="/SPE/test" element={<Headertest/>}/>
      <Route path="*" element={<Login/>} />
      <Route path="/SPE" element={<Launch/>} />
      <Route path="/SPE/launch" element={<Launch/>} />
      <Route path="/SPE/page" element={<Page/>} />
      <Route path="/SPE/admin" element={<Admin/>} />
      <Route path="/SPE/login" element={<Login/>} />
      <Route path="/SPE/enter" element={<Test1/>} />
      <Route path="/SPE/head" element={<Test/>}/>
      <Route path="/SPE/test1" element={<Test1/>}/>
>>>>>>> Stashed changes
    </Routes>
  </div>
  );

};

export default RouteApp;



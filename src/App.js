import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { HashRouter, Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import Home from "./Home";
import { useNavigate, Outlet } from "react-router-dom";
import Login from "./Login";
import Contact from "./Contact";
import AboutPage from "./AboutPage";
import HireMePage from "./HireMePage";
function App() {
  return (
    <div className="App">





<BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Layout />} />
          <Route path="login" element={<Login />}/>
          
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='hireme' element={<HireMePage />} />
         
          <Route path="home" element={<Home />} />
          
           <Route path="/login" element={<Login />}>
            <Route path="home" element={<Home />} />
           

            </Route>
            </Routes>

            </BrowserRouter>

     
    </div>
  );
}

export default App;

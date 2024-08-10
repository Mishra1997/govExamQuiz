import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { HashRouter, Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./LandingPage";
import Home from "./Home";
import { useNavigate, Outlet } from "react-router-dom";
import Login from "./Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="login" element={<Login />}/>
          <Route path="home" element={<Home />} />
          {/* <Route path="/login" element={<Login />}>
            <Route path="home" element={<Home />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

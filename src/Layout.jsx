
import './App.css';
import React,{useState} from "react";
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import Login from "./Login";
import "./Layout.css"
import { useNavigate,Outlet } from 'react-router-dom';

function Layout() {

  const [isLogin, setLogedin] = useState(false);

const navigate=useNavigate()


const signot=()=>{
  setLogedin(false)

}

  return (
    <div>
      <div className='mainBox'>
      
      <Header />
     
  



 
      </div>
   
    </div>
  );
}

export default Layout;

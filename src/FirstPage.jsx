
import './App.css';
import React,{useState} from "react";
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import Login from "./Login";
import { useNavigate } from 'react-router-dom';

function FirstPage() {

  const [isLogin, setLogedin] = useState(false);

const navigate=useNavigate()


const signot=()=>{
  setLogedin(false)

}

  return (
    <div>
      <div className='mainBox'>
      <Header setLogedin={setLogedin}  isLogin={isLogin} signot={signot}/>

{
  isLogin ?  <Home />:navigate('/')
}

 
      </div>
    
    </div>
  );
}

export default FirstPage;

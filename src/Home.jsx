import React,{useState} from "react";
import Header from './Header'
import Footer from './Footer'
import Login from "./Login";
import LandingPage from "./LandingPage";
const Home =()=>{
  const [isLogin, setLogedin] = useState(false);

  return( <>
<Header setLogedin={setLogedin} />

{
  isLogin?<LandingPage/>:null
}

    </>
  )

}
export default Home
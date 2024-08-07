import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import LandingPage from './LandingPage';
function App() {
  return (
    <div className="App">
    
<HashRouter >
<Routes>
  <Route path='/' element={<FirstPage />} />
  <Route path='/home' element={<LandingPage />} />
  
</Routes>

</HashRouter>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
function App() {
  return (
    <div className="App">
    
<HashRouter >
<Routes>
  <Route path='/' element={<FirstPage />} />
  
</Routes>

</HashRouter>

    </div>
  );
}

export default App;

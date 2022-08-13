import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Mint from './components/pages/Mint';
import Toybox from './components/pages/Toybox';
import Merchandise from './components/pages/Merchandise';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
    <div className='main'>
          <Router>
            <div className='nav-container'>
              <Navbar />
            </div>
            <div className='routes'>
              <Suspense fallback={<div />}>
              <Routes >
                <Route path="/home" element={<Home />}></Route>
                <Route path="/mint" element={<Mint />}></Route>
                <Route path="/toybox" element={<Toybox />}></Route>
                <Route path="/merchandise" element={<Merchandise />}></Route>
                <Route path="/" element={<Navigate to="/home" />} />
              </Routes>
              </Suspense>
            </div>
          </Router>
    </div>
    
    </>
  );
}

export default App;

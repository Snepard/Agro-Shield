import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import DiagnosisPage from './pages/Diagnosis';
import Market from './pages/Market'
import Community from './pages/Community'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <br/><br/><br/><br/>
        <Routes>
          <Route path="/" element={<HomePage />} />
                    <Route path="/community" element={<Community />} />

          <Route path="/diagnosis" element={<DiagnosisPage />} />
                    <Route path="/market" element={<Market />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
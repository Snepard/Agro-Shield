import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import DiagnosisPage from './pages/Diagnosis';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <br/><br/><br/><br/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diagnosis" element={<DiagnosisPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
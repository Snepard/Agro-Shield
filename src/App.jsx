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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diagnosis" elemen={<DiagnosisPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Import your new layout component
import MainLayout from './layouts/MainLayout';

// 2. Navbar is no longer imported here, as the layout handles it
import HomePage from './pages/Homepage';
import DiagnosisPage from './pages/Diagnosis';
import Market from './pages/Market';
import Community from './pages/Community';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 3. Routes that SHOULD have a navbar are nested inside MainLayout. */}
        {/* MainLayout will render the Navbar and then the specific page. */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/diagnosis" element={<DiagnosisPage />} />
          <Route path="/market" element={<Market />} />
          {/* Add any other future routes that need a navbar here */}
        </Route>

        {/* 4. The route that SHOULD NOT have a navbar is a standalone route. */}
        {/* This will render only the Community component. */}
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
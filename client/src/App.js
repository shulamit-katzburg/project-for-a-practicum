// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import SelectCategoryPage from './pages/SelectCategoryPage';
import PromptFormPage from './pages/PromptFormPage';
import PromptResultPage from './pages/PromptResultPage';
import HistoryPage from './pages/HistoryPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* ברירת מחדל – לדף ההרשמה */}
        <Route path="/" element={<Navigate to="/register" />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/prompt" element={<PromptFormPage />} />
        <Route path="/result" element={<PromptResultPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;

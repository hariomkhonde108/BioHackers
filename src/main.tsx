import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import PregnancyCare from './pages/PregnancyCare';
import ChildHealth from './pages/ChildHealth';
import CommonIllnesses from './pages/CommonIllnesses';
import Nutrition from './pages/Nutrition';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pregnancy-care" element={<PregnancyCare />} />
          <Route path="/child-health" element={<ChildHealth />} />
          <Route path="/common-illnesses" element={<CommonIllnesses />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>
);

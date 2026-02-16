import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CV from './components/CV';
import BuilderPage from './components/BuilderPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CV />} />
      <Route path="*" element={<BuilderPage />} />
    </Routes>
  );
}
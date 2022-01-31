import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import ListExpeditions from './listExpeditions';
import TopPackage from './listTopPackage';
import NoPage from './noPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expeditions" element={<ListExpeditions />} />
        <Route path="/packages" element={<TopPackage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import ListExpeditions from '../pages/listExpeditions';
import TopPackage from '../pages/listTopPackage';
import DetailExpedition from '../pages/detailExpedition';
import DetailPackage from '../pages/detailPackage';
import NoPage from '../pages/noPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/expeditions' element={<ListExpeditions />} />
        <Route path='/packages' element={<TopPackage />} />
        <Route path='/packages/:key' element={<DetailPackage />} />
        <Route path='/expeditions/:key' element={<DetailExpedition />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}

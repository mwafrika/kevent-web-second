import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import ListExpeditions from '../pages/listExpeditions';
import TopPackage from '../pages/listTopPackage';
import DetailExpedition from '../pages/detailExpedition';
import DetailPackage from '../pages/detailPackage';
import NoPage from '../pages/noPage';
// Testing Admin homepage
import Signup from '../pages/signup';
import Login from '../pages/login';
import PackageForm from '../../dashboard/pages/createPackage';
import Packages from '../../dashboard/pages/packages';
import Package from '../../dashboard/pages/package';
import EditPackage from '../../dashboard/pages/editPackage';
import Dashboard from '../../dashboard/pages/home';
import AdminExpeditions from '../../dashboard/pages/expeditions';
import AdminBookExpedition from '../../dashboard/pages/bookExpeditions';
import AdminBookPackage from '../../dashboard/pages/bookPackage';
import Places from '../../dashboard/pages/places';
import Users from '../../dashboard/pages/users';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin/home' element={<Dashboard />} />
        <Route path='/admin/create/package' element={<PackageForm />} />
        <Route path='/admin/packages' element={<Packages />} />
        <Route path='/admin/expeditions' element={<AdminExpeditions />} />
        <Route
          path='/admin/book/expeditions'
          element={<AdminBookExpedition />}
        />
        <Route path='/admin/book/packages' element={<AdminBookPackage />} />
        <Route path='/admin/places' element={<Places />} />
        <Route path='/admin/users' element={<Users />} />

        <Route path='/admin/packages/:key' element={<Package />} />
        <Route path='/admin/edit/packages/:key' element={<EditPackage />} />
        <Route path='/expeditions' element={<ListExpeditions />} />
        <Route path='/packages' element={<TopPackage />} />
        <Route path='/packages/:key' element={<DetailPackage />} />
        <Route path='/expeditions/:key' element={<DetailExpedition />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}

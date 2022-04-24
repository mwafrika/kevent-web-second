import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Link,
  Route,
} from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import ListExpeditions from '../pages/listExpeditions';
import TopPackage from '../pages/listTopPackage';
import DetailExpedition from '../pages/detailExpedition';
import DetailPackage from '../pages/detailPackage';
import NoPage from '../pages/noPage';
// Testing Admin homepage
import { useSelector } from 'react-redux';
import Signup from '../pages/signup';
import Login from '../pages/login';
import PackageForm from '../../dashboard/pages/packages/createPackage';
import ExpeditionForm from '../../dashboard/pages/expeditions/createExpedition';
import DetailExpeditionAdmin from '../../dashboard/pages/expeditions/expedition';
import EditExpeditionAdmin from '../../dashboard/pages/expeditions/updateExpedition';
import Packages from '../../dashboard/pages/packages/packages';
import Package from '../../dashboard/pages/packages/package';
import EditPackage from '../../dashboard/pages/packages/editPackage';
import Dashboard from '../../dashboard/pages/home';
import AdminExpeditions from '../../dashboard/pages/expeditions/expeditions';
import Users from '../../dashboard/pages/users/users';
// book packages
import BookPackageSingle from '../../dashboard/pages/bookPackage/bookPackage';
import BookPackageUpdate from '../../dashboard/pages/bookPackage/updatePackage';
import AdminBookPackage from '../../dashboard/pages/bookPackage/bookPackages';
import BookPackage from '../../dashboard/pages/bookPackage/createBookPackage';
// book expeditions
import BookExpeditionSingle from '../../dashboard/pages/bookExpedition/bookExpedition';
import BookExpeditionUpdate from '../../dashboard/pages/bookExpedition/updateExpedition';
import AdminBookExpedition from '../../dashboard/pages/bookExpedition/bookExpeditions';
import BookExpedition from '../../dashboard/pages/bookExpedition/createBookExpedition';

// places
import PlaceForm from '../../dashboard/pages/places/createPlace';
import Place from '../../dashboard/pages/places/place';
import EditPlace from '../../dashboard/pages/places/editPlace';
import Places from '../../dashboard/pages/places/places';

export default function App() {
  const { isLoggedIn } = useSelector((state) => state.user);
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
        <Route path='/admin/book/packages' element={<AdminBookPackage />} />
        <Route path='/admin/users' element={<Users />} />

        <Route path='/admin/packages/:key' element={<Package />} />
        <Route path='/admin/edit/packages/:key' element={<EditPackage />} />
        <Route path='/expeditions' element={<ListExpeditions />} />
        <Route path='/packages' element={<TopPackage />} />
        <Route path='/packages/:key' element={<DetailPackage />} />
        <Route path='/expeditions/:key' element={<DetailExpedition />} />

        {/* expeditions */}
        <Route
          path='/admin/expeditions/:key'
          element={<DetailExpeditionAdmin />}
        />
        <Route path='/admin/create/expedition' element={<ExpeditionForm />} />
        <Route
          path='/admin/edit/expeditions/:key'
          element={<EditExpeditionAdmin />}
        />
        {/*  book packages */}
        <Route path='/admin/packages/:key/book' element={<BookPackage />} />
        <Route
          path='/admin/packages/book/:key'
          element={<BookPackageSingle />}
        />
        <Route
          path='/admin/packages/edit/book/:key'
          element={<BookPackageUpdate />}
        />

        {/*  book expeditions */}
        <Route
          path='/admin/expeditions/:key/book'
          element={<BookExpedition />}
        />
        <Route
          path='/admin/expeditions/book/:key'
          element={<BookExpeditionSingle />}
        />
        <Route
          path='/admin/expeditions/edit/book/:key'
          element={<BookExpeditionUpdate />}
        />
        <Route
          path='/admin/book/expeditions'
          element={<AdminBookExpedition />}
        />

        {/* admin places /admin/edit/places/6 */}
        <Route path='/admin/places' element={<Places />} />
        <Route path='/admin/places/:key' element={<Place />} />
        <Route path='/admin/edit/places/:key' element={<EditPlace />} />
        <Route path='/admin/create/place' element={<PlaceForm />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}

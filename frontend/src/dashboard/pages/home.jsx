import React from 'react';

import LeftNav from '../components/leftSidebar';
import Home from '../components/mainContent';
import RightNav from '../components/rightSideBar';

const home = () => {
  return (
    <main className='grid sm:grid-cols-[100px_minmax(0,_1fr)_auto] grid-flow-row h-screen xxxs:grid-cols-[100px_minmax(0,_1fr)]'>
      <LeftNav />
      <Home />
      <RightNav />
    </main>
  );
};

export default home;

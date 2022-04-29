import React from 'react';

import LeftNav from '../../components/leftSidebar';
import Expedition from '../../components/expeditions/expedition';
import RightNav from '../../components/rightSideBar';

const home = () => {
  return (
    <main className='grid sm:grid-cols-[100px_minmax(0,_1fr)_200px] grid-flow-row h-screen xxxs:grid-cols-[100px_minmax(0,_1fr)]'>
      <LeftNav />
      <Expedition />
      <RightNav />
    </main>
  );
};

export default home;

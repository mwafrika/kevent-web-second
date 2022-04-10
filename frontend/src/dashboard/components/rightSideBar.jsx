import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
const rightSideBar = () => {
  return (
    <div className='col-span-1 row-span-full flex mx-auto text-center py-12 flex-col gap-y-4 sm:flex xs:hidden xxs:hidden xxxs:hidden'>
      <span className='text-7xl text-slate-600'>
        <FontAwesomeIcon icon={faCircleUser} />
      </span>
      <p>Mwafrika Josue</p>
    </div>
  );
};

export default rightSideBar;

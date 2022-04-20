import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faUserFriends,
  faHome,
  faArrowRightFromBracket,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';
const LeftSidebar = () => {
  return (
    <div className=' bg-white shadow-lg col-span-1 row-span-full flex justify-between py-10 flex-col items-center'>
      <div className='flex flex-col gap-8 text-center'>
        <div className='col-span-1 row-span-full flex mx-auto text-center flex-col gap-y-4 xxxs:flex sm:hidden'>
          <span className='text-7xl text-slate-600'>
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
          <p>Mwafrika Josue</p>
        </div>
        <span className='text-4xl text-slate-600'>
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span className='text-4xl text-slate-600'>
          <FontAwesomeIcon icon={faUserFriends} />
        </span>
        <span className='text-4xl text-slate-600'>
          <FontAwesomeIcon icon={faCalendarCheck} />
        </span>
        <span className='text-4xl text-slate-600'>
          <FontAwesomeIcon icon={faCalendarCheck} />
        </span>
        <span className='text-4xl text-slate-600'>
          <FontAwesomeIcon icon={faCalendarCheck} />
        </span>
        <span className='text-4xl text-slate-600'>
          <FontAwesomeIcon icon={faUserFriends} />
        </span>
      </div>
      <div className=''>
        <span className='text-4xl text-slate-600'>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </span>
      </div>
    </div>
  );
};

export default LeftSidebar;

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { packackages } from '../../redux/actions/package';
import { Redirect } from 'react-router-dom';
import {
  faPaperPlane,
  faCircleUser,
  faUserFriends,
  faLocationDot,
  faBoxOpen,
  faCalendarCheck,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
  const { packages } = useSelector((state) => state.packages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(packackages());
  }, []);

  // redirect to login if not logged in

  return (
    <div className='row-span-full bg-gray-100'>
      <div className='flex flex-col w-11/12 mx-auto py-8'>
        <h1 className='mb-4 text-slate-500'>Dashboard</h1>
        <div className='w-full gap-y-8 gap-x-4 mb-12 grid sm:grid-cols-[repeat(auto-fill_,_minmax(19rem_,_1fr))] xxxs:grid-cols-[repeat(auto-fill_,_minmax(11rem_,_1fr))]'>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faBagShopping} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>29</p>
              <p className='text-slate-500'>Package(s)</p>
            </div>
          </div>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>
                {packages.length}
              </p>
              <p className='text-slate-500'>Expedition(s)</p>
            </div>
          </div>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faCalendarCheck} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>12</p>
              <p className='text-slate-500'>Booked Expedition(s)</p>
            </div>
          </div>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faBoxOpen} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>29</p>
              <p className='text-slate-500'>Booked package(s)</p>
            </div>
          </div>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>29</p>
              <p className='text-slate-500'>Place(s)</p>
            </div>
          </div>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faUserFriends} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>29</p>
              <p className='text-slate-500'>Users</p>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-between'>
          <div className='mb-4 text-slate-500'>Packet recents</div>
          <div>Plus</div>
        </div>
        <div className='w-full gap-y-8 gap-x-4 mb-12'>
          <div className='w-full gap-y-8 gap-x-4 grid grid-cols-[repeat(auto-fill_,_minmax(19rem_,_1fr))] xxxs:grid-cols-[repeat(auto-fill_,_minmax(11rem_,_1fr))]'>
            <div className='h-32 bg-white rounded-lg shadow-lg'>Card1</div>
            <div className='h-32 bg-white rounded-lg shadow-lg'>Card1</div>
            <div className='h-32 bg-white rounded-lg shadow-lg'>Card1</div>
            <div className='h-32 bg-white rounded-lg shadow-lg'>Card1</div>
            <div className='h-32 bg-white rounded-lg shadow-lg'>Card1</div>
            <div className='h-32 bg-white rounded-lg shadow-lg'>Card1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

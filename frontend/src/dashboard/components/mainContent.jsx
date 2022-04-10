import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPaperPlane,
  faCircleUser,
  faBoxOpen,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

const mainContent = () => {
  return (
    <div className='row-span-full bg-gray-100'>
      <div className='flex flex-col w-11/12 mx-auto py-8'>
        <h1 className='mb-4 text-slate-500'>Dashboard</h1>
        <div className='w-full gap-y-8 gap-x-4 mb-12 grid sm:grid-cols-[repeat(auto-fill_,_minmax(19rem_,_1fr))] xxxs:grid-cols-[repeat(auto-fill_,_minmax(11rem_,_1fr))]'>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faCircleUser} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>29</p>
              <p className='text-slate-500'>Utilisateur(s)</p>
            </div>
          </div>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faBoxOpen} />
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
              <p className='text-3xl font-bold text-slate-600'>12</p>
              <p className='text-slate-500'>Expedition(s)</p>
            </div>
          </div>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faBagShopping} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>29</p>
              <p className='text-slate-500'>Booking package</p>
            </div>
          </div>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faBagShopping} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>29</p>
              <p className='text-slate-500'>Booking package(s)</p>
            </div>
          </div>
          <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
            <span className='text-4xl text-slate-600'>
              <FontAwesomeIcon icon={faCircleUser} />
            </span>

            <div className='flex flex-col gap-y-2'>
              <p className='text-3xl font-bold text-slate-600'>29</p>
              <p className='text-slate-500'>Other</p>
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

export default mainContent;

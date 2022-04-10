import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const header = ({ title }) => {
  return (
    <>
      <div className='flex justify-between items-center my-4'>
        <h1 className='text-3xl'>{title}</h1>
        <label className='relative block'>
          <span className='sr-only'>Search</span>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2 text-gray-700'>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            class='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            placeholder='Search for anything...'
            type='text'
            name='search'
          />
        </label>
      </div>
      <div className='border my-5 bg-slate-600'></div>
    </>
  );
};

export default header;

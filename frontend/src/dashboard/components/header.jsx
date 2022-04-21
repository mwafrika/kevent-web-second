import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Header = ({ title }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className='flex justify-between items-center mt-14 mb-8'>
        <div className='flex text-slate-600 justify-between items-center gap-x-3'>
          <span
            className='text-xl bg-slate-100 w-8 text-center cursor-pointer rounded-md'
            onClick={goBack}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <h1 className='text-3xl'>{title}</h1>
        </div>
        <label className='relative block'>
          <span className='sr-only'>Search</span>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2 text-gray-700'>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            placeholder='Search for anything...'
            type='text'
            name='search'
          />
        </label>
      </div>
      <div className='border my-5 bg-slate-600 mb-8'></div>
    </>
  );
};

export default Header;

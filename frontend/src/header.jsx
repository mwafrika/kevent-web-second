import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const onClickMenu = () => {
    setMenu(!menu);
    console.log(menu, 'mwafrika');
  };

  return (
    <div className=' bg-gray-100 flex w-full h-16 md:h-16 items-center justify-between md:justify-around text-slate-600 fixed z-50'>
      <div className='w-1/4 justify-center flex'>
        <img src={logo} className='h-8' alt='logo' />
      </div>

      <nav
        className={`${
          menu ? 'hidden' : 'block'
        } md:w-2/6 md:block lg:block mt-60 md:mt-0 md:bg-inherit md:shadow-none z-50 md:z-0 hidden bg-slate-100 shadow-lg mx-auto`}
      >
        <ul className='md:flex md:items-center block md:justify-around gap-2'>
          <li className='mt-3 md:mt-0'>
            <Link
              to='/'
              className='block md:inline-block mt-4 md:mt-0 md:mr-6 hover:text-slate-800
                text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600'
            >
              Home
            </Link>
          </li>
          <li className='mt-3 md:mt-0'>
            <Link
              to='/about'
              className='block md:inline-block mt-4 md:mt-0 md:mr-6 hover:text-slate-800
                text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600'
            >
              About
            </Link>
          </li>
          <li className='mt-3 md:mt-0'>
            <a
              href='#'
              className='block md:inline-block mt-4 md:mt-0 md:mr-6 hover:text-slate-800
                text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600'
            >
              Services
            </a>
          </li>
          <li className='mt-3 md:mt-0'>
            <Link
              to='/#contact'
              className='block md:inline-block mt-4 md:mt-0 md:mr-6 hover:text-slate-800
                text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className='w-1/4 items-center justify-around flex cursor-pointer md:hidden'
        onClick={onClickMenu}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='md:block hidden md:space-x-4 w-28'>
        <img src={logo} className='h-8' alt='' srcset='' />
      </div>
    </div>
  );
};

export default Header;

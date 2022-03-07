import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './images/logo.png';
import './App.css';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [header, setHeader] = useState(false);
  const [checkPath, setCheckPaph] = useState(false);
  const onClickMenu = () => {
    setMenu(!menu);
  };

  const handleChangeBackgroundOnScroll = () => {
    if (window.scrollY >= 64 && window.location.pathname === '/') {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const handleChangeBackgroundOnPath = () => {
    if (window.location.pathname !== '/') {
      setCheckPaph(true);
    }
  };
  window.addEventListener('scroll', handleChangeBackgroundOnScroll);
  useEffect(() => {
    handleChangeBackgroundOnPath();
  }, [checkPath]);

  return (
    <div
      className={`${
        header ? 'header active' : 'header'
      } flex w-full h-16 md:h-16 px-p-1 items-center justify-between fixed z-50
        ${checkPath && 'no-scroll'}
        `}
    >
      <div className='flex'>
        <img src={logo} className='h-8' alt='logo' />
      </div>

      <nav
        className={`${
          menu ? 'hidden' : 'block'
        }  md:flex lg:block mt-60 md:mt-0 md:bg-inherit md:shadow-none text-white z-50 md:z-0 hidden bg-slate-100 shadow-lg`}
      >
        <ul className='flex justify-between gap-2'>
          <li className='mt-3 md:mt-0'>
            <Link
              to='/'
              className='block md:inline-block mt-4 md:mt-0 md:mr-6 
                text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600'
            >
              Home
            </Link>
          </li>
          <li className='mt-3 md:mt-0'>
            <Link
              to='/about'
              className='block md:inline-block mt-4 md:mt-0 md:mr-6 
                text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600'
            >
              About
            </Link>
          </li>
          <li className='mt-3 md:mt-0'>
            <a
              href='#'
              className='block md:inline-block mt-4 md:mt-0 md:mr-6 
                text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600'
            >
              Services
            </a>
          </li>
          <li className='mt-3 md:mt-0'>
            <Link
              to='/#contact'
              className='block md:inline-block mt-4 md:mt-0 md:mr-6 
                text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600'
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className='items-center justify-around flex cursor-pointer md:hidden'
        onClick={onClickMenu}
      >
        <svg
          className='w-6 h-6'
          fill='white'
          stroke='white'
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
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Expeditions from './caroussel-expedition';
import Packages from './caroussel-package';
import data from './data';
import Footer from './footer';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const { expeditions, packages } = data;

export default function App() {
  const [menu, setMenu] = useState(false);
  const onClickMenu = () => {
    setMenu(!menu);
    console.log(menu, 'mwafrika');
  };

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
    telephone: '',
  });

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className='flex min-h-screen flex-col'>
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
            <img src={logo} className='h-8' alt='' srcSet='' />
          </div>
        </div>
        <section className='flex flex-col items-center justify-center w-full h-screen'>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/ujuzi/image/upload/v1643572787/Kevent/photo-1565118531796-763e5082d113_o7o5fi.jpg)`,
            }}
            className='w-full h-full bg-cover bg-center bg-no-repeat bg-blend-overlay relative'
          ></div>
          <div className=' absolute top-1/3 left-4 md:left-32 z-40'>
            <h1 className='text-4xl md:text-7xl font-semibold mb-10 text-white  font-sans'>
              Welcome Aboard!
            </h1>
            <p
              className='text-lg font-semibold   text-white
            font-sans
            '
            >
              Book your spot today and set sail on a <br /> local fishing
              adventure.
            </p>
            <button
              className='text-slate-600 bg-white font-semibold py-2 px-4 my-8
            hover:bg-slate-700 hover:text-white font-sans'
            >
              Book now
            </button>
          </div>
          <div className='absolute bg-gray-900 bg-opacity-30  inset-0 h-full w-full z-10'></div>
        </section>
        <section className='md:flex sm:flex md:w-full md:h-full md:justify-center bg-gray-100  py-16 gap-12 md:gap-6 md:flex-row sm:flex-col'>
          <div
            className='col-span-1 2xl:w-1/5 md:col-span-1 sm:col-span-1  h-full flex flex-col md:pt-5 md:pb-1 sm:pt-5 sm:pb-5 lg:pt-5 lg:pb-1 xl:pt-5 xl:pb-5 xl:mr-12 md:px-2 lg:px-5 
         shadow-lg rounded-lg border-gray-50 md:my-0 md:mx-auto md:ml-4 md:w-15 xl:w-1/4 sm:w-9/12 sm:mx-auto sm:my-0  sm:px-6 xs:px-8 xs:mx-5 xxs:px-8 xxs:mx-5  xxxs:px-8 xxxs:mx-5'
          >
            <h1 className='xxxs:text-lg  font-bold text-slate-600 md:text-lg mb-8'>
              Search
            </h1>
            <input
              type='text'
              name='search'
              id='search'
              className='font-bold bg-slate-400 placeholder:text-slate-700 focus:outline-none focus:shadow-outline border border-gray-200 rounded-full py-2 px-4 block w-full appearance-none leading-normal'
              placeholder='Search'
            />
            <h1 className='xxxs:text-lg md:text-lg font-bold text-slate-600 mb-4 mt-4'>
              Select town
            </h1>
            <div className='flex relative w-full'>
              <select
                name='town'
                id='town'
                className='bg-slate-400 text-slate-700 font-bold focus:outline-none focus:shadow-outline border border-gray-200 rounded-full py-2 px-4 block w-full appearance-none leading-normal'
              >
                <option value='congo'>Select town</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700'>
                <svg
                  className='fill-slate-700 h-8 w-6 font-extrabold'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>

            <h1 className='text-slate-600 xxxs:text-lg md:text-lg pt-5 font-bold'>
              Types
            </h1>
            <div className='flex flex-row flex-wrap h-auto md:gap-x-6 xl:gap-x-12 lg:gap-x-4 xl:gap-y-4 lg:py-5 xl:py-5 sm:py-5 md:py-5 xs:py-5 xs:gap-x-12 xs:gap-y-6  xxs:py-5 xxs:gap-x-12 xxs:gap-y-6  xxxs:py-5 xxxs:gap-x-1 xxxs:gap-y-3 sm:gap-x-12 sm:gap-y-6 py-2 px-2'>
              <input
                type='button'
                value='Tous'
                className='bg-slate-600 text-white focus:outline-none focus:shadow-outline border border-gray-300 lg:py-1 xl:py-1 sm:py-1 rounded-full py-2 px-4 lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal
                hover:bg-slate-600 hover:text-white cursor-pointer
                active:bg-slate-600 active:text-white
                '
              />
              <input
                type='button'
                value='Fruits'
                className='bg-slate-300 text-slate-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 lg:py-1 xl:py-1 sm:py-1 lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
              <input
                type='button'
                value='Arbres'
                className='bg-slate-300 text-slate-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 lg:py-1 xl:py-1 sm:py-1 px-4 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
              <input
                type='button'
                value='Legumes'
                className='bg-slate-300 text-slate-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 lg:py-1 px-4 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12  xl:py-1 sm:py-1 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
              <input
                type='button'
                value='Cereals'
                className='bg-slate-300 text-slate-700 focus:outline-none focus:shadow-outline border xl:py-1 sm:py-1 border-gray-300 rounded-full py-2 px-4 lg:py-1 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
            </div>
          </div>
          <div className='col-span-1 md:col-span-1 sm:col-span-1 h-full md:w-4/6 sm:w-full flex flex-col md:justify-around'>
            <div className='flex flex-row justify-between pt-0 xs:pt-14 xxs:pt-14 xxxs:pt-14 pr-6 pl-2 xxxs:pb-6 xxs:pb-6 xs:pb-6'>
              <h1 className='text-2xl md:text-lg xxs:text-lg xxxs:text-lg xs:text-lg text-slate-600 font-bold'>
                Top packages
              </h1>
              <Link to='/packages'>
                <input
                  type='button'
                  value='Voir plus'
                  className='focus:outline-none font-bold focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-auto appearance-none leading-normal hover:bg-slate-700 bg-slate-600 hover:text-white text-white cursor-pointer'
                />
              </Link>
            </div>
            <Packages packages={packages} />
          </div>
        </section>
        <section className='md:flex md:w-11/12 md:h-10 md:flex-row xl:w-3/4 md:items-center md:justify-between md:my-0 md:mx-auto md:mt-12 xxxs:flex xs:flex xs:flex-col xxs:flex xxxs:flex-col xxs:flex-col xxxs:gap-y-6 xxs:gap-y-6 xs:gap-y-6 xxs:pt-5 xxxs:pt-5 xxs:px-8 xs:px-8 xxxs:px-8'>
          <div className='md:flex md:flex-row md:justify-between xl:w-2/5 md:items-center md:gap-x-8 xs:pt-5 lg:w-8/12 md:w-2/5'>
            <p className='md:w-1/2 xxxs:mb-5 xxs:mb-5 xs:mb-5 text-lg text-slate-600 font-bold'>
              Expeditions a venir{' '}
            </p>
            <div className='md:flex xxs:flex xs:flex xxs:relative xs:relative xxxs:flex xxxs:relative md:relative md:w-1/2 md:flex-wrap md:justify-between md:gap-x-6'>
              <select
                name='town'
                id='town'
                className=' bg-slate-600 font-bold text-white focus:outline-none focus:shadow-outline border border-gray-200 rounded-full py-2 px-4 block w-full appearance-none leading-normal'
              >
                <option value='Goma'>Toutes les villes</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-white h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div>
            </div>
          </div>
          <div className='md:mr-20'>
            <Link to='/expeditions'>
              <input
                type='button'
                value='Voir plus'
                className='bg-slate-600 font-bold focus:outline-none focus:shadow-outline border text-white border-gray-300 rounded-full py-2 px-4 block w-auto appearance-none leading-normal hover:bg-slate-700 hover:text-white cursor-pointer'
              />
            </Link>
          </div>
        </section>
        <Expeditions expeditions={expeditions} />
        <section className='flex items-center justify-center'>
          <div className='w-2/3 h-px bg-slate-300'></div>
        </section>

        <section
          className='flex flex-col sm:flex-col lg:flex lg:flex-row md:flex md:flex-row md:justify-between bg-gray-100 justify-between w-full lg:h-full lg:w-full md:h-full px-5 py-5 md:py-8'
          id={'contact'}
        >
          <div
            className='lg:w-1/2 lg:h-auto relative xl:h-full xl:flex xl:justify-center xl:items-center xl:flex-row xl:overflow-hidden'
            style={{ maxHeight: '620px' }}
          >
            <img
              src='https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fG5hdHVyZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=5000&q=60'
              alt='image-footer'
              className='w-full h-full object-cover'
            />
            <h3 className='absolute text-white text-5xl font-bold  left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2'>
              Kevent
            </h3>
          </div>

          <div
            className='bg-white p-10 w-full lg:h-auto lg:w-1/2 md:h-full md:px-4 md:flex md:justify-center'
            style={{ maxHeight: '620px' }}
          >
            <form
              action=''
              className='flex flex-col md:w-96 lg:gap-9 lg:w-1/2 md:gap-0 lg:space-y-2'
            >
              <p className=' text-xl text-slate-600 font-bold'>CONTACT US</p>
              <div>
                <label htmlFor=''>Noms</label>
                <input
                  type='text'
                  value='name'
                  className='h-8 lg:h-10 w-full border px-3 py-2 md:h-8 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500'
                  onChange={onChange}
                />
              </div>

              <div>
                <label htmlFor=''>Email</label>
                <input
                  type='text'
                  value='email'
                  className='h-8 w-full md:h-10 border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500'
                  onChange={onChange}
                />
              </div>

              <div>
                <label htmlFor=''>Numero de telephone</label>
                <input
                  type='text'
                  value='telephone'
                  className='h-8 w-full md:h-10 border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500'
                  onChange={onChange}
                />
              </div>
              <div>
                <label htmlFor=''>Message</label>
                <textarea
                  className='resize h-14 block w-full border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500'
                  rows='5'
                  onChange={onChange}
                />
              </div>
              <button className='rounded-none w-full py-1  px-10 text-lg font-bold text-white bg-slate-700'>
                Button
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

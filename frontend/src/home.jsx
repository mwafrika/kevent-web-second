import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Expeditions from './caroussel-expedition';
import Packages from './caroussel-package';
import data from './data';
import Footer from './footer';
import Header from './header';
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

  useEffect(() => {
    console.log(contact, 'mwafrika');
  }, [contact]);

  const handleChange = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(contact, 'mwafrika');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contact, 'mwafrika');
  };
  return (
    <>
      <section className='flex min-h-screen flex-col'>
        <Header />
        <section className='flex flex-col items-center justify-center w-full h-screen'>
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/ujuzi/image/upload/v1643572787/Kevent/photo-1565118531796-763e5082d113_o7o5fi.jpg)`,
            }}
            className='w-full h-full bg-cover bg-center bg-no-repeat bg-blend-overlay relative'
          ></div>
          <div className=' absolute top-1/3 left-4 md:left-32 z-40'>
            <h1 className='text-4xl md:text-7xl font-semibold mb-10 text-white'>
              Welcome Aboard!
            </h1>
            <p
              className='text-lg font-semibold   text-white
            '
            >
              Book your spot today and set sail on a <br /> local fishing
              adventure.
            </p>
            <button
              className='text-slate-600 bg-white font-semibold py-2 px-4 my-8
            hover:bg-slate-700 hover:text-white rounded-2xl'
            >
              Book now
            </button>
          </div>
          <div className='absolute bg-gray-900 bg-opacity-30  inset-0 h-full w-full z-10'></div>
        </section>
        <section className='flex flex-col md:w-full md:h-full md:justify-center  pt-16 md:pb-16 md:flex-row sm:flex-col xl:gap-0.3'>
          <div
            className='filter-button col-span-1 2xl:w-1/5 md:col-span-1 sm:col-span-1 filter h-auto flex flex-col xl:mr-12 md:px-2 lg:px-5  gap-y-0.25 gap-x-5
        rounded-2xl md:my-0 md:mx-auto md:ml-4 md:w-15 xl:w-1/4 sm:w-9/12 sm:mx-auto sm:my-0  sm:px-6 xs:px-8 xs:mx-5 xxs:px-8 xxs:mx-5  xxxs:px-8 xxxs:mx-5'
          >
            <h1 className='xxxs:text-lg  font-bold text-slate-600 md:text-lg'>
              Search
            </h1>
            <input
              type='text'
              name='search'
              id='search'
              className='font-bold inputs placeholder:text-slate-700 focus:outline-none focus:shadow-outline border rounded-2xl py-p-5 px-4 block w-full appearance-none leading-normal'
              placeholder='Search'
            />
            <h1 className='xxxs:text-lg md:text-lg font-bold text-slate-600'>
              Select town
            </h1>
            <div className='flex relative w-full'>
              <select
                name='town'
                id='town'
                className='inputs text-slate-700 font-bold focus:outline-none focus:shadow-outline border rounded-2xl py-p-5 px-4 block w-full appearance-none leading-normal'
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

            <h1 className='text-slate-600 xxxs:text-lg md:text-lg font-bold'>
              Types
            </h1>
            <div className='h-full gap-y-4 gap-x-2 xs:gap-x-5  flex flex-row flex-wrap md:gap-x-6 xl:gap-x-12 lg:gap-x-4 lg:py-5 xl:py-5 sm:py-5 md:py-5 xs:py-5 xs:px-6  xxs:py-5  xxxs:py-5 xxxs:gap-x-1 sm:gap-x-12 sm:gap-y-6 px-2'>
              <input
                type='button'
                value='Tous'
                className='btn-filter focus:outline-none focus:shadow-outline border lg:py-1 xl:py-1 sm:py-1 rounded-2xl px-p-2 lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal
                hover:bg-slate-600 hover:text-white cursor-pointer 
                active:bg-slate-600 active:text-white
                '
              />
              <input
                type='button'
                value='Fruits'
                className='btn-filter text-slate-700 focus:outline-none focus:shadow-outline border rounded-2xl py-2 px-p-2 lg:py-1 xl:py-1 sm:py-1 lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
              <input
                type='button'
                value='Arbres'
                className='btn-filter text-slate-700 focus:outline-none focus:shadow-outline border rounded-2xl py-2 lg:py-1 xl:py-1 sm:py-1 px-p-2 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
              <input
                type='button'
                value='Legumes'
                className='btn-filter text-slate-700 focus:outline-none focus:shadow-outline border rounded-2xl py-2 lg:py-1 px-p-2 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12  xl:py-1 sm:py-1 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
              <input
                type='button'
                value='Cereals'
                className='btn-filter text-slate-700 focus:outline-none focus:shadow-outline border xl:py-1 sm:py-1 rounded-2xl py-2 px-p-2 lg:py-1 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
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
                  className='focus:outline-none font-bold focus:shadow-outline border rounded-2xl py-2 px-4 block w-auto appearance-none leading-normal hover:bg-slate-700 bg-slate-600 hover:text-white text-white cursor-pointer'
                />
              </Link>
            </div>
            <Packages packages={packages} />
          </div>
        </section>

        <section className=' mr-p-3 pb-5 md:flex md:full xl:w-11/12 2xl:w-11/12 2xl:justify-between xl:ml-14 xl:pr-0 md:mr-6 md:ml-4 md:h-full md:flex-row md:items-center md:justify-between md:my-0 md:mx-auto xxxs:flex xs:flex xs:flex-col xxs:flex xxxs:flex-col xxs:flex-col xxxs:gap-y-6 xxs:gap-y-6 xs:gap-y-6 xxs:pt-5 xxxs:pt-5'>
          <div className=' xl:w-96 xl:h-auto md:flex md:flex-row lg:w-2/5 md:justify-between md:items-center md:mr-4 xs:pt-5 md:w-1/2'>
            <p className='md:w-3/4 xxxs:mb-5 xl:w-56 xxs:mb-5 xs:mb-5 text-lg text-slate-600 font-bold'>
              Expeditions a venir
            </p>
            <div className='md:flex xxs:flex xs:flex xl:w-48 xxs:relative xs:relative xxxs:flex xxxs:relative md:relative md:w-3/4 md:flex-wrap md:justify-between md:gap-x-6'>
              <select
                name='town'
                id='town'
                className='select-city font-bold text-white focus:outline-none focus:shadow-outline border rounded-2xl py-2 px-4 block w-full appearance-none leading-normal'
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
          <div className='md:mr-0'>
            <Link to='/expeditions'>
              <input
                type='button'
                value='Voir plus'
                className='bg-slate-600 xl:-mr-5 font-bold focus:outline-none focus:shadow-outline border text-white border-gray-300 rounded-2xl py-2 px-4 block w-auto appearance-none leading-normal hover:bg-slate-700 hover:text-white cursor-pointer'
              />
            </Link>
          </div>
        </section>
        <Expeditions expeditions={expeditions} />
        <section className='flex items-center justify-center'>
          <div className='w-2/3 h-px bg-slate-300'></div>
        </section>

        <section
          className='flex flex-col sm:flex-col lg:flex lg:flex-row md:flex md:flex-row md:justify-center bg-gray-100 justify-center w-full lg:h-full lg:w-full md:h-full px-5 py-5 md:py-8'
          id={'contact'}
        >
          <div className='flex bg-white p-10 w-full md:w-2/5 md:h-full md:px-4 md:justify-center'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-y-7 lg:gap-y-9 lg:w-4/5 md:w-4/5 xl:w-4/5 md:gap-y-9 xl:gap-y-9 lg:space-y-2'
            >
              <p className='text-xl text-slate-600 font-bold text-center'>
                CONTACTEZ-NOUS
              </p>
              <div>
                <label htmlFor='name'>Noms</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={contact.name}
                  className='h-8 lg:h-10 w-full border px-3 py-2 md:h-8 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500'
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor=''>Email</label>
                <input
                  type='text'
                  name='email'
                  value={contact.email}
                  className='h-8 w-full md:h-10 border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500'
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor=''>Numero de telephone</label>
                <input
                  type='text'
                  name='telephone'
                  value={contact.telephone}
                  className='h-8 w-full md:h-10 border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500'
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor=''>Message</label>
                <textarea
                  className='resize h-14 block w-full border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500'
                  rows='5'
                  onChange={handleChange}
                  value={contact.message}
                  name='message'
                />
              </div>
              <button className='w-full my-5 rounded-2xl py-4 px-10 text-lg font-bold text-white bg-slate-700'>
                Envoyer
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}

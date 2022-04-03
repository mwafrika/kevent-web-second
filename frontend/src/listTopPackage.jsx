import React, { useEffect } from 'react';
import moment from 'moment';
import './App.css';
import Pagination from './pagination';
import Header from './header';
import Footer from './footer';
import data from './data';
import Banner from './bannerPack';
import { Link } from 'react-router-dom';
const packages = data.packages;

const List = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className='flex min-h-screen flex-col'>
        <Header />
        <Banner />
        <div className='flex flex-col w-full xl:mx-auto mx-auto md:w-11/12 lg:w-11/12 xl:w-11/12  md:py-4 xl:py-4 lg:gap-x-0.39 lg:py-4 md:flex-row xl:flex-row lg:flex-row md:flex-wrap xl:flex-wrap lg:flex-wrap md:gap-x-0.39 md:gap-y-7 lg:gap-y-7 md:mx-auto lg:mx-auto xl:flex 2xl:flex 2xl:flex-row 2xl:flex-wrap xl:gap-x-0.25 xl:gap-y-10 2xl:mx-auto'>
          <div
            className='h-full md:w-15 w-4/5 px-p-5 py-p-10 2xl:h-auto md:py-4 md:h-auto xl:h-auto lg:h-auto lg:py-7 xl:py-5 xxxs:h-full mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto md:pb-1 xs:mx-auto xxs:px-4 xl:w-1/3.3 lg:w-15 2xl:w-98 mt-10 xs:px-4 xs:py-8 transition md:px-2  xxxs:px-4 xxxs:py-4
          cursor-pointer md:mt-0 lg:mt-0 shadow-lg rounded-lg'
          >
            <h1 className='xxxs:text-lg  font-bold text-slate-600 md:text-lg mb-8 md:mb-1 lg:mb-4'>
              Search
            </h1>
            <input
              type='text'
              name='search'
              id='search'
              className='font-bold bg-slate-400 md:h-8 lg:h-10 placeholder:text-slate-700 focus:outline-none focus:shadow-outline border border-gray-200 rounded-full py-2 px-4 block w-full appearance-none leading-normal'
              placeholder='Search'
            />
            <h1 className='xxxs:text-lg md:text-lg font-bold text-slate-600 mb-4 md:mb-1 lg:mb-4 md:mt-2 lg:mt-4 mt-4'>
              Select town
            </h1>
            <div className='flex relative w-full'>
              <select
                name='town'
                id='town'
                className='bg-slate-400 md:h-8 md:py-0 lg:h-10 text-slate-700 font-bold focus:outline-none focus:shadow-outline border border-gray-200 rounded-full py-2 px-4 block w-full appearance-none leading-normal'
              >
                <option value=''>Select town</option>
                <option value=''>Town 1</option>
                <option value=''>Town 2</option>
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

            <h1 className='text-slate-600 xxxs:text-lg md:text-lg pt-5 md:pt-3 lg:pt-5 font-bold'>
              Types
            </h1>
            <div className='flex flex-row flex-wrap h-auto md:gap-x-6 md:gap-y-2 xl:gap-x-12 lg:gap-x-4 xl:gap-y-4 lg:py-5 xl:py-5 sm:py-5 md:py-5 xs:py-5 xs:gap-x-12 xs:gap-y-6  xxs:py-5 xxs:gap-x-12 xxs:gap-y-6  xxxs:py-5 xxxs:gap-x-1 xxxs:gap-y-3 sm:gap-x-12 sm:gap-y-6 py-2 px-2'>
              <input
                type='button'
                value='Tous'
                className=' bg-slate-600 text-white focus:outline-none focus:shadow-outline border border-gray-300 lg:py-1 xl:py-1 sm:py-1 rounded-full py-2 px-4 lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal
                hover:bg-slate-600 hover:text-white cursor-pointer
                active:bg-slate-600 active:text-white
                '
              />
              <input
                type='button'
                value='Fruits'
                className=' bg-slate-300 text-slate-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 lg:py-1 xl:py-1 sm:py-1 lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
              <input
                type='button'
                value='Arbres'
                className='bg-slate-300 text-slate-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 lg:py-1 xl:py-1 sm:py-1 px-4 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
              <input
                type='button'
                value='Legumes'
                className=' bg-slate-300 text-slate-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 lg:py-1 px-4 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12  xl:py-1 sm:py-1 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
              <input
                type='button'
                value='Cereals'
                className=' bg-slate-300 text-slate-700 focus:outline-none focus:shadow-outline border xl:py-1 sm:py-1 border-gray-300 rounded-full py-2 px-4 lg:py-1 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer'
              />
            </div>
          </div>

          {packages.map(({ key, image, date, prix, lieu, description }) => (
            <div
              className='h-full md:w-15 px-p-5 md:p-0 py-p-10 w-4/5 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto xs:mx-auto xl:w-1/3.3 lg:w-15 mx-auto 2xl:w-98 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
'
            >
              <Link
                to={{
                  pathname: `/packages/${key}`.trim(),
                  state: {
                    ...image,
                  },
                }}
              >
                <img
                  src={image}
                  alt=''
                  className='object-cover rounded-t-lg w-full h-80'
                />
                <div className='flex flex-col px-5  pb-10'>
                  <div className='flex flex-row justify-between items-center '>
                    <p className='text-md font-semibold text-center text-slate-700  py-4'>
                      {lieu}
                    </p>
                    <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                      {prix}
                    </p>
                  </div>
                  <span className='text-md text-slate-700  py-0 my-0'>
                    {date}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Pagination />
        <Footer />
      </section>
    </>
  );
};

export default List;

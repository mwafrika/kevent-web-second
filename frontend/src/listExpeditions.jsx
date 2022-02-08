import React from 'react';
import moment from 'moment';
import Pagination from './pagination';
import Header from './header';
const list = () => {
  return (
    <>
      <Header />
      <div className='xl:mr-40 xl:float-right xl:pt-10 md:py-5 md:mr-10 md:float-right xxxs:mx-auto xxxs:float-none xxxs:py-10 xxs:py-10 xs:py-10 mt-20'>
        <h1 className='text-slate-600 font-bold text-3xl md:text-2xl xxxs:text-center xxs:text-center xs:text-center '>
          Expeditions
        </h1>
      </div>
      <div className='flex flex-col w-full md:w-11/12 md:py-4 md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-7 md:mx-auto 2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:gap-10 2xl:mx-auto 2xl:ml-36 2xl:py-10'>
        <div
          className='col-span-1 2xl:w-1/5 2xl:h-full md:w-15 sm:col-span-1  h-full flex flex-col md:pb-1 sm:pt-5 sm:pb-5 lg:pt-5 lg:pb-1 xl:pt-5 xl:pb-5 xl:mr-12 2xl:mr-0 md:px-2 lg:px-5 
         shadow-lg rounded-lg border-gray-50 md:my-0 md:mx-auto xl:w-1/4 sm:w-9/12 2xl:mx-0 sm:mx-auto sm:my-0  sm:px-6 xs:px-8 xs:mx-5 xxs:px-8 xxs:mx-5  xxxs:px-8 xxxs:mx-5'
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
          <div class='flex relative w-full'>
            <select
              name='town'
              id='town'
              className='bg-slate-400 md:h-8 md:py-0 lg:h-10 text-slate-700 font-bold focus:outline-none focus:shadow-outline border border-gray-200 rounded-full py-2 px-4 block w-full appearance-none leading-normal'
            >
              <option value=''>Select town</option>
              <option value=''>Town 1</option>
              <option value=''>Town 2</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700'>
              <svg
                class='fill-slate-700 h-8 w-6 font-extrabold'
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
          <div className='flex flex-row flex-wrap h-auto md:gap-x-6 md:gap-y-2 lg:gap-y-6 xl:gap-x-12 lg:gap-x-4 xl:gap-y-4 lg:py-5 xl:py-5 sm:py-5 md:py-5 xs:py-5 xs:gap-x-12 xs:gap-y-6  xxs:py-5 xxs:gap-x-12 xxs:gap-y-6  xxxs:py-5 xxxs:gap-x-1 xxxs:gap-y-3 sm:gap-x-12 sm:gap-y-6 py-2 px-2'>
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
        <div
          className='h-full 2xl:w-1/5 md:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto xs:mx-auto lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       '
        >
          <img
            src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-3_odyxty.svg'
            alt=''
            className='object-cover rounded-t-lg w-full'
          />
          <div className='flex flex-col px-5  pb-10'>
            <div className='flex flex-row justify-between items-center '>
              <p className='text-md font-semibold text-center text-slate-700  py-4'>
                Nyiragongo
              </p>
              <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                50$
              </p>
            </div>
            <span className='text-md text-slate-700  py-0 my-0'>
              {moment(
                '2020-05-01T00:00:00.000Z',
                'YYYY-MM-DDTHH:mm:ss.SSSZ'
              ).fromNow()}
            </span>
          </div>
        </div>
        <div
          className='h-full 2xl:w-1/5 md:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto xs:mx-auto lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       '
        >
          <img
            src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-3_odyxty.svg'
            alt=''
            className='object-cover rounded-t-lg w-full'
          />
          <div className='flex flex-col px-5  pb-10'>
            <div className='flex flex-row justify-between items-center '>
              <p className='text-md font-semibold text-center text-slate-700  py-4'>
                Nyiragongo
              </p>
              <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                50$
              </p>
            </div>
            <span className='text-md text-slate-700  py-0 my-0'>
              {moment(
                '2020-05-01T00:00:00.000Z',
                'YYYY-MM-DDTHH:mm:ss.SSSZ'
              ).fromNow()}
            </span>
          </div>
        </div>
        <div
          className='2xl:w-1/5 h-full md:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto xs:mx-auto lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       '
        >
          <img
            src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-3_odyxty.svg'
            alt=''
            className='object-cover rounded-t-lg w-full'
          />
          <div className='flex flex-col px-5  pb-10'>
            <div className='flex flex-row justify-between items-center '>
              <p className='text-md font-semibold text-center text-slate-700  py-4'>
                Nyiragongo
              </p>
              <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                50$
              </p>
            </div>
            <span className='text-md text-slate-700  py-0 my-0'>
              {moment(
                '2020-05-01T00:00:00.000Z',
                'YYYY-MM-DDTHH:mm:ss.SSSZ'
              ).fromNow()}
            </span>
          </div>
        </div>
        <div
          className='h-full 2xl:w-1/5 md:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto xs:mx-auto lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       '
        >
          <img
            src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-3_odyxty.svg'
            alt=''
            className='object-cover rounded-t-lg w-full'
          />
          <div className='flex flex-col px-5  pb-10'>
            <div className='flex flex-row justify-between items-center '>
              <p className='text-md font-semibold text-center text-slate-700  py-4'>
                Nyiragongo
              </p>
              <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                50$
              </p>
            </div>
            <span className='text-md text-slate-700  py-0 my-0'>
              {moment(
                '2020-05-01T00:00:00.000Z',
                'YYYY-MM-DDTHH:mm:ss.SSSZ'
              ).fromNow()}
            </span>
          </div>
        </div>
        <div
          className='h-full 2xl:w-1/5 md:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto xs:mx-auto lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       '
        >
          <img
            src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-3_odyxty.svg'
            alt=''
            className='object-cover rounded-t-lg w-full'
          />
          <div className='flex flex-col px-5  pb-10'>
            <div className='flex flex-row justify-between items-center '>
              <p className='text-md font-semibold text-center text-slate-700  py-4'>
                Nyiragongo
              </p>
              <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                50$
              </p>
            </div>
            <span className='text-md text-slate-700  py-0 my-0'>
              {moment(
                '2020-05-01T00:00:00.000Z',
                'YYYY-MM-DDTHH:mm:ss.SSSZ'
              ).fromNow()}
            </span>
          </div>
        </div>
        <div
          className='h-full 2xl:w-1/5 md:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto xs:mx-auto lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       '
        >
          <img
            src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-3_odyxty.svg'
            alt=''
            className='object-cover rounded-t-lg w-full'
          />
          <div className='flex flex-col px-5  pb-10'>
            <div className='flex flex-row justify-between items-center '>
              <p className='text-md font-semibold text-center text-slate-700  py-4'>
                Nyiragongo
              </p>
              <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                50$
              </p>
            </div>
            <span className='text-md text-slate-700  py-0 my-0'>
              {moment(
                '2020-05-01T00:00:00.000Z',
                'YYYY-MM-DDTHH:mm:ss.SSSZ'
              ).fromNow()}
            </span>
          </div>
        </div>
        <div
          className='h-full 2xl:w-1/5 md:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto xs:mx-auto lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       '
        >
          <img
            src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-3_odyxty.svg'
            alt=''
            className='object-cover rounded-t-lg w-full'
          />
          <div className='flex flex-col px-5  pb-10'>
            <div className='flex flex-row justify-between items-center '>
              <p className='text-md font-semibold text-center text-slate-700  py-4'>
                Nyiragongo
              </p>
              <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                50$
              </p>
            </div>
            <span className='text-md text-slate-700  py-0 my-0'>
              {moment(
                '2020-05-01T00:00:00.000Z',
                'YYYY-MM-DDTHH:mm:ss.SSSZ'
              ).fromNow()}
            </span>
          </div>
        </div>
        <div
          className='h-full 2xl:w-1/5 md:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxs:w-4/5 xxs:h-full xxs:mx-auto xs:mx-auto lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       '
        >
          <img
            src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-3_odyxty.svg'
            alt=''
            className='object-cover rounded-t-lg w-full'
          />
          <div className='flex flex-col px-5  pb-10'>
            <div className='flex flex-row justify-between items-center '>
              <p className='text-md font-semibold text-center text-slate-700  py-4'>
                Nyiragongo
              </p>
              <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                50$
              </p>
            </div>
            <span className='text-md text-slate-700  py-0 my-0'>
              {moment(
                '2020-05-01T00:00:00.000Z',
                'YYYY-MM-DDTHH:mm:ss.SSSZ'
              ).fromNow()}
            </span>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default list;

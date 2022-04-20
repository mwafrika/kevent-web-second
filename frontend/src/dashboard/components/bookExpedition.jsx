import React from 'react';
import Header from './header';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const table = () => {
  return (
    <div className='row-span-full mx-auto'>
      <Header title='Packets' />

      <div className='relative w-[_12rem]'>
        <button
          className=' bg-slate-100 text-slate-600 shadow-xl pl-4 py-2 my-4 rounded-lg w-full h-full'
          type='button'
        >
          Book Expedition
          <FontAwesomeIcon
            icon={faPencil}
            className='absolute top-6 mr-4 text-xl left-3 text-slate-600'
          />
        </button>
        <span class='flex h-3 w-3 absolute top-3 right-0'>
          <span class='animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75'></span>
          <span class='relative inline-flex rounded-full h-3 w-3 bg-slate-500'></span>
        </span>
      </div>

      <table className='table table-auto shadow-lg bg-white border-collapse'>
        <thead>
          <tr>
            <th className='bg-slate-600 text-white border text-left px-8 py-4'>
              Song
            </th>
            <th className='bg-slate-600 text-white border text-left px-8 py-4'>
              Artist
            </th>
            <th className='bg-slate-600 text-white border text-left px-8 py-4'>
              Year
            </th>
            <th className='bg-slate-600 text-white border text-left px-8 py-4'>
              Song
            </th>
            <th className='bg-slate-600 text-white border text-left px-8 py-4'>
              Artist
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border px-8 py-4'>
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td className='border px-8 py-4'>Malcolm Lockyer</td>
            <td className='border px-8 py-4'>1961</td>
            <td className='border px-8 py-4'>Malcolm Lockyer</td>
            <td className='border px-8 py-4'>1961</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Witchy Woman</td>
            <td className='border px-8 py-4'>The Eagles</td>
            <td className='border px-8 py-4'>1972</td>
            <td className='border px-8 py-4'>The Eagles</td>
            <td className='border px-8 py-4'>1972</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Shining Star</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Shining Star</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Shining Star</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Shining Star</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Shining Star</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
          </tr>
          <tr>
            <td className='border px-8 py-4'>Shining Star</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
            <td className='border px-8 py-4'>Earth, Wind, and Fire</td>
            <td className='border px-8 py-4'>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;

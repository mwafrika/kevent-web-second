import React, { useEffect } from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';
import { faPencil, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Places } from '../../../redux/actions/place';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  const { places } = useSelector((state) => state.places);
  places.sort((a, b) => b.id - a.id);
  useEffect(() => {
    dispatch(Places());
  }, [dispatch]);

  const headerTitle = [
    'Name',
    'Image',
    'Addresse',
    'latLng',
    'Tags',
    'Description',
  ];

  console.log(places, 'places components');
  return (
    <div className='row-span-full mx-auto'>
      <Header title='Places' />
      <div className='relative w-[_12rem]'>
        <Link to='/admin/create/place'>
          <button
            className=' bg-slate-100 text-slate-600 shadow-xl pl-4 py-2 my-4 rounded-lg w-full h-full'
            type='button'
          >
            New Place
            <FontAwesomeIcon
              icon={faPencil}
              className='absolute top-6 mr-4 text-xl left-3 text-slate-600'
            />
          </button>
        </Link>

        <span className='flex h-3 w-3 absolute top-3 right-0'>
          <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75'></span>
          <span className='relative inline-flex rounded-full h-3 w-3 bg-slate-500'></span>
        </span>
      </div>

      <table className='table table-auto shadow-lg bg-white border-collapse'>
        <thead>
          <tr>
            {headerTitle.map((title) => (
              <th
                key={title}
                className='bg-slate-600 text-white border text-left px-8 py-4'
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {places.map((pack) => (
            <tr key={pack.id}>
              <td className='border px-2 py-1 underline text-slate-600 hover:text-slate-500'>
                <Link to={`/admin/places/${pack.id}`}>{pack.name}</Link>
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                <a
                  href={`${pack.imageUrls}`}
                  className='underline text-slate-600 hover:text-slate-500'
                >{`Image-${pack.id}`}</a>
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.addresse}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.latLng}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.tags}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

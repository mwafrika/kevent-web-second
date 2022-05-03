import React, { useEffect } from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';
import { faPencil, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { packackages } from '../../../redux/actions/package';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  const { packages } = useSelector((state) => state.packages);
  packages.sort((a, b) => b.id - a.id);
  useEffect(() => {
    dispatch(packackages());
  }, [dispatch]);

  const headerTitle = [
    'Title',
    'Description',
    'Price',
    'Image',
    'itineraire',
    'Places',
    'Tags',
    'Booking',
  ];

  const {
    user: {
      authUser: { role },
    },
    isLoggedIn,
  } = useSelector((state) => state.user);

  console.log(packages, 'packages components');
  return (
    <div className='row-span-full mx-auto'>
      <Header title='Packets' />
      {role === 'ADMIN' && (
        <div className='relative w-[_12rem]'>
          <Link to='/admin/create/package'>
            <button
              className=' bg-slate-100 text-slate-600 shadow-xl pl-4 py-2 my-4 rounded-lg w-full h-full'
              type='button'
            >
              Creer un packet
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
      )}

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
          {packages.map((pack) => (
            <tr key={pack.id}>
              <td className='border px-2 py-1 underline text-slate-600 hover:text-slate-500'>
                <Link to={`/admin/packages/${pack.id}`}>{pack.title}</Link>
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.description}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.price}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                <a
                  href={`${pack.imageUrls}`}
                  className='underline text-slate-600 hover:text-slate-500'
                >{`Image-${pack.id}`}</a>
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.itineraire}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.places}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.tags}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                <Link to={`/admin/packages/${pack.id}/book`}>
                  <button
                    className='bg-slate-600 text-white shadow-xl py-2 my-4 rounded-lg w-full h-full flex text-md justify-around gap-x-1 items-center'
                    type='button'
                  >
                    <p className=''> Book Now</p>
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      className='text-slate-300'
                    />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React, { useEffect } from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';
import { faPencil, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getusers } from '../../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  users.sort((a, b) => b.id - a.id);
  useEffect(() => {
    dispatch(getusers());
  }, [dispatch]);

  const headerTitle = [
    'First Name',
    'Last Name',
    'surname',
    'Email',
    'Phone',
    'Address',
    'Sexe',
    'Profession',
    'Image',
    'Role',
  ];

  console.log(users, 'users components');
  return (
    <div className='row-span-full mx-auto'>
      <Header title='Places' />
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
          {users.map((pack) => (
            <tr key={pack.id}>
              <td className='border px-2 py-1 underline text-slate-600 hover:text-slate-500'>
                <Link to={`/admin/users/${pack.id}`}>{pack.firstName}</Link>
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.lastName}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.surname}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.email}
              </td>

              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.phone}
              </td>

              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.address}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.sexe}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.profession}
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                <a
                  href={`${pack.imageUrls}`}
                  className='underline text-slate-600 hover:text-slate-500'
                >{`Image-${pack.id}`}</a>
              </td>
              <td className='border px-2 py-1 text-slate-600 hover:text-slate-500'>
                {pack.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

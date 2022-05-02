import React, { useEffect } from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';
import { faPencil, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getExpeditionBookings } from '../../../redux/actions/bookExpedition';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  const { bookExpeditions } = useSelector((state) => state.bookExpeditions);
  console.log(bookExpeditions, 'book expeditions components');
  bookExpeditions.sort((a, b) => b.id - a.id);
  useEffect(() => {
    dispatch(getExpeditionBookings());
  }, [dispatch]);

  const headerTitle = [
    'Visitor Details',
    'Ticket Number',
    'Additionnal Information',
    'Status',
  ];

  // packageId: 20
  // ticketNumber: 3
  // userId: 198
  console.log(bookExpeditions, 'book packages components');
  return (
    <div className='row-span-full mx-auto'>
      <Header title='Expeditions reservé' />
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
          {bookExpeditions.map((pack) => (
            <tr key={pack.id}>
              <td className='border p-2 underline text-slate-600 hover:text-slate-500'>
                <Link to={`/admin/expeditions/book/${pack.id}`}>
                  {pack.Visitor_details}
                </Link>
              </td>
              <td className='border p-2 text-slate-600 hover:text-slate-500'>
                {pack.ticketNumber}
              </td>
              <td className='border p-2 text-slate-600 hover:text-slate-500'>
                {pack.additionnalInformation}
              </td>
              <td className='border p-2 text-slate-600 hover:text-slate-500'>
                <p className='bg-sky-500 text-white px-1 text-center rounded-full'>
                  {pack.Status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

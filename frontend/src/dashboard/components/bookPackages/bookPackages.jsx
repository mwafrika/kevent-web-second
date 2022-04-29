import React, { useEffect } from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';
import { faPencil, faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getBookings } from '../../../redux/actions/bookPackage';
import { useDispatch, useSelector } from 'react-redux';

const Table = () => {
  const dispatch = useDispatch();
  const { bookPackages } = useSelector((state) => state.bookPackages);
  bookPackages.sort((a, b) => b.id - a.id);
  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch]);

  const headerTitle = [
    'Visitor Details',
    'Start Date',
    'End Date',
    'Ticket Number',
    'Additionnal Information',
    'Status',
  ];

  //   Status: ['pending']
  // Visitor_details: "gfttdrdeswawa"
  // additionnalInformation: ['ijijojojojojo']
  // bookedEndDate: "2022-04-12T00:00:00.000Z"
  // bookedStartDate: "2022-04-20T00:00:00.000Z"
  // id: 3
  // packageId: 20
  // ticketNumber: 3
  // userId: 198
  console.log(bookPackages, 'book packages components');
  return (
    <div className='row-span-full mx-auto'>
      <Header title='Packets' />
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
          {bookPackages.map((pack) => (
            <tr key={pack.id}>
              <td className='border p-2 underline text-slate-600 hover:text-slate-500'>
                <Link to={`/admin/packages/book/${pack.id}`}>
                  {pack.Visitor_details}
                </Link>
              </td>
              <td className='border p-2 text-slate-600 hover:text-slate-500'>
                {pack.bookedStartDate.slice(0, 10)}
              </td>
              <td className='border p-2 text-slate-600 hover:text-slate-500'>
                {pack.bookedEndDate.slice(0, 10)}
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

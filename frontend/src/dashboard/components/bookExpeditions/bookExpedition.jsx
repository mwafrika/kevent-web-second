import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingle } from '../../../redux/actions/bookExpedition';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../header';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteBookinExpedition } from '../../../redux/actions/bookExpedition';

const CreateExpedition = () => {
  const dispatch = useDispatch();
  const { bookSingleExpedition } = useSelector(
    (state) => state.bookExpeditions
  );
  const { key } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingle(key));
  }, [dispatch, key]);

  const {
    Visitor_details,
    ticketNumber,
    additionnalInformation,
    Status,
    ExpeditionId,
  } = bookSingleExpedition;

  const handleDelete = () => {
    dispatch(deleteBookinExpedition(key, navigate));
  };

  console.log(bookSingleExpedition, 'check values');

  return (
    <div className='mt-10 sm:mt-0 row-span-full mx-auto w-[95%]'>
      <Header title='Expeditions reservé' />
      <div className='mt-5 flex flex-col shadow-2xl'>
        <div className='md:mt-0 md:col-span-2 h-20 pt-8 mb-5 flex justify-between items-center px-20'>
          <div className=' flex gap-y-5 flex-col'>
            <h1 className='text-2xl font-bold text-gray-700'>Details</h1>
          </div>
          <div className='flex text-2xl w-16 justify-between'>
            <Link to={`/admin/expedition/edit/book/${key}`}>
              <span className=' text-blue-500 cursor-pointer'>
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
            </Link>
            <span
              className='text-red-500 cursor-pointer'
              onClick={handleDelete}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </span>
          </div>
        </div>

        <div className='md:mt-0 md:col-span-2 h-[60vh]  flex flex-row justify-between'>
          <div className='w-full py-5 px-5 mx-auto '>
            <ul className='flex flex-wrap flex-row gap-y-4 justify-around'>
              <li className='w-[40%]'>
                <p className='text-xl font-bold text-slate-700'>
                  Visitor Details
                </p>
                <p className='text-lg  font-medium text-slate-500'>
                  {Visitor_details}
                </p>
              </li>

              <li className='w-[40%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>
                  Ticket Number
                </p>
                <p className='text-xl  font-medium text-slate-500'>
                  {' '}
                  {ticketNumber}
                </p>
              </li>
              <li className='w-[40%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Status</p>
                <p className='text-xl  font-medium text-slate-500'>{Status}</p>
              </li>
              <li className='w-[40%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Package ID</p>
                <p className='text-xl  font-medium text-slate-500'>
                  {ExpeditionId}
                </p>
              </li>
              {/* packageId */}
              <li className='w-[40%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>
                  Additional Information
                </p>
                <p className='text-xl  font-medium text-slate-500'>
                  {additionnalInformation}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateExpedition;

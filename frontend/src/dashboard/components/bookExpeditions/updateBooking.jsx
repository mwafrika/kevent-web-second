import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  updateBookExpedition,
  getSingle,
} from '../../../redux/actions/bookExpedition';
import Header from '../header';

const UpdatePackage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { key } = useParams();

  const [expedition, setExpedition] = useState({
    Visitor_details: '',
    ticketNumber: 0,
    additionnalInformation: '',
    Status: 'pending',
  });

  const handleChange = (e) => {
    setExpedition({
      ...expedition,
      [e.target.name]: e.target.value,
    });
  };

  const { bookSingleExpedition } = useSelector(
    (state) => state.bookExpeditions
  );

  useEffect(() => {
    dispatch(getSingle(key));
  }, []);

  useEffect(() => {
    if (bookSingleExpedition) {
      setExpedition({
        ...bookSingleExpedition,
      });
    }
  }, [bookSingleExpedition]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBookExpedition(expedition, key, navigate));
  };

  const { Visitor_details, ticketNumber, additionnalInformation, Status } =
    expedition;

  return (
    <div className='mt-10 sm:mt-0 row-span-full mx-auto w-7/12'>
      <Header title='Editer le packet' />
      <div className='md:grid md:grid-cols-2 md:gap-6 mt-5'>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='shadow-xl overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='ticketNumber'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Ticket Number
                    </label>
                    <input
                      type='number'
                      value={ticketNumber || ''}
                      id='ticketNumber'
                      name='ticketNumber'
                      placeholder='Tickect Number'
                      onChange={(e) => handleChange(e)}
                      autoComplete='TicketNumber'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3 hidden'>
                    <label
                      htmlFor='bookedEndDate'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Status
                    </label>
                    <input
                      type='text'
                      name='Status'
                      id='Status'
                      placeholder='Status'
                      value={Status}
                      onChange={(e) => handleChange(e)}
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3 lg:col-span-full'>
                    <label
                      htmlFor='Visitor_details'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Visitor details
                    </label>
                    <textarea
                      type='text'
                      name='Visitor_details'
                      id='Visitor_details'
                      placeholder='Visitor details'
                      value={Visitor_details}
                      onChange={(e) => handleChange(e)}
                      autoComplete='description'
                      rows='5'
                      cols='5'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm resize-x'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3 lg:col-span-full'>
                    <label
                      htmlFor='additionnalInformation'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Additionnal Information
                    </label>
                    <textarea
                      type='text'
                      name='additionnalInformation'
                      id='additionnalInformation'
                      placeholder='Visitor details'
                      value={additionnalInformation}
                      onChange={(e) => handleChange(e)}
                      autoComplete='additionnalInformation'
                      rows='5'
                      cols='5'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm resize-x'
                    />
                  </div>
                </div>
              </div>
              <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                <button
                  type='submit'
                  className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePackage;

import React, { useState } from 'react';
import Header from './header';

const CreatePackage = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    street: '',
    city: '',
    region: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className='mt-10 sm:mt-0 row-span-full mx-auto w-7/12'>
      <Header title='Packets' />
      <div className='md:grid md:grid-cols-2 md:gap-6 mt-5'>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='shadow-xl overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Title
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      id='first-name'
                      onChange={(e) => handleChange(e)}
                      value={state.firstName}
                      autoComplete='given-name'
                      placeholder='Title'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Last name
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      id='last-name'
                      value={state.lastName}
                      onChange={(e) => handleChange(e)}
                      autoComplete='family-name'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='email-address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Metadata
                    </label>
                    <input
                      type='text'
                      placeholder='Metadata'
                      name='email'
                      id='email-address'
                      autoComplete='email'
                      value={state.email}
                      onChange={(e) => handleChange(e)}
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='country'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Country
                    </label>
                    <select
                      id='country'
                      name='country'
                      value={state.country}
                      onChange={(e) => handleChange(e)}
                      autoComplete='country-name'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    >
                      <option>Places</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='street-address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Tags
                    </label>
                    <input
                      type='text'
                      name='street'
                      id='street-address'
                      value={state.street}
                      onChange={(e) => handleChange(e)}
                      autoComplete='street-address'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='city'
                      className='block text-sm font-medium text-gray-700'
                    >
                      City
                    </label>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      value={state.city}
                      onChange={(e) => handleChange(e)}
                      autoComplete='address-level2'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='region'
                      className='block text-sm font-medium text-gray-700'
                    >
                      State / Province
                    </label>
                    <input
                      type='text'
                      name='region'
                      id='region'
                      value={state.region}
                      onChange={(e) => handleChange(e)}
                      autoComplete='address-level1'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      for='formFile'
                      class='form-label inline-block mb-2 text-gray-700'
                    >
                      Default file input example
                    </label>
                    <input
                      className='form-control block w-full px-3 py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                      type='file'
                      id='formFile'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3 lg:col-span-full'>
                    <label
                      htmlFor='postal-code'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Description
                    </label>
                    <textarea
                      type='text'
                      name='postalCode'
                      id='postal-code'
                      placeholder='Description'
                      value={state.postalCode}
                      onChange={(e) => handleChange(e)}
                      autoComplete='postal-code'
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
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePackage;

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPackages } from '../../redux/actions/package';
import Header from './header';

const CreatePackage = () => {
  const [state, setState] = useState({
    title: '',
    description: '',
    price: '',
    imageUrls: '',
    itineraire: '',
    metadata: 'my metadata',
    places: '',
    tags: '',
  });

  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const packages = useSelector((state) => state.packages);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPackages(state, navigate));
    setState({
      title: '',
      description: '',
      price: '',
      imageUrls: '',
      itineraire: '',
      metadata: '',
      places: '',
      tags: '',
    });
    resetFile();
    console.log(packages, 'created packages');
  };

  const resetFile = () => {
    ref.current.value = '';
  };

  const handleOnChangeImage = (event) => {
    setState((prevState) => ({
      ...prevState,
      imageUrls: event.target.files[0],
    }));
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
                      htmlFor='title'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Title
                    </label>
                    <input
                      type='text'
                      name='title'
                      id='title'
                      onChange={(e) => handleChange(e)}
                      value={state.title}
                      autoComplete='given-name'
                      placeholder='Title'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='description'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Price
                    </label>
                    <input
                      type='number'
                      value={state.price}
                      id='price'
                      name='price'
                      placeholder='Price'
                      onChange={(e) => handleChange(e)}
                      autoComplete='price'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='places'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Places
                    </label>
                    <select
                      id='places'
                      name='places'
                      value={state.places}
                      onChange={(e) => handleChange(e)}
                      autoComplete='places'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    >
                      <option>Places</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='tags'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Tags
                    </label>
                    <input
                      type='text'
                      name='tags'
                      id='tags'
                      placeholder='Tags'
                      value={state.tags}
                      onChange={(e) => handleChange(e)}
                      autoComplete='tags'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='itineraire'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Itineraire
                    </label>
                    <input
                      type='text'
                      name='itineraire'
                      id='itineraire'
                      placeholder='Itineraire'
                      value={state.itineraire}
                      onChange={(e) => handleChange(e)}
                      autoComplete='address-level2'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='formFile'
                      className='form-label text-sm  inline-block mb-2 text-gray-700'
                    >
                      Image
                    </label>
                    <input
                      className='w-full border border-gray-300 p-1  rounded-lg bg-white block text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 focus:file:bg-violet-100 cursor-pointer '
                      type='file'
                      id='formFile'
                      name='imageUrls'
                      onChange={(e) => handleOnChangeImage(e)}
                      autoComplete='imageUrls'
                      ref={ref}
                    />
                  </div>
                  <input type='hidden' id='formFile' name='metadata' />
                  <div className='col-span-6 sm:col-span-3 lg:col-span-full'>
                    <label
                      htmlFor='description'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Description
                    </label>
                    <textarea
                      type='text'
                      name='description'
                      id='description'
                      placeholder='Description'
                      value={state.description}
                      onChange={(e) => handleChange(e)}
                      autoComplete='description'
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

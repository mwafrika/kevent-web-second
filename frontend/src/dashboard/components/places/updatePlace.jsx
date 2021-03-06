import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePlaces, getSingle } from '../../../redux/actions/place';
import Header from '../header';

const UpdatePackage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { key } = useParams();

  const [places, setPlaces] = useState({
    name: '',
    addresse: '',
    description: '',
    tags: '',
    latLng: '',
    imageUrls: '',
  });

  const handleOnChangeImage = (event) => {
    setPlaces((prevState) => ({
      ...prevState,
      imageUrls: event.target.files[0],
    }));
  };

  const handleChange = (e) => {
    setPlaces({
      ...places,
      [e.target.name]: e.target.value,
    });
  };

  const { singlePlace } = useSelector((state) => state.places);

  useEffect(() => {
    dispatch(getSingle(key));
  }, []);

  useEffect(() => {
    if (singlePlace) {
      setPlaces({
        ...singlePlace,
      });
    }
  }, [singlePlace]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePlaces(key, places, navigate));
  };

  const ref = useRef();
  //  console.log(ref.current.value, 'Reference packages');
  const { description, addresse, latLng, name, tags } = places;

  return (
    <div className='mt-10 sm:mt-0 row-span-full mx-auto w-7/12'>
      <Header title='Place' />
      <div className='md:grid md:grid-cols-2 md:gap-6 mt-5'>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='shadow-xl overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      onChange={(e) => handleChange(e)}
                      value={name}
                      autoComplete='name'
                      placeholder='Name'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='addresse'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Addresse
                    </label>
                    <input
                      type='addresse'
                      value={addresse}
                      id='addresse'
                      name='addresse'
                      placeholder='Addresse'
                      onChange={(e) => handleChange(e)}
                      autoComplete='addresse'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
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
                      value={tags}
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
                      LatLng
                    </label>
                    <input
                      type='text'
                      name='latLng'
                      id='latLng'
                      placeholder='LatLng'
                      value={latLng}
                      onChange={(e) => handleChange(e)}
                      autoComplete='LatLng'
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
                      value={description}
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

export default UpdatePackage;

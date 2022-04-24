import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, getuser } from '../../../redux/actions/user';
import Header from '../header';

const UpdatePackage = () => {
  const [create, setCreate] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    surname: '',
    phone: '',
    address: '',
    sexe: '',
    profession: '',
    imageUrls: '',
    role: 'USER',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { key } = useParams();
  const ref = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(create, key, navigate));
  };

  const handleOnChange = (event) => {
    setCreate((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnChangeImage = (event) => {
    setCreate((prevState) => ({
      ...prevState,
      imageUrls: event.target.files[0],
    }));
  };

  const { singleUser } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getuser(key));
  }, []);

  useEffect(() => {
    if (singleUser) {
      setCreate({
        ...singleUser,
      });
    }
  }, [singleUser]);

  const {
    email,
    password,
    firstName,
    lastName,
    surname,
    phone,
    address,
    sexe,
    profession,
    role,
  } = create;
  console.log(role, 'Verify singleUser in updateUser');
  return (
    <div className='mt-10 sm:mt-0 row-span-full mx-auto w-7/12'>
      <Header title='Place' />
      <div className='md:grid md:grid-cols-2 md:gap-6 mt-5'>
        <div className='mt-5 md:mt-0 md:col-span-2'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='shadow-xl overflow-hidden sm:rounded-md'>
              <div className='px-4 py-5 sm:p-6'>
                <div className='grid grid-cols-6 gap-6'>
                  {/* <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      id='firstName'
                      onChange={(e) => handleOnChange(e)}
                      value={firstName}
                      disabled
                      autoComplete='firstName'
                      placeholder='First Name'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='lastName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      id='lastName'
                      placeholder='First Name'
                      value={lastName}
                      disabled
                      onChange={(e) => handleOnChange(e)}
                      autoComplete='lastName'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div> */}
                  {/* <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='surname'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Surname
                    </label>
                    <input
                      type='text'
                      name='surname'
                      id='surname'
                      disabled
                      placeholder='Surname'
                      value={surname}
                      onChange={(e) => handleOnChange(e)}
                      autoComplete='surname'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='firstName'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Phone
                    </label>
                    <input
                      type='text'
                      name='phone'
                      id='phone'
                      placeholder='Phone'
                      disabled
                      value={phone}
                      onChange={(e) => handleOnChange(e)}
                      autoComplete='phone'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='sexe'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Sexe
                    </label>
                    <input
                      type='text'
                      name='sexe'
                      id='sexe'
                      placeholder='Sexe'
                      disabled
                      value={sexe}
                      onChange={(e) => handleOnChange(e)}
                      autoComplete='sexe'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='profession'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Profession
                    </label>
                    <input
                      type='text'
                      name='profession'
                      id='profession'
                      placeholder='Profession'
                      disabled
                      value={profession}
                      onChange={(e) => handleOnChange(e)}
                      autoComplete='profession'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='address'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Addresse
                    </label>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      placeholder='Addresse'
                      value={address}
                      onChange={(e) => handleOnChange(e)}
                      autoComplete='address'
                      disabled
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div> */}
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='role'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Role
                    </label>
                    <input
                      type='text'
                      name='role'
                      id='role'
                      placeholder='Role'
                      value={role}
                      onChange={(e) => handleOnChange(e)}
                      autoComplete='role'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>
                  {/* <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      value={email}
                      id='email'
                      name='email'
                      placeholder='Email'
                      onChange={(e) => handleOnChange(e)}
                      disabled
                      autoComplete='email'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      disabled
                      placeholder='Password'
                      value={password}
                      onChange={(e) => handleOnChange(e)}
                      autoComplete='password'
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='surname'
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
                  </div> */}
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

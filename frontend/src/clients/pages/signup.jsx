import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/actions/user';

const Login = () => {
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

  const handleSignup = (event) => {
    event.preventDefault();
    dispatch(signup(create));
    setCreate(create);
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

  return (
    <div className='grid grid-cols-12 grid-rows-[100px_minmax(700px,1fr)_100px] h-screen bg-gray-100'>
      <div className='col-start-2 col-end-12 row-start-2 row-end-3 bg-white flex shadow-lg'>
        <div className='w-[45%]'>
          <img
            src='https://images.unsplash.com/photo-1610818423826-4b4579c7ea74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRvd25sb2Fkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
            alt='login'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-2/3 h-full flex items-center flex-col justify-center'>
          <div className='text-center w-full'>
            <h1 className='text-3xl font-bold mb-4 text-slate-700'>Sign Up</h1>
            <form
              className='flex-row flex-wrap justify-around w-full px-8 flex gap-y-4 mb-6 pt-4'
              onSubmit={handleSignup}
            >
              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white focus:bg-gray-100'
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  value={create.firstName}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white '
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  value={create.lastName}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white'
                  type='text'
                  placeholder='Surname'
                  name='surname'
                  value={create.surname}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white '
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={create.email}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white '
                  type='password'
                  placeholder='password'
                  name='password'
                  value={create.password}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white '
                  type='text'
                  name='phone'
                  placeholder='Phone number'
                  value={create.phone}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white '
                  type='text'
                  name='address'
                  placeholder='Addresse'
                  value={create.address}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white '
                  type='text'
                  name='sexe'
                  placeholder='Sexe'
                  value={create.sexe}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white '
                  type='text'
                  name='profession'
                  placeholder='Proffession'
                  value={create.profession}
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-1  rounded-lg bg-white block text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 focus:file:bg-violet-100 cursor-pointer 
                      '
                  type='file'
                  name='imageUrls'
                  onChange={handleOnChangeImage}
                  required
                />
              </div>

              <div className='w-[45%] flex flex-col my-2'>
                <input
                  className='w-full border border-gray-400 p-2 outline-none focus:border-blue-500 rounded-lg bg-white '
                  type='hidden'
                  name='role'
                  value={create.role}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <button
                type='submit'
                className='w-[60%] mt-5 bg-slate-500 text-white p-2 rounded-lg hover:bg-slate-600'
              >
                Sign Up
              </button>
            </form>

            <div className='text-sm text-gray-600 text-center mt-4'>
              Do you have an account?
              <span className='text-slate-700'>
                &nbsp;
                <a href='/login'>Login here</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

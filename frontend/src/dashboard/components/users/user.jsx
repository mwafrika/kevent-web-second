import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getuser, deleteUser } from '../../../redux/actions/user';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../header';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const User = () => {
  const dispatch = useDispatch();
  const { singleUser } = useSelector((state) => state.users);
  const { key } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getuser(key));
  }, [dispatch, key]);

  console.log(singleUser, 'check if single exist');
  const {
    firstName,
    lastName,
    surname,
    email,
    phone,
    address,
    sexe,
    profession,
    imageUrls,
    role,
    id,
  } = singleUser;

  const handleDelete = () => {
    dispatch(deleteUser(key, navigate));
  };

  return (
    <div className='mt-10 sm:mt-0 row-span-full mx-auto w-[95%]'>
      <Header title='User' />
      <div className='mt-5 flex flex-row shadow-2xl gap-x-5'>
        <div className='md:mt-0 md:col-span-2 h-20 pt-8 mb-5 flex gap-y-3 flex-col items-center px-5'>
          <div className='w-40 h-40'>
            <img
              src={imageUrls}
              alt='user'
              className='w-full h-full object-cover rounded-[50%]'
            />
          </div>
          <div className='flex flex-row gap-x-3 justify-center w-40 flex-wrap'>
            <p className='text-xl font-bold text-slate-500'>{firstName}</p>
            <p className='text-xl font-bold text-slate-500'>{lastName}</p>
            <p className='text-xl font-bold text-slate-500'>{surname}</p>
          </div>
          <div className='flex text-2xl w-16 justify-between'>
            <Link to={`/admin/edit/users/${key}`}>
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
        <div className='md:mt-0 md:col-span-2 h-[60vh]  flex flex-col justify-between'>
          <div className='w-full py-5 px-5 mx-auto '>
            <h1 className='mb-8 text-xl font-bold text-slate-700 gap-y-8'>
              USER DETAILS
            </h1>
            <ul className='flex flex-wrap justify-between flex-row gap-y-4'>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Email</p>
                <p className='text-xl  font-medium text-slate-500'>{email}</p>
              </li>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Phone</p>
                <p className='text-xl  font-medium text-slate-500'>{phone}</p>
              </li>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Addresse</p>
                <p className='text-xl  font-medium text-slate-500'>{address}</p>
              </li>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Sexe</p>
                <p className='text-xl  font-medium text-slate-500'>{sexe}</p>
              </li>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Email</p>
                <p className='text-xl  font-medium text-slate-500'>{email}</p>
              </li>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Profession</p>
                <p className='text-xl  font-medium text-slate-500'>
                  {profession}
                </p>
              </li>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Image</p>
                <p className='text-xl  font-medium text-slate-500'>
                  <a
                    href={`${imageUrls}`}
                    className='underline text-slate-600 hover:text-slate-500'
                  >{`Image-${id}`}</a>
                </p>
              </li>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Role</p>
                <p className='text-xl  font-medium text-slate-500'>{role}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingle, deletePlaces } from '../../../redux/actions/place';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../header';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreatePlace = () => {
  const dispatch = useDispatch();
  const { singlePlace } = useSelector((state) => state.places);
  const { key } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingle(key));
  }, [dispatch, key]);

  console.log(singlePlace, 'check if single exist');
  const { name, addresse, description, tags, latLng, imageUrls } = singlePlace;

  const handleDelete = () => {
    dispatch(deletePlaces(key, navigate));
  };

  return (
    <div className='mt-10 sm:mt-0 row-span-full mx-auto w-[95%]'>
      <Header title='Place' />
      <div className='mt-5 flex flex-col shadow-2xl'>
        <div className='md:mt-0 md:col-span-2 h-20 pt-8 mb-5 flex justify-between items-center px-5'>
          <div className=' flex gap-y-5 flex-col'>
            <h1 className='text-2xl font-bold text-gray-700'>Name</h1>
            <h1 className='text-xl font-bold text-slate-500'>{name}</h1>
          </div>
          <div className='flex text-2xl w-16 justify-between'>
            <Link to={`/admin/edit/places/${key}`}>
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
          <div className='w-1/2 py-5 px-5 mx-auto '>
            <h1 className='mb-8 text-xl font-bold text-slate-700 gap-y-8'>
              PLACE DETAILS
            </h1>
            <ul className='flex flex-wrap flex-row gap-y-4'>
              <li className='w-[50%]'>
                <p className='text-xl font-bold text-slate-700'>Description</p>
                <p className='text-lg  font-medium text-slate-500'>
                  {description}
                </p>
              </li>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Addresse</p>
                <p className='text-xl  font-medium text-slate-500'>
                  {' '}
                  {addresse}
                </p>
              </li>
              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>LatLng</p>
                <p className='text-xl  font-medium text-slate-500'>{latLng}</p>
              </li>

              <li className='w-[50%] flex-col flex gap-2'>
                <p className='text-xl font-bold text-slate-700'>Tags</p>
                <p className='text-xl  font-medium text-slate-500'>{tags}</p>
              </li>
            </ul>
          </div>
          <div className='w-1/2'>
            <img
              src={imageUrls}
              alt='imgs'
              className='
            w-full object-cover object-center h-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlace;

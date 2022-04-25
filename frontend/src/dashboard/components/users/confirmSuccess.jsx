import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getuser, deleteUser } from '../../../redux/actions/user';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user);

  return (
    <div className='flex w-full h-screen bg-slate-400 items-center'>
      <div className='w-[30rem] h-[30rem] bg-white rounded-lg mx-auto justify-around  flex flex-col'>
        <div className='w-[25rem] flex justify-center flex-col mx-auto text-center gap-y-10 text-slate-600 font-bold'>
          <h1 className='text-xl'>Success</h1>
          <p>
            Reset password was successful. Please login with your new password
            {
              <Link to='/login'>
                <span className='ml-2 text-sky-600'>here</span>
              </Link>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

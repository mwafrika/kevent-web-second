import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmpassword, deleteUser } from '../../../redux/actions/user';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId, token } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(confirmpassword(password, userId, token, navigate));
  };
  
  return (
    <div className='flex w-full h-screen bg-slate-200 items-center'>
      <div className='w-[30rem] h-[30rem] bg-white rounded-lg mx-auto justify-around  flex flex-col'>
        <form onSubmit={handleSubmit}>
          <div className='w-[25rem] flex justify-center flex-col mx-auto text-center gap-y-10 text-slate-600 font-bold'>
            <h1 className='text-xl'>Reset your password here</h1>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(event) => setEmail(event.target.value)}
              placeholder='Enter your password'
              className='h-10 w-full border border-slate-300 outline-slate-600 rounded-lg px-5'
            />
            <button
              type='submit'
              className='w-full h-10 bg-slate-500 text-white font-bold rounded-lg px-5 hover:bg-slate-600 hover:text-white'
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

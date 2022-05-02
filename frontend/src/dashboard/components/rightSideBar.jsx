import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

const RightSideBar = () => {
  const {
    user: {
      authUser: { email, imageUrls },
    },
    isLoggedIn,
  } = useSelector((state) => state.user);

  console.log(isLoggedIn, 'Auth user', email);
  return (
    <div className='col-span-1 px-4 row-span-full flex mx-auto text-center py-12 flex-col gap-y-4 sm:flex xs:hidden xxs:hidden xxxs:hidden'>
      <div className='w-28 h-28 mx-auto'>
        <img
          src={imageUrls}
          alt='user'
          className='w-full h-full object-cover rounded-[50%]'
        />
      </div>
      <p>{email ? email : ''}</p>
    </div>
  );
};

export default RightSideBar;

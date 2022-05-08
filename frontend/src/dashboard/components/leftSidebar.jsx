import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';
import {
  faCircleUser,
  faUserFriends,
  faHome,
  faArrowRightFromBracket,
  faCalendarCheck,
  faLocationDot,
  faPaperPlane,
  faBoxOpen,
  faBagShopping,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';

const LeftSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const {
    user: {
      authUser: { role },
    },
    isLoggedIn,
  } = useSelector((state) => state.user);
  // const { role } = useSelector((state) => state?.user?.user?.authUser);

  return (
    <div className=' bg-white shadow-lg col-span-1 row-span-full flex justify-between py-10 flex-col items-center'>
      <div className='flex flex-col gap-8 text-center'>
        <div className='col-span-1 row-span-full flex mx-auto text-center flex-col gap-y-4 xxxs:flex sm:hidden'>
          <span className='text-7xl text-slate-600'>
            <FontAwesomeIcon icon={faCircleUser} />
          </span>
          <p>Mwafrika Josue</p>
        </div>
        <Link to='/admin/home'>
          <span className='text-4xl text-slate-600'>
            <FontAwesomeIcon icon={faHome} />
          </span>
        </Link>
        <Link to='/admin/packages'>
          <span className='text-4xl text-slate-600'>
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
        </Link>
        <Link to='/admin/expeditions'>
          <span className='text-4xl text-slate-600'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </Link>

        <Link to='/admin/book/expeditions'>
          <span className='text-4xl text-slate-600'>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </span>
        </Link>
        <Link to='/admin/book/packages'>
          <span className='text-4xl text-slate-600'>
            <FontAwesomeIcon icon={faBoxOpen} />
          </span>
        </Link>
        {role === 'ADMIN' && (
          <>
            <Link to='/admin/places'>
              <span className='text-4xl text-slate-600'>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
            </Link>
            <Link to='/admin/users'>
              <span className='text-4xl text-slate-600'>
                <FontAwesomeIcon icon={faUserFriends} />
              </span>
            </Link>
          </>
        )}
      </div>
      <div className=''>
        <span
          className='text-4xl text-slate-600 cursor-pointer'
          onClick={Logout}
        >
          <FontAwesomeIcon icon={faPowerOff} />
        </span>
      </div>
    </div>
  );
};

export default LeftSidebar;

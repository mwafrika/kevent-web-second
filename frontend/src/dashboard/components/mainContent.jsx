import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { packackages } from '../../redux/actions/package';
import { Expeditions } from '../../redux/actions/expedition';
import { getBookings } from '../../redux/actions/bookPackage';
import { getExpeditionBookings } from '../../redux/actions/bookExpedition';
import { Places } from '../../redux/actions/place';
import { getusers } from '../../redux/actions/user';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';

import {
  faPaperPlane,
  faCircleUser,
  faUserFriends,
  faLocationDot,
  faBoxOpen,
  faCalendarCheck,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

const MainContent = () => {
  const { packages } = useSelector((state) => state.packages);
  const { expeditions } = useSelector((state) => state.expeditions);
  const { bookPackages } = useSelector((state) => state.bookPackages);
  const { bookExpeditions } = useSelector((state) => state.bookExpeditions);
  const { places } = useSelector((state) => state.places);
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(packackages());
    dispatch(Expeditions());
    dispatch(getBookings());
    dispatch(getExpeditionBookings());
    dispatch(Places());
    dispatch(getusers());
  }, []);

  const {
    user: {
      authUser: { role },
    },
    isLoggedIn,
  } = useSelector((state) => state.user);

  const handleDate = (today) => {
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  };

  return (
    <>
      <div className='row-span-full bg-gray-100'>
        <div className='flex flex-col w-11/12 mx-auto py-8'>
          <h1 className='mb-4 text-slate-500'>Dashboard</h1>
          <div className='w-full gap-y-8 gap-x-4 mb-12 grid sm:grid-cols-[repeat(auto-fill_,_minmax(19rem_,_1fr))] xxxs:grid-cols-[repeat(auto-fill_,_minmax(11rem_,_1fr))]'>
            <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
              <span className='text-4xl text-slate-600'>
                <FontAwesomeIcon icon={faBagShopping} />
              </span>

              <div className='flex flex-col gap-y-2'>
                <p className='text-3xl font-bold text-slate-600'>
                  {packages.length}
                </p>
                <p className='text-slate-500'>Package(s)</p>
              </div>
            </div>
            <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
              <span className='text-4xl text-slate-600'>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>

              <div className='flex flex-col gap-y-2'>
                <p className='text-3xl font-bold text-slate-600'>
                  {expeditions.length}
                </p>
                <p className='text-slate-500'>Expedition(s)</p>
              </div>
            </div>
            <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
              <span className='text-4xl text-slate-600'>
                <FontAwesomeIcon icon={faCalendarCheck} />
              </span>

              <div className='flex flex-col gap-y-2'>
                <p className='text-3xl font-bold text-slate-600'>
                  {bookExpeditions.length}
                </p>
                <p className='text-slate-500'>Booked Expedition(s)</p>
              </div>
            </div>
            <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
              <span className='text-4xl text-slate-600'>
                <FontAwesomeIcon icon={faBoxOpen} />
              </span>

              <div className='flex flex-col gap-y-2'>
                <p className='text-3xl font-bold text-slate-600'>
                  {bookPackages.length}
                </p>
                <p className='text-slate-500'>Booked package(s)</p>
              </div>
            </div>
            {role === 'ADMIN' && (
              <>
                <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
                  <span className='text-4xl text-slate-600'>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>

                  <div className='flex flex-col gap-y-2'>
                    <p className='text-3xl font-bold text-slate-600'>
                      {places.length}
                    </p>
                    <p className='text-slate-500'>Ville(s)</p>
                  </div>
                </div>
                <div className='h-24 bg-white shadow-lg rounded-lg flex justify-start items-center px-6 gap-x-6'>
                  <span className='text-4xl text-slate-600'>
                    <FontAwesomeIcon icon={faUserFriends} />
                  </span>

                  <div className='flex flex-col gap-y-2'>
                    <p className='text-3xl font-bold text-slate-600'>
                      {users.length}
                    </p>
                    <p className='text-slate-500'>Users</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className='w-full flex justify-between'>
            <div className='mb-4 text-slate-500'>Packet recents</div>
            <Link to='/admin/packages'>
              <span className='text-sm text-sky-400'>Voir plus</span>
            </Link>
          </div>
          <div className='w-full gap-y-8 gap-x-4 mb-12'>
            <div className='w-full gap-y-8 gap-x-10 grid grid-cols-[repeat(auto-fill_,_minmax(19rem_,_1fr))] xxxs:grid-cols-[repeat(auto-fill_,_minmax(11rem_,_1fr))]'>
              {packages.slice(0, 3).map((pack) => (
                <div className='h-full bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                  <Link
                    to={{
                      pathname: `/admin/packages/${pack.id}`.trim(),
                    }}
                  >
                    <img
                      src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-2_qfo9sk.svg'
                      alt=''
                      className='object-cover rounded-t-lg w-full  h-40'
                    />
                    <div className='flex flex-col px-5  pb-8'>
                      <div className='flex flex-row justify-between items-center '>
                        <p className='text-md font-semibold text-center text-slate-700  py-4'>
                          Bukavu
                        </p>
                        <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                          50$
                        </p>
                      </div>
                      <span className='text-md text-slate-700  py-0 my-0'>
                        {/* 2 days ago */}
                        {pack.createdAt.toDate().toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className='w-full flex justify-between'>
            <div className='mb-4 text-slate-500'>Expeditions recents</div>
            <Link to='/admin/expeditions'>
              <span className='text-sm text-sky-400'>Voir plus</span>
            </Link>
          </div>
          <div className='w-full gap-y-8 gap-x-4 mb-12'>
            <div className='w-full gap-y-8 gap-x-10 grid grid-cols-[repeat(auto-fill_,_minmax(19rem_,_1fr))] xxxs:grid-cols-[repeat(auto-fill_,_minmax(11rem_,_1fr))]'>
              {packages.slice(0, 3).map((pack) => (
                <div className='h-full bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                  <Link
                    to={{
                      pathname: `/admin/expeditions/${pack.id}`.trim(),
                    }}
                  >
                    <img
                      src='https://res.cloudinary.com/ujuzi/image/upload/v1643570908/Kevent/Rectangle_5-2_qfo9sk.svg'
                      alt=''
                      className='object-cover rounded-t-lg w-full  h-40'
                    />
                    <div className='flex flex-col px-5  pb-8'>
                      <div className='flex flex-row justify-between items-center '>
                        <p className='text-md font-semibold text-center text-slate-700  py-4'>
                          Bukavu
                        </p>
                        <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                          50$
                        </p>
                      </div>
                      <span className='text-md text-slate-700  py-0 my-0'>
                        {/* 2 days ago */}
                        {console.log(
                          pack.created_at,
                          'check date format valid'
                        )}
                        {moment(
                          handleDate(pack.created_at),
                          'YYYYMMDD'
                        ).fromNow()}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;

import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, getuser } from '../../../redux/actions/user';
import Header from '../header';

const UpdatePackage = () => {
  const [selectRole, setSelectRole] = useState({
    role: 'USER',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { key } = useParams();

  const { singleUser } = useSelector((state) => state.users);

  useEffect(() => {
    if (singleUser) {
      setSelectRole({
        ...singleUser,
      });
    }
  }, [singleUser]);

  useEffect(() => {
    dispatch(getuser(key));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateUser(selectRole, key, navigate));
  };

  const handleOnChange = (event) => {
    setSelectRole((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const roles = [
    {
      value: '',
      label: 'Select Role',
    },
    {
      value: 'USER',
      label: 'USER',
    },
    {
      value: 'ADMIN',
      label: 'ADMIN',
    },
    {
      value: 'SUPERADMIN',
      label: 'SUPERADMIN',
    },
    {
      value: 'GUEST',
      label: 'GUEST',
    },
  ];

  console.log(selectRole.role, 'Verify singleUser in updateUser');
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
                      htmlFor='role'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Role
                    </label>
                    <select
                      name='role'
                      value={selectRole.role}
                      id='role'
                      onChange={(e) => handleOnChange(e)}
                      className='bg-gray-50 border mt-1 border-gray-300 text-gray-900 focus:outline-none  focus:ring-1 focus:ring-sky-500 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-sm sm:text-sm'
                    >
                      {roles.map((role) => (
                        <option key={role.value} value={role.value}>
                          {role.label}
                        </option>
                      ))}
                    </select>
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

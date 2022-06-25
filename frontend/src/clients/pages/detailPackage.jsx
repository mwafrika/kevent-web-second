import React, { useEffect, useState } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import '../assets/customize.css';
import { Tab } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { packackages, getSingle } from '../../redux/actions/package';
import { ContactPackage } from '../../redux/actions/contact';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const DetailPackage = (props) => {
  const { key } = useParams();
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const { singlePackage, packages } = useSelector((state) => state.packages);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(packackages());
  }, []);
  useEffect(() => {
    dispatch(getSingle(key));
  }, [dispatch, key]);

  const related = packages.filter((pack) => pack.key !== parseInt(key));

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setContact({
      name: '',
      email: '',
      message: '',
      phone: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ContactPackage(contact, key, clearForm));
  };

  const {
    title,
    description,
    price,
    imageUrls,
    itineraire,
    places,
    tags,
    id,
    available,
  } = singlePackage;

  // Add tabs functionality

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  const [tab, setTab] = useState([
    {
      title: 'Summary',
      id: 1,
    },
    {
      title: 'Tab 2',
      id: 2,
    },
    {
      title: 'Tab 3',
      id: 3,
    },
  ]);

  useEffect(() => {
    setTab(tab);
  }, [tab]);
  // end tabs functionality

  return (
    <>
      <Header />
      <section className='flex h-full md:pt-24 md:pb-10'>
        <section className='h-full w-4/5 py-8 md:flex md:flex-row  md:w-4/5 mx-auto md:gap-x-12 gap-y-6 flex flex-col'>
          <div className='h-1/2 flex flex-col gap-y-6 md:pt-0 w-full xxxs:mt-16 xxs:mt-16 xs:mt-16'>
            <div className='w-full mx-auto flex flex-col gap-y-4'>
              <img
                src={imageUrls}
                alt=''
                className='object-cover w-full h-[30rem] rounded-2xl'
              />
              {/* Add tabs here */}
              <div className='w-full max-w-4xl px-2 py-16 sm:px-0'>
                <Tab.Group>
                  <Tab.List className='flex space-x-1 rounded-xl bg-slate-600 p-1'>
                    {Object.values(tab).map(({ id, title }) => (
                      <Tab
                        key={id}
                        className={({ selected }) =>
                          classNames(
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                              ? 'bg-white shadow'
                              : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                          )
                        }
                      >
                        {title}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className='mt-2'>
                    <Tab.Panel
                      className={classNames(
                        'rounded-xl bg-white p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                      )}
                    >
                      <div className='px-2 md:px-4 w-full title-description'>
                        <h1 className='text-lg md:text-2xl font-bold pb-4'>
                          {title}
                        </h1>
                        <p className='w-full md:w-3/4'>{description}</p>
                        <div className='flex gap-y-2 pt-8 w-full md:w-3/4 flex-wrap'>
                          <div className='flex flex-row gap-x-2 w-full md:1/2'>
                            <span className='font-bold  md:text-lg text-xl'>
                              Prix{' '}
                            </span>
                            <span className=' md:text-lg text-xl'>{`${price}$`}</span>
                          </div>

                          <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                            <span className='font-bold  md:text-lg text-xl'>
                              Statut{' '}
                            </span>
                            <span className=' md:text-lg text-xl'>
                              {available}
                            </span>
                          </div>

                          <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                            <span className='font-bold  md:text-lg text-xl'>
                              Ville{' '}
                            </span>
                            <span className=' md:text-lg text-xl'>
                              {places}
                            </span>
                          </div>
                          <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                            <span className='font-bold  md:text-lg text-xl'>
                              Itineraire{' '}
                            </span>
                            <span className=' md:text-lg text-xl'>
                              {itineraire}
                            </span>
                          </div>
                          <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                            <span className='font-bold  md:text-lg text-xl'>
                              Tags{' '}
                            </span>
                            <span className=' md:text-lg text-xl'>{tags}</span>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel
                      className={classNames(
                        'rounded-xl bg-white p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                      )}
                    >
                      <div className='px-2 md:px-4 w-full title-description'>
                        <h1 className='text-lg md:text-2xl font-bold pb-4'>
                          Title 2
                        </h1>
                      </div>
                      <p className='text-slate-500 mb-6'>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris eget ipsum eget nunc varius consectetur. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                      </p>
                      <p className='text-slate-500'>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris eget ipsum eget nunc varius consectetur. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                      </p>
                    </Tab.Panel>
                    <Tab.Panel
                      className={classNames(
                        'rounded-xl bg-white p-3',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                      )}
                    >
                      <div className='px-2 md:px-4 w-full title-description'>
                        <h1 className='text-lg md:text-2xl font-bold pb-4'>
                          Title 3
                        </h1>
                      </div>
                      <p className='text-slate-500 mb-6'>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris eget ipsum eget nunc varius consectetur. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                      </p>
                      <p className='text-slate-500'>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris eget ipsum eget nunc varius consectetur. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                        facilisi. Nulla facilisi. Nulla facilisi. Nulla
                      </p>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
              {/* End tabs here */}
            </div>
          </div>
          <section className='h-auto w-full md:w-1/3 rounded-2xl flex flex-col gap-y-4'>
            <div className='bg-slate-200 py-4 rounded-lg'>
              <div className='px-8 w-full title-description'>
                <h1 className='text-2xl font-bold pb-4'>Reservez</h1>
                <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
                  <div className='flex flex-col gap-y-4'>
                    <label className='text-sm font-bold'>Nom et prénom</label>
                    <input
                      type='text'
                      className='border border-gray-300 p-2 w-full rounded-lg'
                      placeholder='Votre nom et prénom'
                      name='name'
                      onChange={handleChange}
                      value={contact.name}
                    />
                  </div>
                  <div className='flex flex-col gap-y-4'>
                    <label className='text-sm font-bold'>
                      Numéro de téléphone
                    </label>
                    <input
                      type='text'
                      className='border border-gray-300 p-2 w-full rounded-lg'
                      placeholder='Votre numéro de téléphone'
                      name='phone'
                      onChange={handleChange}
                      value={contact.phone}
                    />
                  </div>
                  <div className='flex flex-col gap-y-4'>
                    <label className='text-sm font-bold'>Email</label>
                    <input
                      type='text'
                      className='border border-gray-300 p-2 w-full rounded-lg'
                      placeholder='Votre email'
                      name='email'
                      onChange={handleChange}
                      value={contact.email}
                    />
                  </div>
                  <div className='flex flex-col gap-y-4'>
                    <label className='text-sm font-bold'>Requete</label>
                    <textarea
                      className='border border-gray-300 p-2 w-full rounded-lg'
                      placeholder='Votre requete'
                      rows={4}
                      cols={30}
                      name='message'
                      onChange={handleChange}
                      value={contact.message}
                    />
                  </div>
                  <div className='w-full flex justify-center md:justify-start md:pl-9'>
                    <button
                      className='w-40 flex justify-center md:justify-start md:pl-9 gap-4 bg-slate-500 text-white font-bold py-2 rounded-lg mt-8'
                      type='submit'
                    >
                      <p className=''> Book Now</p>
                      <FontAwesomeIcon
                        icon={faBagShopping}
                        className='text-slate-300'
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='bg-slate-200 flex flex-col flex-wrap gap-y-2 py-4 px-4 rounded-lg'>
              <h1 className='text-xl font-bold pb-4 text-slate-700'>
                Packets Populaires
              </h1>
              {related.slice(0, 4).map((item) => (
                <Link to={`/packages/${item.id}`}>
                  <div
                    className='flex flex-row border-b-2 border-slate-300 py-4 gap-x-4'
                    key={item.id}
                  >
                    <img
                      src={item.imageUrls}
                      alt=''
                      className='object-cover h-16 w-1/3 xl:w-1/6 xxs:w-1/3.9 xs:w-1/3.9 lg:w-1/4 2xl:w-32 rounded-lg'
                    />
                    <div>
                      <h1 className='text-lg font-bold pb-2 text-slate-600'>
                        {item.title}
                      </h1>
                      <p className='text-sm text-slate-500'>
                        {item.description.slice(0, 35)} ...
                        <span className='text-slate-500 font-bold'>
                          voir plus
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default DetailPackage;

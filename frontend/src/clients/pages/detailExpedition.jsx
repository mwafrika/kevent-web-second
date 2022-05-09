import React, { useEffect, useState } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import '../assets/customize.css';
import { useDispatch, useSelector } from 'react-redux';
import { Expeditions, getSingle } from '../../redux/actions/expedition';
import { Contacts } from '../../redux/actions/contact';
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

  const { singleExpedition, expeditions } = useSelector(
    (state) => state.expeditions
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(Expeditions());
  }, []);
  useEffect(() => {
    dispatch(getSingle(key));
  }, [dispatch, key]);

  const related = expeditions.filter(
    (expedition) => expedition.key !== parseInt(key)
  );

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
    dispatch(Contacts(contact, key, clearForm));
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
    start_date,
    end_date,
    available,
  } = singleExpedition;

  return (
    <>
      <Header />
      <section className='flex h-full md:pt-24 md:pb-10'>
        <section className='h-full w-4/5 py-8 md:flex md:flex-row  md:w-4/5 mx-auto md:gap-x-12 gap-y-6 flex flex-col'>
          <div className='h-1/2 flex flex-col gap-y-6 md:pt-0 w-full xxxs:mt-16 xxs:mt-16 xs:mt-16'>
            <div className='w-full mx-auto flex flex-col gap-y-8'>
              <img
                src={imageUrls}
                alt=''
                className='object-cover w-full h-[30rem] rounded-2xl'
              />
              <div className='px-4 md:px-8 w-full title-description'>
                <h1 className='text-lg md:text-2xl font-bold pb-4'>{title}</h1>
                <p className='w-full md:w-3/4'>{description}</p>
                <div className='flex gap-y-2 pt-8 w-full md:w-3/4 flex-wrap'>
                  <div className='flex flex-row gap-x-2 w-full md:1/2'>
                    <span className='font-bold  md:text-lg text-xl'>Prix </span>
                    <span className=' md:text-lg text-xl'>{`${price}$`}</span>
                  </div>

                  <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                    <span className='font-bold  md:text-lg text-xl'>Statut </span>
                    <span className=' md:text-lg text-xl'>{available}</span>
                  </div>

                  <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                    <span className='font-bold  md:text-lg text-xl'>Ville </span>
                    <span className=' md:text-lg text-xl'>{places}</span>
                  </div>
                  <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                    <span className='font-bold  md:text-lg text-xl'>Itineraire </span>
                    <span className=' md:text-lg text-xl'>{itineraire}</span>
                  </div>
                  <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                    <span className='font-bold  md:text-lg text-xl'>Tags </span>
                    <span className=' md:text-lg text-xl'>{tags}</span>
                  </div>
                  <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                    <span className='font-bold  md:text-lg text-xl'>Debut </span>
                    <span className=' md:text-lg text-xl'>{start_date}</span>
                  </div>
                  <div className='flex flex-row gap-x-2 md:w-1/2 w-full'>
                    <span className='font-bold  md:text-lg text-xl'>Fin </span>
                    <span className=' md:text-lg text-xl'>{end_date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className='h-auto w-full md:w-1/3 pt-8 md:pt-8 rounded-2xl flex flex-col gap-y-4'>
            <div className='bg-slate-200 py-4'>
              <div className='px-4 md:px-8 w-full title-description'>
                <h1 className='text-2xl font-bold pb-4'>Reservez</h1>
                <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
                  <div className='flex flex-col gap-y-4'>
                    <label className='text-sm font-bold'>Nom et prénom</label>
                    <input
                      type='text'
                      className='border border-gray-300 p-2 w-full'
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
                      className='border border-gray-300 p-2 w-full'
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
                      className='border border-gray-300 p-2 w-full'
                      placeholder='Votre email'
                      name='email'
                      onChange={handleChange}
                      value={contact.email}
                    />
                  </div>
                  <div className='flex flex-col gap-y-4'>
                    <label className='text-sm font-bold'>Requete</label>
                    <textarea
                      className='border border-gray-300 p-2 w-full'
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
            <div className='bg-slate-200 flex flex-col flex-wrap gap-y-2 py-4 px-4'>
              <h1 className='text-xl font-bold pb-4 text-slate-700'>
                Expeditions Populaires
              </h1>
              {related.slice(0, 4).map((item) => (
                <Link to={`/expeditions/${item.id}`}>
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

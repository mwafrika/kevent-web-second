import React, { useEffect } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import data from '../api/data';
import '../assets/customize.css';
import { useDispatch, useSelector } from 'react-redux';
import { packackages, getSingle } from '../../redux/actions/package';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faBagShopping } from '@fortawesome/free-solid-svg-icons';
// const { expeditions, packages } = data;

const DetailPackage = (props) => {
  const { key } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(packackages());
  }, []);

  const dispatch = useDispatch();
  const { singlePackage, packages } = useSelector((state) => state.packages);

  const navigate = useNavigate();

  // const items = expeditions.find(
  //   (expedition) => expedition.key === parseInt(key)
  // );
  const related = packages.filter(
    (expedition) => expedition.key !== parseInt(key)
  );
  // const { date, description, image, lieu, prix } = items;

  useEffect(() => {
    dispatch(getSingle(key));
  }, [dispatch, key]);

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

  return (
    <>
      <Header />
      <section className='flex h-full md:pt-24 md:pb-10'>
        <section className='h-full w-11/12 py-8 md:flex md:flex-row  md:w-11/12 mx-auto md:gap-x-6 gap-y-6 flex flex-col'>
          <div className='h-1/2 flex flex-col gap-y-6 md:pt-0 w-full xxxs:mt-16 xxs:mt-16 xs:mt-16'>
            <div className='w-full mx-auto h-96'>
              <img
                src={imageUrls}
                alt=''
                className='object-cover w-full h-full rounded-2xl'
              />
            </div>
            <div className='overflow-auto whitespace-nowrap no-scrollbar'>
              <div className='flex flex-row  h-24  w-full gap-4 md:gap-3 lg:gap-x-5 xl:gap-x-6'>
                {related.map((item) => (
                  <img
                    src={item.imageUrls}
                    alt=''
                    className='object-cover w-1/3 xl:w-1/6 xxs:w-1/3.9 xs:w-1/3.9 lg:w-1/4 2xl:w-32 rounded-lg'
                    key={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
          <section className='h-auto w-full pt-8 md:pt-8 bg-slate-200 rounded-2xl'>
            <div className='px-8 w-full title-description'>
              <h1 className='text-2xl font-bold pb-4'>{title}</h1>
              <p>{description}</p>
              <div className='flex flex-col gap-y-2 pt-8'>
                <p>
                  <span className='font-bold'>Prix:</span> {price}
                </p>
                <p>
                  <span className='font-bold'>Disponibilite:</span> {available}
                </p>
                <p>
                  {' '}
                  <span className='font-bold'>Ville:</span> {places}
                </p>
                <p>
                  <span className='font-bold'>Itineraire: </span>
                  {itineraire}
                </p>
                <p>
                  <span className='font-bold'>Tags: </span>
                  {tags}
                </p>
              </div>
            </div>
            <div className='w-full flex justify-center md:justify-start md:pl-9 gap-4'>
              <Link to={`/login`}>
                <button
                  className='w-40 flex justify-center md:justify-start md:pl-9 gap-4 bg-slate-500 text-white font-bold py-2 rounded-lg mt-8'
                  type='button'
                >
                  <p className=''> Book Now</p>
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    className='text-slate-300'
                  />
                </button>
              </Link>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default DetailPackage;

import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import data from './data';
import './customize.css';
const { expeditions, packages } = data;

const DetailPackage = (props) => {
  const { key } = useParams();

  const items = packages.find((expedition) => expedition.key === parseInt(key));
  const related = packages.filter(
    (expedition) => expedition.key !== parseInt(key)
  );
  const { date, description, image, lieu, prix } = items;

  console.log(related, 'mwafrika');
  return (
    <>
      <Header />
      <section className='flex h-full md:pt-24 md:pb-10'>
        <section className='h-full w-11/12 py-8 md:flex md:flex-row  md:w-11/12 mx-auto md:gap-x-6 gap-y-6 flex flex-col'>
          <div className='h-1/2 flex flex-col gap-y-6 md:pt-0 w-full xxxs:mt-16 xxs:mt-16 xs:mt-16'>
            <div className='w-full mx-auto h-96'>
              <img
                src={image}
                alt=''
                className='object-cover w-full h-full rounded-2xl'
              />
            </div>
            <div className='overflow-auto whitespace-nowrap no-scrollbar'>
              <div className='flex flex-row  h-24  w-full gap-4 md:gap-3 lg:gap-x-5 xl:gap-x-6'>
                {related.map((item) => (
                  // <Link to={`/packages/${item.key}`}>
                  <img
                    src={item.image}
                    alt=''
                    className='object-cover w-1/3 xl:w-1/6 xxs:w-1/3.9 xs:w-1/3.9 lg:w-1/4 2xl:w-32 rounded-lg'
                  />
                  // </Link>
                ))}
              </div>
            </div>
          </div>
          <section className='h-auto w-full pt-8 md:pt-8 bg-slate-200 rounded-2xl'>
            <div className='px-8 w-full title-description'>
              <h1 className='text-2xl font-bold pb-4'>Details Packages</h1>
              <p>{description}</p>
            </div>
            <div className='w-full flex justify-center md:justify-start md:pl-9 gap-4'>
              <p className='btn-filter px-3 py-1 my-8 rounded-lg font-bold'>
                PH : 12 - 15
              </p>
              <p className='btn-filter px-3 py-1 my-8 rounded-lg font-bold'>
                Temp : 12 - 15
              </p>
            </div>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default DetailPackage;

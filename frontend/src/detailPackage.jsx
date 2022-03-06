import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import data from './data';
import './customize.css';
const { expeditions, packages } = data;

const DetailPackage = (props) => {
  const { key } = useParams();

  expeditions.find((expedition) => {
    return expedition.key === key;
  });
  console.log(props, 'mwafrika');
  return (
    <>
      <Header />
      <section className='flex h-full md:pt-24 md:pb-10'>
        <section className='h-full w-11/12 py-8 md:flex md:flex-row  md:w-11/12 mx-auto md:gap-x-6 gap-y-6 flex flex-col'>
          <div className='h-1/2 flex flex-col gap-y-6 md:pt-0 w-full'>
            <div className='w-full mx-auto h-96'>
              <img
                src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                alt=''
                className='object-cover w-full h-full rounded-2xl'
              />
            </div>
            <div className='overflow-auto whitespace-nowrap no-scrollbar'>
              <div className='flex flex-row  h-24  w-full justify-center gap-4 md:gap-3 lg:gap-x-6 xl:gap-x-8'>
                <img
                  src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                  alt=''
                  className='object-cover w-1/6 rounded-lg'
                />
                <img
                  src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                  alt=''
                  className='object-cover w-1/6 rounded-lg'
                />
                <img
                  src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                  alt=''
                  className='object-cover w-1/6 rounded-lg'
                />
                <img
                  src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                  alt=''
                  className='object-cover w-1/6 rounded-lg'
                />
                <img
                  src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                  alt=''
                  className='object-cover rounded-lg w-1/6'
                />
                <img
                  src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                  alt=''
                  className='object-cover rounded-lg w-1/6'
                />

                <img
                  src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                  alt=''
                  className='object-cover rounded-lg w-1/6'
                />

                <img
                  src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                  alt=''
                  className='object-cover w-1/6 rounded-lg'
                />
                <img
                  src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                  alt=''
                  className='object-cover w-1/6 rounded-lg'
                />
              </div>
            </div>
          </div>
          <section className='h-auto w-full pt-8 md:pt-8 bg-slate-200 rounded-2xl'>
            <div className='px-8 w-full title-description'>
              <h1 className='text-2xl font-bold pb-4'>Details Packages</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt illum unde aut distinctio repudiandae modi praesentium
                odio error sit ex mollitia saepe itaque ea repellat, perferendis
                iste eius explicabo soluta! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
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

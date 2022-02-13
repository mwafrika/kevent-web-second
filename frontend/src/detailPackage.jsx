import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import data from './data';
const { expeditions, packages } = data;

const DetailExpedition = (props) => {
  const { key } = useParams();

  expeditions.find((expedition) => {
    return expedition.key === key;
  });
  console.log(props, 'mwafrika');
  return (
    <>
      <Header />
      <section className='flex h-full md:pt-24 md:pb-10'>
        <section className='h-full w-11/12 py-8 md:flex md:flex-row  md:w-11/12 mx-auto md:gap-x-6'>
          <div className='h-full flex flex-col gap-y-4 pt-16 md:pt-0 w-full pb-4'>
            <div className='w-full h-3/4 mx-auto md:h-80'>
              <img
                src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                alt=''
                className='object-cover w-full h-full rounded-lg'
              />
            </div>
            <div className='flex flex-row h-1/5 w-full justify-center gap-4 md:gap-4 lg:gap-x-6 xl:gap-x-8'>
              <img
                src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                alt=''
                className='object-cover w-15 rounded-lg'
              />
              <img
                src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                alt=''
                className='object-cover w-15 rounded-lg'
              />
              <img
                src='https://res.cloudinary.com/ujuzi/image/upload/v1643570903/Kevent/Rectangle_5-4_dteojs.svg'
                alt=''
                className='object-cover w-15 rounded-lg'
              />
            </div>
          </div>
          <section className='h-full w-full pt-8 md:pt-8 bg-slate-200 rounded-lg'>
            <div className='h-full px-8 w-full'>
              <h1 className='text-2xl font-bold pb-4'>Details Package</h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              illum unde aut distinctio repudiandae modi praesentium odio error
              sit ex mollitia saepe itaque ea repellat, perferendis iste eius
              explicabo soluta! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Deserunt illum unde aut distinctio repudiandae
              modi praesentium odio error sit ex mollitia saepe itaque ea
              repellat, perferendis iste eius explicabo soluta!
            </div>
            <div className='w-full flex justify-center md:justify-start md:pl-9 gap-4'>
              <p className='bg-zinc-400 px-3 py-1 my-8 rounded-lg font-bold'>
                PH : 12 - 15
              </p>
              <p className='bg-zinc-400 px-3 py-1 my-8 rounded-lg font-bold'>
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

export default DetailExpedition;

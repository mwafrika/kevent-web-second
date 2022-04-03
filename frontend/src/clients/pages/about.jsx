import React from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
const about = () => {
  return (
    <>
      <section className='flex min-h-screen flex-col'>
        <Header />
        <div className='h-full w-full xxxs:pb-12 xxs:pb-12 xs:pb-12 md:pb-12'>
          <div className='h-56 w-full bg-slate-600 mt-14 xxxs:text-center xxxs:h-auto xxxs:py-8 xxs:text-center xxs:h-auto xxs:py-8 xs:text-center xs:h-auto xs:py-8 md:text-center'>
            <div className='container mx-auto flex justify-center items-center h-full flex-col'>
              <h1 className='text-3xl text-white font-bold pb-6'>
                A propos de nous
              </h1>
              <h2 className=' text-lg text-white font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                eaque,
              </h2>
              <h2 className=' text-lg text-white font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                eaque, sit amet consectetur adipisicing elit. Enim eaque,
              </h2>
            </div>
          </div>
          <h1 className=' text-3xl text-slate-600 font-bold text-center xxxs:py-8 xxs:py-8 py-8'>
            Notre Equipe
          </h1>
          <div className='xl:gap-y-10 xl:justify-center xxxs:flex xxxs:flex-col xxxs:justify-center xxxs:items-center xxxs:gap-y-8 xxs:flex  xs:flex xxs:flex-col xs:flex-col xxs:gap-y-8 xs:gap-y-8 xs:items-center xxs:items-center xs:justify-center xxs:justify-center md:flex md:flex-row md:justify-around md:flex-wrap md:gap-y-8 md:items-center md:mx-4 lg:gap-x-10 xl:pb-32 xl:pt-10 lg:flex-wrap'>
            <div
              className='xl:w-1/5 lg:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxxs:flex xxxs:items-center xxs:flex xs:flex xxs:items-center xs:items-center xxs:justify-center xs:justify-center xxxs:justify-center xxs:flex-col xs:flex-col xxxs:flex-col md:flex md:flex-col md:justify-center md:items-center
            shadow-lg rounded-lg p-8 hover:shadow-xl cursor-pointer hover:transition-all duration-300'
            >
              <img
                src='https://res.cloudinary.com/ujuzi/image/upload/v1643635492/Kevent/IMG_4892_amka9a.jpg'
                alt='profile'
                className='object-cover rounded-full w-32 h-32'
              />
              <div className='px-2'>
                <p className='text-center text-slate-700 text-xl font-bold mt-5'>
                  Mwafrika
                </p>
                <p className='text-center text-slate-700 text-xl mt-2'>
                  CEO & Founder
                </p>
                <p className='text-center text-slate-700 text-xl mt-2'>
                  Lorem ipsum dolor sit amet.
                </p>
                <p className='text-center text-slate-700 text-xl mt-2'>
                  mwafrikajosue@gmail.com
                </p>
              </div>
              <button
                className='bg-slate-700 text-white font-bold py-2 px-4 rounded-full mt-5 
          hover:bg-slate-800
          '
              >
                Contact
              </button>
            </div>

            <div className='xl:w-1/5 lg:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxxs:flex xxxs:items-center xxs:flex xs:flex xxs:items-center xs:items-center xxs:justify-center xs:justify-center xxxs:justify-center xxs:flex-col xs:flex-col xxxs:flex-col md:flex md:flex-col md:justify-center md:items-center shadow-lg rounded-lg p-8 hover:shadow-xl cursor-pointer hover:transition-all duration-300'>
              <img
                src='https://res.cloudinary.com/ujuzi/image/upload/v1643635492/Kevent/IMG_4892_amka9a.jpg'
                alt='profile'
                className='object-cover rounded-full w-32 h-32'
              />

              <div className='px-2'>
                <p className='text-center text-slate-700 text-xl font-bold mt-5'>
                  Mwafrika
                </p>
                <p className='text-center text-slate-700 text-xl mt-2'>
                  CEO & Founder
                </p>
                <p className='text-center text-slate-700 text-xl mt-2'>
                  Lorem ipsum dolor sit amet.
                </p>
                <p className='text-center text-slate-700 text-xl mt-2'>
                  mwafrikajosue@gmail.com
                </p>
              </div>

              <button className='bg-slate-700 text-white font-bold py-2 px-4 rounded-full mt-5 hover:bg-slate-800'>
                Contact
              </button>
            </div>

            <div className='xl:w-1/5 lg:w-15 xxxs:w-4/5 xxxs:h-full xxxs:mx-auto xxxs:flex xxxs:items-center xxs:flex xs:flex xxs:items-center xs:items-center xxs:justify-center xs:justify-center xxxs:justify-center xxs:flex-col xs:flex-col xxxs:flex-col md:flex md:flex-col md:justify-center md:items-center shadow-lg rounded-lg p-8 hover:shadow-xl cursor-pointer hover:transition-all duration-300'>
              <img
                src='https://res.cloudinary.com/ujuzi/image/upload/v1643635492/Kevent/IMG_4892_amka9a.jpg'
                alt='profile'
                className='object-cover rounded-full w-32 h-32'
              />

              <div className='px-2'>
                <p className='text-center text-slate-700 text-xl font-bold mt-5'>
                  Mwafrika
                </p>
                <p className='text-center text-slate-700 text-xl mt-2'>
                  CEO & Founder
                </p>
                <p className='text-center text-slate-700 text-xl mt-2'>
                  Lorem ipsum dolor sit amet.
                </p>
                <p className='text-center text-slate-700 text-xl mt-2'>
                  mwafrikajosue@gmail.com
                </p>
              </div>

              <button className='bg-slate-700 text-white font-bold py-2 px-4 rounded-full mt-5 hover:bg-slate-800'>
                Contact
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default about;

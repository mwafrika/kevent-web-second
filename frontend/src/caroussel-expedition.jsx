import React, { Component, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DemoCarousel = ({ expeditions }) => {
  let [expedition, setExpedition] = useState({});
  return (
    <Carousel
      className='xxxs:h-full xxxs:w-full xxs:w-full xxs:h-full items-center md:w-4/5 md:my-0 md:mx-auto md:flex-row md:items-center md:px-4 md:flex-wrap md:justify-between
      xl:justify-between xl:w-3/4 lg:item-carousel lg:w-4/5 lg:flex-row lg:mx-auto lg:gap-x-5 lg:my-0 lg:items-center lg:px-8 lg:flex-wrap lg:justify-between md:pt-12 md:pb-28 lg:pb-28 xl:pb-28 sm:pb-28 xs:pb-28 xxs:pb-28  xxxs:pb-28'
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      showDots={true}
      showStatus={true}
      showThumbs={false}
      useKeyboardArrows={true}
      renderDotsOutside={false}
      renderButtonGroupOutside={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <button className='prev' onClick={onClickHandler}>
          <i className='fa fa-angle-left' aria-hidden='true'></i>
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <button className='next' onClick={onClickHandler}>
          <i className='fa fa-angle-right' aria-hidden='true'></i>
        </button>
      )}
      transitionDuration={500}
      transitionMode='fade'
    >
      {expeditions.map(({ image, date, prix, lieu, key }, index) => (
        <div
          className='h-full md:gap-x-4 md:w-full 2xl:w-full lg:w-72 
                      xxxs:w-full w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
                    cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg'
          key={key}
        >
          <Link
            to={{
              pathname: `/expeditions/${key}`.trim(),
              state: {
                ...image,
              },
            }}
            
          >
            <>
              <img src={image} alt='' className='object-cover rounded-t-lg' />
              <div className='flex flex-col px-5 pb-10'>
                <div className='flex flex-row justify-between items-center '>
                  <p className='text-md font-semibold text-center text-slate-700  py-4'>
                    {lieu}
                  </p>
                  <p className='text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl'>
                    {prix}
                  </p>
                </div>
                <span className='text-md text-slate-700  py-0 my-0'>
                  {date}
                </span>
              </div>
            </>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default DemoCarousel;

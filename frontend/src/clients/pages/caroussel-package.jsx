import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const caroussel2 = ({ packages }) => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      arrows={true}
      showDots={false}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <button
          className='prev'
          onClick={onClickHandler}
          style={
            hasPrev && {
              left: 'calc(-2% + 2px)',
              right: 'calc(4% + 1px)',
            }
          }
        >
          <i className='fa fa-angle-left' aria-hidden='true'></i>
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <button className='next' onClick={onClickHandler}>
          <i className='fa fa-angle-right' aria-hidden='true'></i>
        </button>
      )}
      className='md:mt-10  md:gap-x-4'
    >
      {packages
        .slice(0, 4)
        .map(
          (
            { imageUrls, date, prix, lieu, id, places, available, description },
            index
          ) => (
            <div
              className='2xl:w-11/12  lg:w-11/12 h-96 relative md:w-full md:h-96 lg:h-96 xl:h-96 rounded-2xl sm:w-64 xxs:mb-6 xs:mb-6 xxxs:mb-6'
              key={id}
            >
              <Link to={`/packages/${id}`}>
                <img
                  src={imageUrls}
                  alt='plantes'
                  className='absolute w-full h-full object-cover hover:opacity-75 transition-all duration-700 ease-in-out rounded-2xl'
                />
                <div className='absolute inset-0 bg-gray-900 bg-opacity-50 top-48 rounded-2xl'>
                  <h2 className=' mt-5 ml-5 text-white text-lg font-semibold'>
                    {places}
                  </h2>
                  <h3 className='mt-5 mx-5  text-white text-sm font-semibold'>
                    {description}
                  </h3>
                </div>
                <div className='absolute right-0 bottom-0 rounded-2xl'>
                  <p className=' text-lg font-semibold  text-white bg-gray-900 bg-opacity-75 py-1 px-4 rounded-2xl'>
                    {available}
                  </p>
                </div>
              </Link>
            </div>
          )
        )}
    </Carousel>
  );
};

export default caroussel2;

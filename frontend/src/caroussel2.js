import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-multi-carousel/lib/styles.css';
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

const caroussel2 = () => {
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
          className="prev"
          onClick={onClickHandler}
          style={
            hasPrev && {
              left: 'calc(-2% + 2px)',
              right: 'calc(4% + 1px)',
            }
          }
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <button className="next" onClick={onClickHandler}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      )}
      className="md:mt-10  md:gap-x-4"
    >
      <div className=" bg-slate-300 2xl:w-11/12  lg:w-11/12 h-96 relative md:w-full md:h-full rounded-lg sm:w-64 xxs:mb-6 xs:mb-6 xxxs:mb-6">
        <a href="/">
          <img
            src="https://images.unsplash.com/photo-1437448317784-3a480be9571e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG93bmxvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=5000&q=60"
            alt="plantes"
            className="absolute w-full h-full object-cover hover:opacity-75 transition-all duration-700 ease-in-out rounded-lg"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 top-48 rounded-b-lg">
            <h2 className=" mt-5 ml-5 text-white text-lg font-semibold">
              Nyiragongo
            </h2>
            <h3 className="mt-5 ml-5 text-white text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              iste!
            </h3>
          </div>
          <div className="absolute right-0 bottom-0 rounded-lg">
            <p className=" text-lg font-semibold  text-white bg-gray-900 bg-opacity-75 py-1 px-4 rounded-md">
              150$
            </p>
          </div>
        </a>
      </div>
      <div className=" bg-slate-300  2xl:w-11/12 lg:w-72 h-96 relative md:w-full rounded-lg sm:w-64 xs:mb-6 xxs:mb-6 xxxs:mb-6">
        <a href="/">
          <img
            src="https://images.unsplash.com/photo-1437448317784-3a480be9571e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG93bmxvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=5000&q=60"
            alt="plantes"
            className="absolute w-full h-full object-cover hover:opacity-75 transition-all duration-700 ease-in-out rounded-lg"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 top-48 rounded-b-lg">
            <h2 className=" mt-5 ml-5 text-white text-lg font-semibold">
              Nyiragongo
            </h2>
            <h3 className="mt-5 ml-5 text-white text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              iste!
            </h3>
          </div>
          <div className="absolute right-0 bottom-0 rounded-lg">
            <p className=" text-lg font-semibold  text-white bg-gray-900 bg-opacity-75 py-1 px-4 rounded-md">
              150$
            </p>
          </div>
        </a>
      </div>
      <div className=" bg-slate-300 2xl:w-11/12 lg:w-72 md:w-full h-96 relative rounded-lg sm:w-64">
        <a href="/">
          <img
            src="https://images.unsplash.com/photo-1437448317784-3a480be9571e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG93bmxvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=5000&q=60"
            alt="plantes"
            className="absolute w-full h-full object-cover hover:opacity-75 transition-all duration-700 ease-in-out rounded-lg"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 top-48 rounded-b-lg">
            <h2 className=" mt-5 ml-5 text-white text-lg font-semibold">
              Nyiragongo
            </h2>
            <h3 className="mt-5 ml-5 text-white text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              iste!
            </h3>
          </div>
          <div className="absolute right-0 bottom-0 rounded-lg">
            <p className=" text-lg font-semibold  text-white bg-gray-900 bg-opacity-75 py-1 px-4 rounded-md">
              150$
            </p>
          </div>
        </a>
      </div>
    </Carousel>
  );
};

export default caroussel2;

//className="col-span-1 md:col-span-1 sm:col-span w-full flex lg:flex-row md:flex-row md:justify-between sm:justify-around lg:justify-between md:px-6 lg:px-4 md:gap-x-8 md:flex-nowrap lg:flex-nowrap sm:flex-wrap sm:gap-x-8 sm:gap-y-4 xs:flex-col xs:items-center xs:mb-6 xxs:flex-col xxs:items-center xxxs:flex-col xxxs:items-center"

import React, { Component } from "react";
import moment from "moment";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// multi carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

const DemoCarousel = () => {
  return (
    <Carousel
      className="flex flex-col w-full h-full px-6 items-center md:flex-row md:items-center md:w-full  md:px-4 md:flex-wrap md:justify-between
    lg:justify-between lg:flex-row lg:items-center lg:w-full lg:px-8 lg:flex-wrap md:pt-28 md:pb-28 lg:pb-28 xl:pb-28"
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
        <button className="prev" onClick={onClickHandler}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <button className="next" onClick={onClickHandler}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      )}
      transitionDuration={500}
      transitionMode="fade"
    >
      <div
        className="h-full md:w-5/12 lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
          cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
          "
      >
        <img
          src="https://images.pexels.com/photos/6324285/pexels-photo-6324285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
          alt=""
          className="object-cover rounded-t-lg"
        />
        <div className="flex flex-col px-5 pb-10">
          <div className="flex flex-row justify-between items-center ">
            <p className="text-md font-semibold text-center text-slate-700  py-4">
              Nyiragongo
            </p>
            <p className="text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl">
              50$
            </p>
          </div>
          <span className="text-md text-slate-700  py-0 my-0">
            {moment(
              "2020-05-01T00:00:00.000Z",
              "YYYY-MM-DDTHH:mm:ss.SSSZ"
            ).fromNow()}
          </span>
        </div>
      </div>
      <div
        className="h-full md:w-5/12 lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       "
      >
        <img
          src="https://images.pexels.com/photos/6411959/pexels-photo-6411959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
          alt=""
          className="object-cover rounded-t-lg"
        />
        <div className="flex flex-col px-5  pb-10">
          <div className="flex flex-row justify-between items-center ">
            <p className="text-md font-semibold text-center text-slate-700  py-4">
              Nyiragongo
            </p>
            <p className="text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl">
              50$
            </p>
          </div>
          <span className="text-md text-slate-700  py-0 my-0">
            {moment(
              "2020-05-01T00:00:00.000Z",
              "YYYY-MM-DDTHH:mm:ss.SSSZ"
            ).fromNow()}
          </span>
        </div>
      </div>
      <div
        className="h-full md:w-5/12 lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       "
      >
        <img
          src="https://images.pexels.com/photos/2872877/pexels-photo-2872877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
          alt=""
          className="object-cover rounded-t-lg"
        />
        <div className="flex flex-col px-5  pb-10">
          <div className="flex flex-row justify-between items-center ">
            <p className="text-md font-semibold text-center text-slate-700  py-4">
              Nyiragongo
            </p>
            <p className="text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl">
              50$
            </p>
          </div>
          <span className="text-md text-slate-700  py-0 my-0">
            {moment(
              "2020-05-01T00:00:00.000Z",
              "YYYY-MM-DDTHH:mm:ss.SSSZ"
            ).fromNow()}
          </span>
        </div>
      </div>
      <div
        className="h-full md:w-5/12 lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
       cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full shadow-lg rounded-lg
       "
      >
        <img
          src="https://images.pexels.com/photos/6231575/pexels-photo-6231575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
          alt=""
          className="object-cover rounded-t-lg"
        />
        <div className="flex flex-col px-5  pb-10">
          <div className="flex flex-row justify-between items-center ">
            <p className="text-md font-semibold text-center text-slate-700  py-4">
              Nyiragongo
            </p>
            <p className="text-md font-semibold text-center text-white bg-slate-700 px-4 rounded-l-2xl rounded-r-2xl">
              50$
            </p>
          </div>
          <span className="text-md text-slate-700  py-0 my-0">
            {moment(
              "2020-05-01T00:00:00.000Z",
              "YYYY-MM-DDTHH:mm:ss.SSSZ"
            ).fromNow()}
          </span>
        </div>
      </div>
    </Carousel>
  );
};

export default DemoCarousel;

// className="flex flex-col w-full h-full px-6 items-center md:flex-row md:items-center md:w-full  md:px-4 md:flex-wrap md:justify-between
// lg:justify-between lg:flex-row lg:items-center lg:w-full lg:px-8 lg:flex-wrap md:pt-28 2xl:justify-around
// "

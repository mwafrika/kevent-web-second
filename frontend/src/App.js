import React, { useState } from 'react';
import logo from './logo.svg';
import Carousel from './caroussel';
import Carousel2 from './caroussel2';
export default function App() {
  const [menu, setMenu] = useState(false);
  const onClickMenu = () => {
    setMenu(!menu);
    console.log(menu, 'mwafrika');
  };
  return (
    <>
      <section className="flex min-h-screen flex-col">
        <div className=" bg-gray-100 flex w-full h-20 md:h-28 items-center justify-between md:justify-around text-slate-600 fixed z-50">
          <div className="w-1/4 justify-center flex">
            <img src={logo} className="h-8" alt="logo" />
          </div>

          <nav
            className={`${
              menu ? 'hidden' : 'block'
            } md:w-2/6 md:block lg:block mt-60 md:mt-0 md:bg-inherit md:shadow-none z-50 md:z-0 hidden bg-slate-100 shadow-lg mx-auto`}
          >
            <ul className="md:flex md:items-center block md:justify-around gap-2">
              <li className="mt-3 md:mt-0">
                <a
                  href="#"
                  className="block md:inline-block mt-4 md:mt-0 md:mr-6 hover:text-slate-800
                  text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600"
                >
                  Home
                </a>
              </li>
              <li className="mt-3 md:mt-0">
                <a
                  href="#"
                  className="block md:inline-block mt-4 md:mt-0 md:mr-6 hover:text-slate-800
                  text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600
                  "
                >
                  About
                </a>
              </li>
              <li className="mt-3 md:mt-0">
                <a
                  href="#"
                  className="block md:inline-block mt-4 md:mt-0 md:mr-6 hover:text-slate-800
                  text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600"
                >
                  Services
                </a>
              </li>
              <li className="mt-3 md:mt-0">
                <a
                  href="#"
                  className="block md:inline-block mt-4 md:mt-0 md:mr-6 hover:text-slate-800
                  text-sm md:text-base px-4 py-2 leading rounded text-white-slate-600"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div
            className="w-1/4 items-center justify-around flex cursor-pointer md:hidden"
            onClick={onClickMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="md:block hidden md:space-x-4 w-28">
            <img src={logo} className="h-8" alt="" srcset="" />
          </div>
        </div>
        <section className="flex flex-col items-center justify-center w-full h-screen">
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/2102621/pexels-photo-2102621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000)`,
            }}
            className="w-full h-full bg-cover bg-center bg-blend-overlay relative"
          ></div>
          <div className=" absolute top-1/3 left-4 md:left-32">
            <h1 className="text-4xl md:text-7xl font-semibold mb-10 text-slate-700  font-sans">
              Welcome Aboard!
            </h1>
            <p
              className="text-lg font-semibold   text-slate-600
            font-sans
            "
            >
              Book your spot today and set sail on a <br /> local fishing
              adventure.
            </p>
            <button
              className="bg-slate-600 text-white font-semibold py-2 px-4 my-8
            hover:bg-slate-700"
            >
              Book now
            </button>
          </div>
        </section>
        <section className="md:flex sm:flex md:w-full md:h-full md:justify-center bg-gray-100  py-16 gap-12 md:gap-6 md:flex-row sm:flex-col">
          <div
            className="col-span-1 md:col-span-1 sm:col-span-1  h-full flex flex-col md:pt-9 md:pb-4 sm:pt-6 sm:pb-7 lg:pt-8 lg:pb-6 xl:pt-9 xl:pb-8 xl:mr-12 md:px-2 lg:px-5 
         shadow-lg rounded-lg bg-gray-50 md:my-0 md:mx-auto md:ml-4 2xl:w-3/12 md:w-15 xl:w-1/4 sm:w-9/12 sm:mx-auto sm:my-0  sm:px-6 xs:px-8 xs:mx-5 xxs:px-8 xxs:mx-5  xxxs:px-8 xxxs:mx-5"
          >
            <h1 className="text-2xl md:text-2xl font-semibold mb-8">Search</h1>
            <input
              type="text"
              name="search"
              id="search"
              className="bg-gray-200 focus:outline-none focus:shadow-outline border border-gray-200 rounded-full py-2 px-4 block w-full appearance-none leading-normal"
              placeholder="Search"
            />
            <h1 className="text-2xl md:text-2xl font-semibold mb-4 mt-4">
              Select town
            </h1>
            <div class="flex relative w-full">
              <select
                name="town"
                id="town"
                className="bg-gray-200 focus:outline-none focus:shadow-outline border border-gray-200 rounded-full py-2 px-4 block w-full appearance-none leading-normal"
              >
                <option value="">Select town</option>
                <option value="">Town 1</option>
                <option value="">Town 2</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <h1 className="text-2xl md:text-2xl font-semibold  py-7">Types</h1>
            <div className="flex flex-row flex-wrap h-auto md:gap-x-6 md:gap-y-6 xl:gap-x-12 lg:gap-x-4 xl:gap-y-4 lg:py-5 xl:py-5 sm:py-5 md:py-5 xs:py-5 xs:gap-x-12 xs:gap-y-6  xxs:py-5 xxs:gap-x-12 xxs:gap-y-6  xxxs:py-5 xxxs:gap-x-1 xxxs:gap-y-3 sm:gap-x-12 sm:gap-y-6 py-2 px-2">
              <input
                type="button"
                value="Tous"
                className="bg-slate-600 text-white focus:outline-none focus:shadow-outline border border-gray-300 lg:py-1 xl:py-1 sm:py-1 rounded-full py-2 px-4 lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal
                hover:bg-slate-600 hover:text-white cursor-pointer
                active:bg-slate-600 active:text-white
                "
              />
              <input
                type="button"
                value="Fruits"
                className="bg-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 lg:py-1 xl:py-1 sm:py-1 lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer"
              />
              <input
                type="button"
                value="Arbres"
                className="bg-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 lg:py-1 xl:py-1 sm:py-1 px-4 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer"
              />
              <input
                type="button"
                value="Legumes"
                className="bg-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 lg:py-1 px-4 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12  xl:py-1 sm:py-1 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer"
              />
              <input
                type="button"
                value="Cereals"
                className="bg-gray-200 focus:outline-none focus:shadow-outline border xl:py-1 sm:py-1 border-gray-300 rounded-full py-2 px-4 lg:py-1 block lg:w-5/12 xl:w-15 sm:w-2/6 md:w-5/12 appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 sm:col-span-1 h-full md:w-4/6 sm:w-full flex flex-col md:justify-around">
            <div className="flex flex-row justify-between h-40  pt-0 xs:pt-14 xxs:pt-14 xxxs:pt-14 pb-32 pr-6 pl-2 items-center">
              <h1 className="text-2xl md:text-2xl font-semibold py-7 xxs:text-lg xxxs:text-sm">
                Liste des plantes
              </h1>
              <input
                type="button"
                value="More packages"
                className="bg-gray-300 focus:outline-none focus:shadow-outline border border-gray-300 rounded-full py-2 px-4 block w-auto appearance-none leading-normal hover:bg-slate-600 hover:text-white cursor-pointer"
              />
            </div>
            <Carousel2 />
          </div>
        </section>
        <Carousel />
        <section className="flex items-center justify-center">
          <div className="w-2/3 h-px bg-slate-300"></div>
        </section>

        <section className="flex flex-col sm:flex-col md:flex-row md:justify-between items-center bg-gray-100 justify-between w-full md:h-full px-5 py-5 md:py-8">
          <div className="w-full lg:h-full md:px-4  bg-slate-600 flex flex-col p-9 space-y-11 md:h-full md:w-full">
            <p>
              Delectus nihil veritatis quae! Tempore laborum enim in pariatur
              hic officia modi neque qui. Quasi eligendi amet ullam ea
              repellendus, error maxime nesciunt? Delectus, amet est repudiandae
              ex dignissimos molestiae deserunt vel, iure, debitis veniam vitae
              natus quod? Nemo eos necessitatibus magnam quis sit qui obcaecati
              ducimus, quas assumenda, magni voluptatum aperiam recusandae
              tempora reiciendis architecto doloribus vero quo velit vel ut
              esse, culpa iusto quos in? Debitis sed quas iure. Accusantium
              nostrum porro possimus ducimus repellat fugit nam maiores ratione
              repudiandae sed iusto nemo tempore quo quis libero impedit
              doloribus facere omnis non id, voluptatibus sit, cumque ipsa
              aliquid. Nesciunt distinctio doloremque dolorum possimus accusamus
              repellat impedit non rem nostrum dignissimos. Aperiam ad neque rem
              veniam voluptate quis rerum nesciunt iure assumenda natus totam
              sapiente, maxime non rem nostrum dignissimos. Aperiam ad neque rem
              veniam voluptate quis rerum nesciunt iure assumenda natus totam
              quis rerum nesciunt iure assumenda natus ttotamotam sapiente,
              maxime non rem nostrum dignissimos. Aperiam ad neque rem veniam
              voluptate quis rerum nesciunt iure assumenda natus quis rerum
              nesciunt iure assumenda natus totam quis rerum nesciunt iure
              assumenda natus ttotamotam sapiente, maxime non rem nostrum
              dignissimos. Aperiam ad neque rem veniam voluptate quis rerum
              nesciunt iure assumenda natus quis rerum nesciunt iure assumenda
              natus totam quis rerum nesciunt iure assumenda natus ttotamotam
              sapiente, maxime non rem nostrum dignissimos. Aperiam ad neque rem
              veniam voluptate quis rerum nesciunt iure assumenda natus quis
              rerum nesciunt iure assumenda natus totam quis rerum nesciunt iure
              assumenda natus ttotamotam sapiente, maxime non rem nostrum
              dignissimos. Aperiam ad neque rem veniam voluptate quis rerum
              nesciunt iure assumenda natus sapiente, maxime non rem nostrum
              dignissimos. Aperiam ad neque rem veniam voluptate quis rerum
              nesciunt iure assumenda natus quis rerum nesciunt iure assumenda
              natus totam quis rerum nesciunt iure assumenda natus ttotamotam
              sapiente, maxime non rem nostrum dignissimos. Aperiam ad neque rem
              veniam voluptate quis rerum nesciunt iure assumenda natus quis
              rerum nesciunt iure assumenda natus totam quis rerum nesciunt iure
              assumenda natus ttotamotam sapiente, maxime non rem nostrum
              dignissimos. Aperiam ad neque rem
            </p>
          </div>
          <div className="bg-white p-10 w-full md:h-full md:px-4 md:flex md:justify-center">
            <form action="" className="flex flex-col space-y-10 md:w-96">
              <p className=" text-xl font-medium">Ask the Captain</p>
              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value=""
                  className="h-8 w-full border px-3 py-2 md:h-8 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value=""
                  className="h-10 w-full md:h-8 border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value=""
                  className="h-10 w-full md:h-8 border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value=""
                  className="h-10 w-full md:h-8 border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value=""
                  className="h-10 w-full md:h-8 border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                />
              </div>
              <button className="rounded-none w-full  px-10 py-2 text-lg font-bold text-white bg-indigo-500">
                Button
              </button>
            </form>
          </div>

          <h3 className="text-center pt-10 bg-slate-100 md:hidden block">
            © 2023 By Tide Fishing Charters. Proudly created with Wix.com
          </h3>
        </section>

        <section className="w-screen bg-slate-600">
          <div className="bg-white"></div>
        </section>
      </section>
    </>
  );
}

import React, { useState } from "react";

export default function App() {
  const [menu, setMenu] = useState(false);
  const onClickMenu = () => {
    setMenu(!menu);
    console.log(menu, "mwafrika");
  };
  return (
    <>
      <section className="flex min-h-screen flex-col">
        <div className=" bg-slate-300 flex w-full h-20 md:h-28 items-center justify-between md:justify-around text-slate-600">
          <div className="w-1/4 justify-center flex">Logo</div>

          <nav
            className={`${
              menu ? "hidden" : "block"
            } md:w-2/6 md:block lg:block mt-60 z-50 md:z-0 w-screen bg-white shadow-lg mx-auto`}
          >
            <ul className="md:flex md:items-center block md:justify-around gap-2">
              <li className="mt-3 md:mt-0">
                <a
                  href="#"
                  className="block md:inline-block mt-4 md:mt-0 md:mr-6 text-slate-600 hover:text-slate-800"
                >
                  Home
                </a>
              </li>
              <li className="mt-3 md:mt-0">
                <a
                  href="#"
                  className="block md:inline-block mt-4 md:mt-0 md:mr-6 text-slate-600 hover:text-slate-800"
                >
                  About
                </a>
              </li>
              <li className="mt-3 md:mt-0">
                <a
                  href="#"
                  className="block md:inline-block mt-4 md:mt-0 md:mr-6 text-slate-600 hover:text-slate-800"
                >
                  Services
                </a>
              </li>
              <li className="mt-3 md:mt-0">
                <a
                  href="#"
                  className="block md:inline-block mt-4 md:mt-0 md:mr-6 text-slate-600 hover:text-slate-800"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div
            className="w-1/4 items-center justify-around flex cursor-pointer"
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
        </div>
        <section className="flex flex-col items-center justify-center w-full h-screen">
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/2102621/pexels-photo-2102621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000)`,
            }}
            className="w-full h-full bg-cover bg-center bg-blend-overlay relative"
          ></div>
          <div className=" absolute top-1/3 left-4 md:left-32">
            <h1 className="text-4xl md:text-7xl font-semibold mb-10">
              Welcome Aboard!
            </h1>
            <p className="text-lg font-semibold">
              Book your spot today and set sail on a <br /> local fishing
              adventure.
            </p>
            <button
              className="bg-slate-600 text-white font-semibold py-2 px-4 my-8 rounded-full
            hover:bg-slate-700"
            >
              Book now
            </button>
          </div>
        </section>
        <section className="grid  grid-cols-12 w-full h-full">
          <div className="col-span-1 md:col-span-1 sm:col-span-1"></div>
          <div className="mt-10 md:px-0 pt-0 h-80 w-full col-span-10 md:col-span-10 sm:col-span-8">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold mb-10">
              The Finest Fishing Experience
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              rem? Soluta adipisci praesentium natus rerum sed illo sit enim
              quibusdam odit vero? Labore non quisquam voluptatem totam id
              quibusdam odit vero? Labore non quisquam voluptatem totam id
            </p>
          </div>
        </section>
        <section
          className="flex flex-col w-full h-full px-6 items-center md:flex-row md:items-center md:w-full md:px-8 md:flex-wrap md:justify-between
         lg:justify-between lg:flex-row lg:items-center lg:w-full lg:px-8 lg:flex-wrap
        "
        >
          <div className="h-full md:w-5/12 lg:w-72 w-80 mt-10">
            <img
              src="https://images.pexels.com/photos/6324285/pexels-photo-6324285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-semibold mb-10 text-center py-6">
                Fishing Destinations
              </h1>
            </div>
          </div>
          <div className="h-full  md:w-5/12 lg:w-72 w-full mt-10">
            <img
              src="https://images.pexels.com/photos/6411959/pexels-photo-6411959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-semibold mb-10 text-center  py-6">
                Fishing Destinations
              </h1>
            </div>
          </div>
          <div className=" h-full  md:w-5/12 lg:w-72  w-80 mt-10">
            <img
              src="https://images.pexels.com/photos/2872877/pexels-photo-2872877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
              alt=""
              className="w-full "
            />
            <div>
              <h1 className="text-2xl font-semibold mb-10 text-center  py-6">
                Fishing Destinations
              </h1>
            </div>
          </div>
          <div className="h-full lg:w-72 md:w-5/12 md:mx-6 w-80 mt-10">
            <img
              src="https://images.pexels.com/photos/6231575/pexels-photo-6231575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-2xl font-semibold mb-10 text-center  py-6">
                Fishing Destinations
              </h1>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center">
          <div className="w-2/3 h-px bg-slate-300"></div>
        </section>
        <section className="flex flex-col items-center justify-center w-full h-screen">
          <div
            style={{
              backgroundImage: `url(https://images.pexels.com/photos/2102621/pexels-photo-2102621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000)`,
            }}
            className="w-full h-full bg-cover bg-center bg-blend-overlay relative"
          ></div>
          <div className=" absolute top-1/3 left-4 md:left-32">
            <h1 className="text-4xl md:text-7xl font-semibold mb-10">
              Welcome Aboard!
            </h1>
            <p className="text-lg font-semibold">
              Book your spot today and set sail on a <br /> local fishing
              adventure.
            </p>
            <button
              className="bg-slate-600 text-white font-semibold py-2 px-4 my-8 rounded-full
            hover:bg-slate-700"
            >
              Book now
            </button>
          </div>
        </section>
        <section className="flex flex-row items-center justify-around w-full h-screen px-10"></section>
      </section>
    </>
  );
}

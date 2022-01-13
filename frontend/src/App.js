import React, { useState } from "react";
import logo from "./logo.svg";
export default function App() {
  const [menu, setMenu] = useState(false);
  const onClickMenu = () => {
    setMenu(!menu);
    console.log(menu, "mwafrika");
  };
  return (
    <>
      <section className="flex min-h-screen flex-col">
        <div className="bg-slate-100 flex w-full h-20 md:h-28 items-center justify-between md:justify-around text-slate-600">
          <div className="w-1/4 justify-center flex">
            <img src={logo} className="h-8" alt="logo" />
          </div>

          <nav
            className={`${
              menu ? "hidden" : "block"
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
        <section className="grid  grid-cols-12 w-full h-full">
          <div className="col-span-1 md:col-span-1 sm:col-span-1"></div>
          <div className="mt-10 md:px-0 pt-0 h-80 w-full col-span-10 md:col-span-5 sm:col-span-8">
            <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold mb-10 text-slate-700  font-sans">
              The Finest Fishing Experience
            </h1>
            <p className="text-lg wrap-words font-semibold mb-10 text-slate-700  font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              rem? Soluta adipisci praesentium natus rerum sed illo sit enim
              quibusdam odit vero? Labore non quisquam voluptatem totam id
              quibusdam odit vero? Labore non quisquam voluptatem totam id
            </p>
          </div>
        </section>
        <section
          className="flex flex-col w-full h-full px-6 items-center md:flex-row md:items-center md:w-full  md:px-4 md:flex-wrap md:justify-between
         lg:justify-between lg:flex-row lg:items-center lg:w-full lg:px-8 lg:flex-wrap md:pt-28
        "
        >
          <div
            className="h-full md:w-5/12 lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
          cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full
          "
          >
            <img
              src="https://images.pexels.com/photos/6324285/pexels-photo-6324285.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-semibold mb-10 text-center text-slate-700  py-6">
                Fishing Destinations
              </h1>
            </div>
          </div>
          <div
            className="h-full md:w-5/12 lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
          cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full"
          >
            <img
              src="https://images.pexels.com/photos/6411959/pexels-photo-6411959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
              alt=""
            />
            <div>
              <h1 className="text-2xl font-semibold mb-10 text-center text-slate-700  py-6">
                Fishing Destinations
              </h1>
            </div>
          </div>
          <div
            className="h-full md:w-5/12 lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
          cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full"
          >
            <img
              src="https://images.pexels.com/photos/2872877/pexels-photo-2872877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
              alt=""
              className="w-full "
            />
            <div>
              <h1 className="text-2xl font-semibold mb-10 text-center text-slate-700   py-6">
                Fishing Destinations
              </h1>
            </div>
          </div>
          <div
            className="h-full md:w-5/12 lg:w-72 w-80 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110
            cursor-pointer md:mt-0 md:h-full lg:mt-0 lg:h-full
          "
          >
            <img
              src="https://images.pexels.com/photos/6231575/pexels-photo-6231575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
              alt=""
              className="w-full"
            />
            <div>
              <h1 className="text-2xl font-semibold mb-10 text-center text-slate-700 py-6">
                Fishing Destinations
              </h1>
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center">
          <div className="w-2/3 h-px bg-slate-300"></div>
        </section>

        <section className="flex flex-col items-center justify-center w-full h-full relative">
          <img
            src="https://images.pexels.com/photos/1596056/pexels-photo-1596056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000"
            alt="testimony"
            className="md:w-full md:h-1/2 w-full h-1/2
            object-cover object-center
             opacity-80
            "
          />
          <div className="absolute h-56 w-full text-center text-white font-extrabold py-3">
            <h5 className="text-4xl font-bold text-center">Loved by</h5>
            <h5 className=" text-2xl md:text-4xl font-bold text-center mb-5">
              Friends & Families
            </h5>

            <p className="text-lg font-semibold text-center">
              I'm a testimonial. Click to edit me and add text that says
            </p>
            <p className="text-lg font-semibold text-center">
              I'm a testimonial. Click to edit me and add text that says
            </p>
          </div>
        </section>
        <section className="flex flex-col sm:flex-col md:flex-row items-center bg-slate-100 justify-between w-full md:h-screen px-5 py-5 md:py-8">
          <div className="w-full lg:h-full md:px-4 bg-white flex flex-col p-9 space-y-11 md:h-full">
            <div className="flex items-center">
              <img src={logo} className="w-14 h-12 rounded-md" alt="" />
              <h1>Title</h1>
            </div>
            <div>
              <p>Fishing Charter</p>
            </div>
            <ul className="flex">
              <li>
                <img
                  src={logo}
                  alt="facebook"
                  className="w-14 h-12 rounded-md"
                />
              </li>
              <li>
                <img
                  src={logo}
                  alt="Twitter"
                  className="w-14 h-12 rounded-md"
                />
              </li>
              <li>
                <img
                  src={logo}
                  alt="Instagram"
                  className="w-14 h-12 rounded-md"
                />
              </li>
            </ul>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                sit. Quo eveniet enim laborum sunt ab,
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam consequatur est at exercitationem. Veritatis maiores
              </p>
            </div>
          </div>
          <div className="bg-white p-10 w-full md:h-full md:px-4">
            <form action="" className="flex flex-col space-y-10">
              <p className=" text-xl font-medium">Ask the Captain</p>
              <div className="flex justify-between space-x-5">
                <div>
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    value=""
                    className="h-10 w-full border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    value=""
                    className="h-10 w-full border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                  />
                </div>
              </div>

              <div className="flex justify-between space-x-5">
                <div>
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    value=""
                    className="h-10 w-full border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    value=""
                    className="h-10 w-full border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  value=""
                  className="h-10 w-full border px-3 py-2 border-b-zinc-500 border-x-0 border-t-0 focus:outline-none focus:border-b-indigo-500"
                />
              </div>
              <button className="rounded-none w-full  px-10 py-2 text-lg font-bold text-white bg-indigo-500">
                Button
              </button>
            </form>
          </div>
          <div className="bg-white md:h-full w-full md:w-full lg:w-full p-10  lg:h-full pt-10 md:px-4">
            <ul className="ml-10 space-y-11 pb-14">
              <li className="mt-4 space-x-10 text-2xl font-semibold">Home</li>
              <li className="mt-4 space-x-10 text-2xl font-semibold">About</li>
              <li className="mt-4 space-x-10 text-2xl font-semibold">
                Charters
              </li>
              <li className="mt-4 space-x-10 text-2xl font-semibold">
                Fishing Reports
              </li>
              <li className="mt-4 space-x-10 text-2xl font-semibold">
                Gallery
              </li>
            </ul>
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

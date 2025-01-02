import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <nav className="">
        <div class="top-nav flex items-center justify-between px-3 md:px-6 py-3  bg-zinc-50 border-b">
          <div class="flex items-center gap-3 text-gray-800 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 hover:text-green-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 hover:text-green-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 hover:text-green-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              />
            </svg>
          </div>
          <div class="hidden md:flex items-center gap-3 text-xs text-gray-800">
            <a class="hover:text-gray-900" href="/help">
              Help
            </a>
            <span>|</span>
            <a class="hover:text-gray-900" href="/home">
              Join Us
            </a>
            <span>|</span>

            <a class="hover:text-gray-900" href="#">
              Dashboard
            </a>

            <a class="hover:text-gray-900" href="/login">
              Login
            </a>

            <a class="hover:text-gray-900" href="/Register">
              Register
            </a>
            
          </div>
          <button class="md:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-800"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18m2 0h12v-.8q0-.275-.137-.5t-.363-.35q-1.35-.675-2.725-1.012T12 15q-1.4 0-2.775.338T6.5 16.35q-.225.125-.363.35T6 17.2zm6-8q.825 0 1.413-.587T14 8q0-.825-.587-1.412T12 6q-.825 0-1.412.588T10 8q0 .825.588 1.413T12 10m0 8"
              />
            </svg>
          </button>
        </div>
        <div class="  bg-white  sm:py-0 w-full py-3 md:px-6 px-3 border-b">
          <div class="w-full flex justify-between mx-auto">
            <a class=" flex items-center" href="/">
            <h2 className="text-2xl  ">
        Royal  <span className="font-bold"> Gym</span>
        </h2>
            </a>
            <div className="hidden md:block">
              <ul className="flex items-center gap-10">
                <li className="group relative cursor-pointer">
                  <a
                    href="/"
                    className="flex h-[72px] items-center gap-[2px] text-black"
                  >
                    Home
                  </a>
                </li>

                <li className="group relative cursor-pointer">
                  <a
                    href="/Gallery"
                    className="flex h-[72px] items-center gap-[2px] text-black"
                  >
                    Programs
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[250px] bg-white backdrop-blur-sm rounded-md p-2 text-black group-hover:block  ">
                    <ul className="space-y-3">
                      <li className="p-2 hover:bg-violet-200 text-black">
                      FITNESS
                      </li>
                      <li className="p-2 hover:bg-violet-200 text-black">
                      Gymnastics
                      </li>
                      <li className="p-2 hover:bg-violet-200 text-black">
                        Boxing
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="cursor pointer text-black">

                  <a href="/Price">Plans</a>
                </li>

                <li className="cursor pointer text-black">
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>

            <div class="hidden md:flex items-center gap-4">
              <div class="search hidden md:flex items-center rounded-xl border border-zinc-800 overflow-hidden">
                <span class="px-2 bg-transparent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-white hover:text-green-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  class="bg-transparent py-2 focus:outline-none outline-none border-0"
                />
              </div>
            </div>
            <button class="block md:hidden" onClick={() => setNav(!nav)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-black"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8m6 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-52 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[350px] h-screen bg-white z-50 duration-300"
            : "fixed top-0 left-[-100%] w-[350px] h-screen bg-white z-50 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 mt-10">
        Royal  <span className="font-bold"> Gym</span>
        </h2>

        <div class="search  flex items-center rounded-xl px-2 border border-zinc-800 overflow-hidden ml-5 mr-5">
          <span class="px-2 bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-700 hover:text-green-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            class="bg-transparent py-2 px-2 focus:outline-none outline-none border-0"
          />
        </div>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex ml-2 font-serif cursor-pointer hover:text-blue-600">
              {" "}
              Home
            </li>
            <li className="text-xl py-4 flex ml-2 font-serif cursor-pointer hover:text-blue-600">
              
              FITNESS
            </li>
            <li className="text-xl py-4 flex ml-2 font-serif cursor-pointer hover:text-blue-600">
            Gymnastics
            </li>
            <li className="text-xl py-4 flex ml-2 font-serif cursor-pointer hover:text-blue-600">
            
              Boxing
            </li>
            <li className="text-xl py-4 flex ml-2 font-serif cursor-pointer hover:text-blue-600">
            
              Price
            </li>
            <li className="text-xl py-4 flex ml-2 font-serif cursor-pointer hover:text-blue-600">
              
              About
            </li>
            <li className="text-xl py-4 flex ml-2 font-serif cursor-pointer hover:text-blue-600">
             
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar ;

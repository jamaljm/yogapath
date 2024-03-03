import Link from "next/link";
import React from "react";

export default function YogaInstructionApp() {
  return (
    <>
      <div className="bg-[#f9f9f9] fixed w-full min-h-screen">
        <header className="py-4 bg-[#e1f8e2] rounded-b-xl sm:py-6">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="shrink-0">
                <a href="#" title="" className="flex">
                  <img className="w-auto h-11 -pb-4" src="/logof.png" alt="" />
                </a>
              </div>

              <div className="flex md:hidden">
                <button type="button" className="text-white">
                  <span x-show="!expanded" aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>

                  <span x-show="expanded" aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
                <Link
                  href="/login"
                  title=""
                  className="relative font-body4 font-semibold inline-flex items-center justify-center px-8 py-3 text-base  text-green-800 bg-gradient-to-br from-green-300  to-blue-300   rounded-full"
                  role="button"
                >
                  Yoga Classes
                </Link>{" "}
               
              </nav>
            </div>
          </div>
        </header>

        <section className="py-16   sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative mt-5 flex gap-6 ">
              <div className="lg:w-2/3 z-50 relative">
                <p className="text-sm font-body4 font-normal tracking-widest text-gray-500 uppercase">
                  Welcome to Your Yoga Journey
                </p>
                <h1 className="mt-6 text-4xl  font-body4 font-normal text-green-600 sm:mt-10 sm:text-5xl lg:text-6xl xl:text-6xl">
                  <span className="text-transparent  bg-clip-text bg-gradient-to-r from-green-500  to-blue-600">
                    Find Balance and Harmony within Yourself
                  </span>{" "}
                </h1>
                <p className="max-w-lg mt-4 text-md font-body1 font-normal text-gray-400 sm:mt-5">
                  Embrace tranquility through the practice of yoga. Join our
                  classes to explore the depths of your mind, body, and soul.
                </p>
                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-8 group">
                  <div className="absolute  "></div>
                  <Link
                    href="/login"
                    title=""
                    className="relative font-body4 font-semibold inline-flex items-center justify-center px-8 py-3 text-base  text-white bg-gradient-to-br from-green-500  to-blue-600   rounded-full"
                    role="button"
                  >
                    Join a Class
                  </Link>
                </div>
              </div>

              <div className="mt-8 z-10 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
                <img
                  className="w-full max-w-xs mx-auto  lg:max-w-xl xl:max-w-2xl"
                  src="https://cdn.dribbble.com/userupload/5101705/file/original-efb4f1462779e6eacab73bab9eb10e50.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

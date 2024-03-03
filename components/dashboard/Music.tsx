import React from "react";

export default function Music() {
  return (
    <div className="min-h-screen px-5 flex flex-col items-center justify-start">
      <div className="relative max-w-xl w-full h-36 bg-white rounded-lg shadow-lg overflow-hidde mb-12">
        <div className="absolute inset-0 rounded-lg overflow-hidden bg-red-200">
          <img
            src="https://t3.ftcdn.net/jpg/06/02/89/76/360_F_602897614_GkRorHPJuXe2FlR6DCtQJhJfbAHVlaGt.jpg"
            alt=""
          />
          <div className="absolute inset-0 backdrop backdrop-blur-10 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <div className="absolute flex space-x-6 transform translate-x-6 translate-y-16">
          <div className="w-32 h-full rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.etsystatic.com/23275856/r/il/da7938/5036067373/il_fullxfull.5036067373_5int.jpg"
              alt=""
            />
          </div>
          <div className="text-white pt-14">
            <h3 className="font-bold font-body4">Yoga Meditation</h3>
            <div className="text-sm opacity-60 font-body4">
              Guided Meditation Session
            </div>
            <div className="mt-8 text-gray-400">
              <div className="flex items-center space-x-2 text-xs">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src="https://t3.ftcdn.net/jpg/06/02/89/76/360_F_602897614_GkRorHPJuXe2FlR6DCtQJhJfbAHVlaGt.jpg"
            className="object-cover"
          />
          <div className="absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white">
            <h3 className="font-bold font-body4">Yoga Meditation Audio</h3>
            <span className="opacity-70 text-gray-400 font-body4">
              Guided Relaxation
            </span>
          </div>
        </div>
        <div>
          <div className="relative h-1 bg-gray-200">
            <div className="absolute h-full w-1/2 bg-green-500 flex items-center justify-end">
              <div className="rounded-full w-3 h-3 bg-white shadow"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-xs font-semibold text-gray-500 px-4 py-2">
          <div className="font-body4">1:50</div>
          <div className="flex space-x-3 p-2">
            <button className="focus:outline-none">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                <line x1="5" y1="19" x2="5" y2="5"></line>
              </svg>
            </button>
            <button className="rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button className="focus:outline-none">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                <line x1="19" y1="5" x2="19" y2="19"></line>
              </svg>
            </button>
          </div>
          <div className="font-body4">3:00</div>
        </div>
        <ul className="text-xs sm:text-base divide-y border-t cursor-default">
          <li className="flex items-center space-x-3 hover:bg-gray-100">
            <button className="p-3 hover:bg-green-500 group focus:outline-none">
              <svg
                className="w-4 h-4 group-hover:text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <div className="flex-1 font-body4">Deep Breathing Exercise</div>
            <div className="text-xs font-body4 text-gray-400">2:58</div>
            <button className="focus:outline-none pr-4 group">
              <svg
                className="w-4 h-4 group-hover:text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

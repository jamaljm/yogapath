import React from "react";

export default function Card() {
  return (
    <div className="grid grid-cols-1  gap-4 px-12 text-center  md:px-5 sm:gap-3 xl:gap-8 sm:grid-cols-2 md:grid-cols-2">
      <div className="relative overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-lg hover:shadow-lg">
        <div>
          <img
            className="object-cover w-full"
            src="https://t3.ftcdn.net/jpg/04/87/48/66/360_F_487486623_CatNgUbulZ6rOpENckeTzRfY7IzrqOKd.jpg"
            alt="Yoga Image"
          />
        </div>
        <div className="-mt-16 sm:flex sm:items-center sm:justify-center sm:space-x-5">
          <div className="relative inline-flex">
            <img
              className="object-cover mx-auto rounded-full h-20 w-20 mt-5 ring-2 ring-white"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYF2QRGAWTyZKbHMeLzTw5P3EFJO7dRnZWg0_hmk-Czw&s"
              alt="Yoga Instructor"
            />
          </div>
        </div>
        <div className="px-4 pt-3 pb-6">
          <p className="text-base font-bold font-body4 text-gray-900">
            <a href="#" title="">
              Ram jaya{" "}
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </p>
          <p className="mt-1 text-xs font-body4 font-medium text-gray-500 uppercase">
            Experienced Yoga Instructor
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1">
        <div>
          <img
            className="object-cover w-full"
            src="https://png.pngtree.com/background/20211217/original/pngtree-figure-leaves-green-yoga-background-picture-image_1595488.jpg"
            alt="Yoga Image"
          />
        </div>
        <div className="-mt-16 sm:flex sm:items-center sm:justify-center sm:space-x-5">
          <div className="relative inline-flex">
            <img
              className="object-cover mx-auto rounded-full h-20 w-20 mt-5 ring-2 ring-white"
              src="https://news.dasa.ncsu.edu/wp-content/uploads/sites/39/2019/08/Shaily-Article-Photo.png"
              alt="Yoga Instructor"
            />
          </div>
        </div>
        <div className="px-4 pt-3 pb-6">
          <p className="text-base font-body4 font-bold text-gray-900">
            <a href="#" title="">
              Shreelakhmi
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </p>
          <p className="mt-1 text-xs font-body4 font-medium text-gray-500 uppercase">
            Certified Yoga Teacher
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1">
        <div>
          <img
            className="object-cover w-full"
            src="https://t3.ftcdn.net/jpg/06/02/89/76/360_F_602897614_GkRorHPJuXe2FlR6DCtQJhJfbAHVlaGt.jpg"
            alt="Yoga Image"
          />
        </div>
        <div className="-mt-16 sm:flex sm:items-center sm:justify-center sm:space-x-5">
          <div className="relative inline-flex">
            <img
              className="object-cover mx-auto rounded-full h-20 w-20 mt-5 ring-2 ring-white"
              src="https://www.uscreen.tv/wp-content/uploads/2020/02/make-money-online-yoga-instructor.jpg"
              alt="Yoga Instructor"
            />
          </div>
        </div>
        <div className="px-4 pt-3 pb-6">
          <p className="text-base font-body4 font-bold text-gray-900">
            <a href="#" title="">
              Jaya Prasanth{" "}
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </p>
          <p className="mt-1 text-xs  font-body4 font-medium text-gray-500 uppercase">
            Holistic Yoga Practitioner
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden transition-all duration-200 transform bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:-translate-y-1">
        <div>
          <img
            className="object-cover w-full"
            src="https://t3.ftcdn.net/jpg/06/02/89/76/360_F_602897614_GkRorHPJuXe2FlR6DCtQJhJfbAHVlaGt.jpg"
            alt="Yoga Image"
          />
        </div>
        <div className="-mt-16 sm:flex sm:items-center sm:justify-center sm:space-x-5">
          <div className="relative inline-flex">
            <img
              className="object-cover mx-auto rounded-full h-20 w-20 mt-5 ring-2 ring-white"
              src="https://www.uscreen.tv/wp-content/uploads/2020/02/make-money-online-yoga-instructor.jpg"
              alt="Yoga Instructor"
            />
          </div>
        </div>
        <div className="px-4 pt-3 pb-6">
          <p className="text-base font-body4 font-bold text-gray-900">
            <a href="#" title="">
              Adithi Roy
              <span className="absolute inset-0" aria-hidden="true"></span>
            </a>
          </p>
          <p className="mt-1 text-xs font-body4 font-medium text-gray-500 uppercase">
            Holistic Yoga Practitioner
          </p>
        </div>
      </div>
    </div>
  );
}

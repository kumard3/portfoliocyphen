/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { WorkData } from "../data/data";

let count = 0;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % WorkData.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    const productsLength = WorkData.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  return (
    <section className="p-4 lg:p-8 " id="work">
      <div className="space-y-3">
        <div className="flex flex-row items-center">
          <div
            className="section-line bg-[#FC4370] w-16 h-1 mr-6"
            style={{ width: "4rem" }}
          ></div>
          <p
            className="section-category text-greyText text-base font-medium"
            style={{ opacity: 1, transform: "translate(0px, 0px)" }}
          >
            Work
          </p>
        </div>
        <div className="overflow-x-scroll">
          <div className="flex   max-w-[3000px] rounded-md shadow-sm">
            <div className="flex items-center justify-center rounded-xl w-[595px]  ">
              <img
                className=" rounded-xl"
                src={WorkData[currentIndex].img}
                alt=""
              />
            </div>
            <div className=" hidden items-center sm:flex rounded-xl w-[595px]  mx-2 ">
              <img
                className=" rounded-xl"
                src={WorkData[currentIndex + 1]?.img}
                alt=""
              />
            </div>
            <div className="hidden items-center lg:flex rounded-xl w-[595px]  mx-2 ">
              <img
                className=" rounded-xl"
                src={WorkData[currentIndex + 2]?.img}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col justify-center flex-1 px-6 ">
          <div className=" flex items-center px-3  sm:ml-[-2rem]">
            <button
              onClick={handleOnPrevClick}
              aria-label="previous"
              className="mx-3 bg-gray-600/10 rounded-xl shadow-slate-700 hover:backdrop-brightness-150 focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={0}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </button>
            <span>
              0{count + 1}/0{WorkData.length}
            </span>
            <button
              onClick={handleOnNextClick}
              aria-label="next"
              className="mx-3 default-focus bg-gray-600/10 rounded-xl shadow-slate-700 hover:backdrop-brightness-150 focus:outline-none p-4 mr-4 text-2xl duration-300 ease-in-out"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
export default function WhatWeDo() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex  flex-col justify-center items-center w-full my-[30vh] bg-[#F9F9F9] " id="about">
      <div className="container  mx-auto flex justify-center items-center my-[1rem]">
        <h1 className="text-4xl  text-center font-semibold  max-w-3xl">
          {" "}
          We are an Indian digital agency. We blend our enthusiasm for
          human-centered design with cutting-edge development tools.{" "}
        </h1>
      </div>
      <div className=" mt-[50px] index1">
        <div className="svg-bg_background__2ILQI ">
          <svg preserveAspectRatio="none" viewBox="0 0 1440 1159">
            <defs>
              <clipPath id="wave-path-hero">
                <path d="M1440,1158.31651 C1197.08229,1048.77217 954.410253,994 741.36646,994 C528.322667,994 270.292856,1048.77217 0,1158.31651 L0,86.6805861 C90.8552435,131.861034 240.52191,154.845431 401,154.845431 C545.028107,154.845431 877.199844,39.1381675 1111,2.74552887 C1205.2249,-11.9212392 1314.89156,32.1750113 1440,135.03428 L1440,1158.31651 Z"></path>
              </clipPath>
            </defs>
            <rect
              fill="#ffffff"
              x="0"
              y="0"
              width="100%"
              height="100%"
              clipPath="url(#wave-path-hero)"
              style={{ position: "absolute", zIndex: 1 }}
            ></rect>
            <path
              fill="none"
              stroke="#4945af"
              strokeWidth="2"
              className="line"
              d="M9.99200722e-15,88.68 C90.86,133.86 240.52,156.85 401,156.85 C545.03,156.85 877.2,41.14 1111,4.75 C1205.21821,-9.91467359 1314.89,34.18 1440,137.03"
              style={{ strokeDasharray: 3000, strokeDashoffset: 0 }}
            ></path>
            <rect
              className="bg"
              fill="#f9f9f9"
              x="0%"
              y="0"
              width="1449"
              height="1159"
              clipPath="url(#wave-path-hero)"
              style={{ position: "absolute", zIndex: 2 }}
            ></rect>
          </svg>
        </div>
      </div>

      <section className="bg-[#F9F9F9] w-full mt-[10rem] ">
        <div className="container mx-auto ">
          {" "}
          <h1 className="text-6xl font-bold text-orange-600 text-center">
            {" "}
            what we do?{" "}
          </h1>{" "}
        </div>
        <div className="p-4 lg:p-8 container mx-auto">
          <div
            data-aos="zoom-in"
            className="flex flex-col overflow-hidden md shadow-sm lg:flex-row"
          >
            <div className="flex items-center justify-center flex-1 ">
              <img src="/Instagrampost _Flatline.png" alt="" className="" />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
              {/* <span className="text-xs uppercase dark:text-coolGray-400">Digital Markting</span> */}
              <h2 className="text-3xl font-bold">Digital Markting</h2>
              <p className="my-6 dark:text-coolGray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              {/* <button type="button" className="self-start">Action</button> */}
              <ul className="list-disc">
                <li>Content Management Systems</li>{" "}
                <li>Content Management Systems</li>{" "}
                <li>Content Management Systems</li>
              </ul>
            </div>
          </div>
          <div
            data-aos="zoom-in-left"
            className="flex flex-col overflow-hidden md shadow-sm lg:flex-row-reverse"
          >
            <div className="flex items-center justify-center flex-1 ">
              <img src="/Designer _Flatline.png" alt="" className=" " />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
              {/* <span className="text-xs uppercase dark:text-coolGray-400">Join, it's free</span> */}
              <h2 className="text-3xl font-bold">Web Development</h2>
              <p className="my-6 dark:text-coolGray-400">
                From simple websites to online stores to custom built
                applications, we do it all.
              </p>
              <ul className="list-disc">
                <li>Content Management Systems</li>
                <li>Payment Processor Integrations</li>
                <li>eCommerce Solutions</li>
                <li>Search Engine Optimization</li>
                <li>Web Design</li>
              </ul>
              {/* <button type="button" className="self-start">Action</button> */}
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex flex-col overflow-hidden md shadow-sm lg:flex-row"
          >
            <div className="flex items-center justify-center flex-1 ">
              <img src="/Userinterface_Flatline.png" alt="" className=" " />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
              {/* <span className="text-xs uppercase dark:text-coolGray-400">Join, it's free</span> */}
              <h2 className="text-3xl font-bold">Mobile Development</h2>
              <p className="my-6 dark:text-coolGray-400">
                We specialize in building native mobile apps for Android and iOS
                using React Native.
              </p>
              {/* <button type="button" className="self-start">Action</button> */}

              <ul className="list-disc">
                <li>React Native Development</li> <li>API Development</li>
                <li>Backend Development</li>
                <li>3rd party Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

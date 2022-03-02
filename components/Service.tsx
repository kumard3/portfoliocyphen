import React from "react";

export default function Service() {
  return (
    <div
      id="services"
      className="flex  flex-col justify-center items-center w-full   text-2xl sm:text-3xl "
    >
      <section className=" w-full mt-[10rem] ">
        <h1 className="text-center font-mono gradientText text-5xl">
          Our Services
        </h1>

        <div className="p-4 lg:p-8 container mx-auto">
          <div
            data-aos="zoom-in"
            className="flex flex-col overflow-hidden md shadow-sm bg-slate-700/10 rounded-3xl my-4 lg:flex-row"
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
          <div
            data-aos="zoom-in"
            className="flex flex-col overflow-hidden md shadow-sm bg-slate-700/10 rounded-3xl my-4 lg:flex-row-reverse "
          >
            <div className="flex items-center justify-center flex-1 ">
              <img src="/Designer _Flatline.png" alt="" className=" " />
            </div>
            <div className="flex flex-col justify-center flex-1 px-12 py-12 ">
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
            className="flex flex-col overflow-hidden md shadow-sm bg-slate-700/10 rounded-3xl my-4 lg:flex-row "
          >
            <div className="flex items-center justify-center flex-1 ">
              <img src="/Instagrampost _Flatline.png" alt="" className="" />
            </div>
            <div className="flex flex-col justify-center flex-1 px-6 py-12 ">
              {/* <span className="text-xs uppercase dark:text-coolGray-400">Digital Markting</span> */}
              <h2 className="text-3xl font-bold">Digital Markting</h2>
              <p className="my-6 dark:text-coolGray-400">
                We convert business into a brand through a recise Digital
                marketing strategy.
              </p>
              {/* <button type="button" className="self-start">Action</button> */}
              <ul className="list-disc">
                <li>Content Management Systems</li>{" "}
                <li>Content Management Systems</li>{" "}
                <li>Content Management Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

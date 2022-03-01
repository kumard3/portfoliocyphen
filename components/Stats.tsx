import React from "react";

export default function Stats() {
  return (
    <div className=" py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className=" text-2xl lg:text-3xl font-bold text-center  mb-4 md:mb-8">
          Trusted by the best
        </h2>

        <div className="sm:h-40 grid grid-cols-2 md:grid-cols-4 sm:content-evenly bg-slate-700/10 rounded-lg gap-6 p-6">
          <a
            href="https://www.expertdental.co.in"
            target="_blank"
            className="flex justify-center text-gray-400"
          >
            <img
              className="w-auto h-[7rem]"
              width="154"
              height="39"
              src="https://www.expertdental.co.in/logo.png"
            />
          </a>

          <a
            href="http://www.gabbahealthhub.com.au/"
            target="_blank"
            className="flex justify-center text-gray-400"
          >
            <img src="http://www.gabbahealthhub.com.au/assets/img/logo.png" />
          </a>

          <a
            href="https://www.etmbikes.in/"
            target="_blank"
            className="flex justify-center text-gray-400"
          >
            <img
              src="etm-logo.png"
              className="w-auto h-[7rem]"
              width="154"
              height="39"
            />
          </a>

          <a href="https://astroyantra.com/" target="_blank" className="flex justify-center ">
            <img
              className=""
              src="https://astroyantra.com/wp-content/uploads/2021/11/cropped-download.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

//https://www.etmbikes.in/l

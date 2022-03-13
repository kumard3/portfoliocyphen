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
              width="100"
              height="100"
              alt="expert dental"
              src="https://www.expertdental.co.in/logo.png"
            />
          </a>

          <a
            href="http://www.gabbahealthhub.com.au/"
            target="_blank"
            className="flex justify-center text-gray-400"
          >
            <img
              alt="gabbahealthhub"
              width="100"
              height="40"
              src="http://www.gabbahealthhub.com.au/assets/img/logo.png"
            />
          </a>

          <a
            href="https://www.etmbikes.in/"
            target="_blank"
            className="flex justify-center text-gray-400"
          >
            <img src="etm-logo.png" width="228" alt="etm" height="101" />
          </a>

          <a
            href="https://astroyantra.com/"
            target="_blank"
            className="flex justify-center "
          >
            <img
              className=""
              alt="astroyantra"
              width="187"
              height="47"
              src="https://astroyantra.com/wp-content/uploads/2021/11/cropped-download.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

//https://www.etmbikes.in/l

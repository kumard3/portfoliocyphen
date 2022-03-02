import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
export default function WhatWeDo() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="about"
      className="flex  flex-col justify-center items-center w-full   text-2xl sm:text-3xl "
    >
      <section className=" w-full mt-[10rem] ">
        <div className="container mx-auto ]">
          {" "}
          <h1 className="text-5xl font-bold gradientText font-mono text-center my-4 mb-[4rem] ">
            {" "}
            What we do?{" "}
          </h1>{" "}
          <div className="flex flex-wrap items-center sm:justify-around px-4 my-[7rem] justify-center">
            <div className="max-w-xl">
              <h1 className="text-5xl font-mono"> <span className="gradientText">Build your brand </span>  and grow your business.</h1>
              <p className="mt-4 max-w-xl font-sans text-xl ">
                We are fully focused to solve your business challenges. No
                matter the technology or architecture, we will find the most
                optimal solution and deliver a ready-to-operate product.
              </p>
            </div>
            <img src="illustration-3.png" />
          </div>
        </div>
      
      </section>
    </div>
  );
}

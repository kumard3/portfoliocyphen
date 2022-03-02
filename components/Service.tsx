import React from "react";
import { ServiceData } from "../data/data";

export default function Service() {
  return (
    <div
      id="services"
      className="flex  flex-col px-4 justify-center items-center w-full  min-h-screen"
    >
      <section className=" w-full mt-[10rem] ">
        <div className="flex justify-center items-center sm:justify-between px-10 sm:flex-row  flex-col">
          <h1 className="text-center font-mono gradientText  text-4xl">
            Our Services
          </h1>
          <button className="gradientbutton px-10 w-[10rem] my-5 sm:m-0 py-[.5em] rounded-xl text-xl font-mono">
            {" "}
            <a href="/#contact"> Service</a>{" "}
          </button>
        </div>
        <div className="justify-center items-center  flex flex-wrap">
          {ServiceData.map((n, index) => {
            return (
              <div
                key={index}
                className="flex flex-col overflow-hidden mx-2 h-[24rem] max-w-[390px] shadow-sm bg-slate-700/10 rounded-3xl my-4 "
              >
                <div className="flex items-center justify-center flex-1 ">
                  <img src={n.image} alt={n.image} />
                </div>
                <div className=" flex flex-col justify-center  bg-black/10 backdrop-blur-xl relative rounded-b-xl bottom-[11.5vh] flex-1  px-9 pt-5">
                  <h2 className="text-[1.7rem] font-mono font-bold">
                    {n.title}
                  </h2>
                  <p className=" text-xl">{n.shortDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

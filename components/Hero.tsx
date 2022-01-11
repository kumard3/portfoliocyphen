export default function Hero() {
  return (
    <section className="sm:px-[100px] pt-[100px]" id="hero">
      <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center  lg:text-left">
          <div className="">
            <div className="mb-[.7rem] ">
              <h1 className="text-4xl font-bold  sm:text-6xl">
                Digital
                <span className="text-[#F13223]"> product</span>
              </h1>
            </div>

            <div className="my-[2rem]">
              <h1 className="text-4xl font-bold  sm:text-5xl">
                connecting <span className="text-[#F13223]">technics</span>
              </h1>
            </div>
            <div className="mb-[3rem]">
              <h1 className="text-4xl font-bold  sm:text-5xl ">& creativity</h1>
            </div>
          </div>
          <button className="bg-red-500 p-3 rounded-xl text-white font-bold text-3xl">call to action</button>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/Startup_Flatline.svg"
            alt=""
            className="object-contain  sm:h-[35rem]"
          />
        </div>
      </div>
    
    </section>
  );
}

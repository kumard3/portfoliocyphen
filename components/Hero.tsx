export default function Hero() {
  return (
    <section className=" w-full h-screen overflow-hidden  " id="hero">


      <div className="flex flex-col  justify-center items-center w-full h-full text-center px-2">
        <p className="text-2xl font-mono  gradientText"> We Deliver </p>
        <h1 className="text-5xl sm:text-7xl font-sans font-bold my-2 ">
          {" "}
          World-Class Digital Solutions
        </h1>
        <h1 className="sm:text-6xl text-4xl font-sans font-bold">
          {" "}
          <span className="underline-offset-1 decoration-red-400	  underline un ">
            On-Time
          </span>{" "}
          <span className="underline-offset-1  decoration-blue-400	 underline ">
            In-Budget
          </span>
        </h1>
        <p className="max-w-3xl text-xl text-gray-400 my-5 flex flex-col">
          We are product developers, advisors and engineers solving business
          challenges via creating future-ready apps, websites and digital
          solutions.
        </p>
        <button className=" px-8 py-3 min-h-[3rem] mr-4 active:scale-105 scale-110 active:transition-all text-lg font-bold rounded gradientbutton text-white  ">
          {" "}
          GET A QUOTE IN 24 HOURS
        </button>
      </div>
    </section>
  );
}

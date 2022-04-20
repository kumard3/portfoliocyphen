// import React, { useState, useEffect, useRef } from "react";
// //@ts-ignore

// import BIRDS from "vanta/dist/vanta.birds.min";
// //@ts-ignore
// import HALO from "vanta/dist/vanta.halo.min";
// import * as THREE from "three";
// import NET from "vanta/dist/vanta.net.min";

// export default function Hero() {
//   // const [vantaEffect, setVantaEffect] = useState(0);
//   // const myRef = useRef(null);
//   // useEffect(() => {
//   //   if (!vantaEffect) {
//   //     setVantaEffect(
//   //       HALO({
//   //         el: myRef.current,
//   //         THREE,
//   //       })
//   //     );
//   //   }
//   //   return () => {
//   //     //@ts-ignore
//   //     if (vantaEffect) vantaEffect.destroy();
//   //   };
//   // }, [vantaEffect]);
//   const [vantaEffect, setVantaEffect] = useState(0);
//   const vantaRef = useRef(null);
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         BIRDS({
//           el: vantaRef.current,
//           THREE,
//         })
//       );
//     }
//     return () => {
//       //@ts-ignore
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);
//   return (
//     <>
//       <>
//         <div id="halo" ref={vantaRef}>
//           {/* <canvas width="400" height="400"></canvas> */}
//         </div>
//       </>
// <section className=" w-full h-screen overflow-hidden  " id="hero">
//   <div className="flex flex-col  justify-center items-center w-full h-full text-center px-2">
//     <p className="text-2xl font-mono  gradientText"> We Deliver </p>
//     <h1 className="text-5xl sm:text-7xl font-sans font-bold my-2 ">
//       {" "}
//       World-Class Digital Solutions
//     </h1>
//     <h1 className="sm:text-6xl text-4xl font-sans font-bold">
//       {" "}
//       <span className="underline-offset-1 decoration-red-400	  underline un ">
//         On-Time
//       </span>{" "}
//       <span className="underline-offset-1  decoration-blue-400	 underline ">
//         In-Budget
//       </span>
//     </h1>
//     <p className="max-w-3xl text-xl text-gray-400 my-5 flex flex-col">
//       We are product developers, advisors and engineers solving business
//       challenges via creating future-ready apps, websites and digital
//       solutions.
//     </p>
//     <a
//       href="mailto:cypheninnovations@gmail.com"
//       className=" px-8 py-3 min-h-[3rem] mr-4 active:scale-105 scale-110 active:transition-all text-lg font-bold rounded gradientbutton text-white  "
//     >
//       {" "}
//       GET A QUOTE IN 24 HOURS
//     </a>
//   </div>
// </section>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
//@ts-ignore

import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [vantaEffectMobile, setVantaEffectMobile] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: "#halo",
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 100.0,
          minWidth: 100.0,
          baseColor: 0x0,
          backgroundColor: 0x0,
          amplitudeFactor: 1.4,
          xOffset: 0.22,
          yOffset: 0.08,
        })
      );
    }
    return () => {
      //@ts-ignore
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  useEffect(() => {
    if (!vantaEffectMobile) {
      setVantaEffectMobile(
        HALO({
          el: "#haloMobile",
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x0,
          backgroundColor: 0x0,
          xOffset: 0.45,
          yOffset: 0.36,
        })
      );
    }
    return () => {
      //@ts-ignore
      if (vantaEffectMobile) vantaEffectMobile.destroy();
    };
  }, [vantaEffectMobile]);
  return (
    <div className="min-h-screen overflow-hidden relative">
      <div
        className="-top-[300px] hidden sm:inline overflow-hidden sm:top-0 -right-[200px] sm:right-0 z-0  h-[900px] w-full justify-center bg-contain absolute "
        id="halo"
      ></div>
      <div
        className=" inline sm:hidden overflow-hidden sm:top-0  sm:right-0 z-0  h-[900px] w-full justify-center bg-contain absolute "
        id="haloMobile"
      ></div>
      <section
        className=" w-full h-screen overflow-hidden  relative z-10"
        id="hero"
      >
        <div className="flex justify-center flex-col items-start h-full px-10">
          <div className="">
            <p className="text-xl font-mono ml-2  gradientText"> We Deliver </p>

            <h1 className="text-5xl sm:text-7xl font-sans font-bold my-2 max-w-xl ">
              World-Class Digital Solutions 
            </h1>
            <h1 className="sm:text-6xl text-4xl font-sans  font-bold my-3 ">
              <span className="underline-offset-1 decoration-red-400	  underline un ">
                On-Time
              </span>{" "}
              <span className="underline-offset-1  decoration-blue-400	 underline ">
                In-Budget
              </span>
            </h1>
            <p className=" max-w-xl text-xl text-gray-400 my-5 text-left flex flex-col">
              We are product developers, advisors and engineers solving business
              challenges via creating future-ready apps, websites and digital
              solutions.
            </p>
            <a
              href="mailto:cypheninnovations@gmail.com"
              className=" px-8 py-3 min-h-[3rem] mr-4 active:scale-105 scale-110 active:transition-all text-lg font-bold rounded gradientbutton text-white  "
            >
              {" "}
              GET A QUOTE IN 24 HOURS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Drawer } from "@mantine/core";

import Link from "next/link";
import { useRouter } from "next/router";
import useScrollDirection from "./useScrollDirection";
const navlink = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Services",
    href: "/#services",
  },
  {
    name: "Work",
    href: "/#work",
  },  {
    name: "Contact",
    href: "/#contact",
  },
];

export default function Nav() {

  const [opened, setOpened] = useState(false);
  const scrollDirection = useScrollDirection("down");


  return (
    // <Popover className= {`sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 bg-white supports-backdrop-blur:bg-white/95 ${show && 'bg-inherit	'}`}>
    <div
      className={`fixed w-full flex  z-50 backdrop-blur-sm text-xl font-bold drop-shadow-xl flex-none ease-in-out duration-300 0 lg:z-50 lg:border-b   ${
        scrollDirection === "down" &&
        "text-xl font-bold drop-shadow-xl mt-[-120px] ease-in-out duration-300 	"
      } ${
        scrollDirection === "up" &&
        " mt-0 backdrop-blur-sm text-xl font-bold drop-shadow-xl flex-none ease-in-out duration-300 0 lg:z-50 lg:border-b "
      }`}
    >
      <div className="w-full container mx-auto font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center   py-6 sm:justify-between sm:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <img src="/cyphen-logo.png" alt="logo" className="h-[3.5rem]" />
                {/* <span className="text-4xl font-bold">logo</span> */}
              </Link>
            </div>
            <div className="-mr-2 -my-2 sm:hidden">
              <div
                onClick={() => setOpened(true)}
                className=" rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 "
              >
                <button className="inline-flex items-center lg:hidden  focus-visible:ring ring-indigo-300  active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <nav className="hidden sm:flex space-x-10 items-center">
              {navlink.map((n) => {
                return (
                  <Link key={n.name} href={n.href}>
                    {n.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          padding="xl"
          position="right"
          size="lg"
          aria-labelledby="drawer-title"
          aria-describedby="drawer-body"
          closeButtonLabel="Close drawer"
        
        >
          <div className="mt-6 ">
            <nav className="grid gap-y-8">
              {navlink.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-black hover:text-white"
                >
                  <h1 className="my-3 ml-3 text-3xl font-bold ">{item.name}</h1>
                </a>
              ))}
            </nav>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

// bg-[#EF404A]

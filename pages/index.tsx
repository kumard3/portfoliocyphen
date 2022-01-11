import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";

const Home: NextPage = () => {
  return (
    <div className=" min-h-screen bg-[#141628] text-white	">
      <Head>
        <title>Cyphen Innovations</title>
        <meta name="description" content="Cyphen Innovations site." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <WhatWeDo />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

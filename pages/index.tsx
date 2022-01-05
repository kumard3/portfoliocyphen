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
    <div className=" min-h-screen 	">
      <Head>
        <title>Kumar Deepanshu portfolio</title>
        <meta name="description" content="My Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
    <WhatWeDo />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatWeDo from "../components/WhatWeDo";
import SEO from "../components/Seo";
import Stats from "../components/Stats";


const Home: NextPage = () => {
  return (
    <div className="">
      <SEO
        title={"Cyphen Innovations"}
        description={
          "Cyphen is a team if professionals capable of making your business grow digitally"
        }
        image={""}
        url={""}
        content={"Grow your Business Digitally | In India"}
      />
      <Nav />
      <Hero />
      <Stats />
      <WhatWeDo />
      <Carousel />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

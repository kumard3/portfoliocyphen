/* eslint-disable react/no-unescaped-entities */
import React from "react";
interface Props {
  title: string;
  children: React.ReactNode;
}
const Accordion = ({ title, children }: Props) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open text-red-400" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed " : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default function Development() {
  return (
    <>
      <p className="text-2xl font-mono text-center mb-10 mt-2 gradientText"> Our Expertise</p>
      {/* <h1 className="text-5xl text-center mb-10">Technologies we are GROOVY with</h1> */}
      <div className="wrapper bg-slate-700/10 container mx-auto rounded-xl p-4 ">
        <Accordion title="Mobile App Development">
          There are so many ways to build mobile apps in the market, and we
          happen to be experts in some of the best technologies to craft custom,
          efficient, and engaging mobile applications. We use high-end, latest
          technologies for building attractive, user-friendly, and widely
          accepted iOS and Android mobile applications. We have served B2B, B2E,
          B2C mobile app requirements of our clients from various industries.
          Our experts carry out the process of creating applications, from the
          design to clickable prototypes, that will help understand the needs of
          the market and its potential users. Then, our development team build
          robust, secure, scalable mobile solutions, and connected web
          platforms.
        </Accordion>
        <Accordion title="Web App Development">
          We take pride in our ability to deliver the best and cost-effective
          custom web design and development solutions. We create unique
          websites, web applications, admin panels, web tools, etc., for global
          businesses, from start-ups to big business giants. We turned their
          ideas into reality. We have the capability to provide solutions like
          UI/UX designs, Frontend, and Backend of Web Applications, Enterprise
          Software, CMS Sites, E-commerce platforms, etc. We build elegant,
          secure, and scalable web solutions that achieve actual business goals
          and leave a long-lasting impression on customers.
        </Accordion>
        <Accordion title="MERN Stack Development">
          We call ourselves as MERN Stack experts and using MERN stack, we have
          developed some of the most complex, challenging, and custom web
          applications with multiple features. We have great knowledge and
          experience in using technologies that fall under MERN stack which are
          MongoDB, ExpressJS, React.js, and Node.js. We cater to our clients'
          business-specific requirements using our best MERN stack resources and
          build them solutions that will upscale their businesses.
        </Accordion>
      </div>
    </>
  );
}

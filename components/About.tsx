export default function About() {
  const data = [
    {
      title: "Web",
      content:
        "We collaborate with you to create high quality websites, scalable and efficient for your business",
    },
    {
      title: "Web Apps",
      content: "One development for all platforms. We build webs with the best of apps and apps with the advantajes of a web.",
    },{
      title: "Digital branding",
      content: "We observe the product globally to offer you an optimum result, going from branding to the design system.",
    },,
    {
      title: "Web Apps",
      content: "One development for all platforms. We build webs with the best of apps and apps with the advantajes of a web.",
    },{
      title: "Digital branding",
      content: "We observe the product globally to offer you an optimum result, going from branding to the design system.",
    },,
    {
      title: "Web Apps",
      content: "One development for all platforms. We build webs with the best of apps and apps with the advantajes of a web.",
    },{
      title: "Digital branding",
      content: "We observe the product globally to offer you an optimum result, going from branding to the design system.",
    },
  ];
  return (
    <div id="about" className="container flex flex-col w-full mx-auto">
      <h2 className="about-h2 lg:text-secheader mt-8 text-4xl font-semibold leading-normal text-white">
        What we do
      </h2>
      <div className="flex flex-col  rounded-md shadow-sm">
        <div className="flex flex-row  overflow-x-scroll my-12">
          {data.map((n: any) => {
            return (
              <>
                <div className="flex flex-col mx-[1em]  shadow-xl  border-white border-[1px] p-[1em] ">
                
                  <div>
                  <p className="section-category text-grey text-2xl font-semibold ">
                      {n.title}
                    </p>
                  </div>
                <div className="">
                  <p className=" max-w-lg text-xl font-semibold">
                    {n.content}{" "}
                  </p>
                </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";

function About() {
  return (
    <section
      id="about"
      className="relative z-[11] -mb-5 flex items-center justify-center rounded-none rounded-bl-3xl rounded-br-3xl pb-8"
    >
      <div className="mt-5 w-full max-md:mt-10 max-md:max-w-full">
        {/* row */}
        <div className="relative z-10 flex flex-col pb-8 text-center max-md:ml-0 max-md:w-full">
          <h1 className="mb-8 text-6xl font-bold uppercase   leading-none max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            About Us
          </h1>
          <p className="mb-8">
            Webtek Digital is a premier SEO agency dedicated to helping global
            brands attract and convert more customers through Google Search
          </p>
        </div>
        {/* row */}
        <div className="flex gap-5 px-16 max-lg:px-5 max-md:flex-col-reverse max-md:gap-0">
          {/* column 1/4 */}
          <div className="relative z-10 flex min-h-[300px] w-[25%] flex-col pb-8 max-md:ml-0 max-md:w-full">
            <p className="">
              Transform Your Online Presence with Webtek Digital: Premier SEO
              Experts in Conversion-Driven Strategies
            </p>

            <hr className="yellow-bg h-1 w-[80px] border-t-0 dark:bg-white/10" />
          </div>
          {/* column 1/2 */}
          <div className="relative isolate z-10 mb-8 flex  w-[50%]  flex-col max-md:ml-0 max-md:w-full">
            {/* stroke behind */}
            <div className="absolute inset-0 -z-10 h-full w-full rotate-3 border border-solid border-black"></div>
            <span className="relative overflow-clip">
              <img
                src={`${process.env.PUBLIC_URL}/img/about-img.png`}
                alt=""
                className="aspect-[1.5/1] w-full object-cover"
              />

              {/* background circle */}
              <div className="yellow-border absolute bottom-0 left-0 aspect-square w-[250px] translate-x-[-50%] translate-y-1/2 rounded-full border-[20px] border-solid"></div>
            </span>
          </div>
          {/* column 1/4 */}
          <div className="relative z-10 flex  w-[25%] flex-col pb-8 max-md:ml-0 max-md:w-full">
            <p className="mb-8">
              <mark>We excel in advanced SEO strategies,</mark>
              offering a complete end-to-end service that integrates content
              marketing, digital PR, technical SEO, and CRO to drive significant
              results. Our holistic approach has consistently generated
              impressive revenue growth for our clients, surpassing the
              performance of most other agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

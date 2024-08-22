import React from "react";

function Mission() {
  return (
    <section
      id="mission"
      className="relative z-[11] -mb-5 flex aspect-video flex-col items-center justify-between overflow-clip rounded-none py-24 text-white max-lg:aspect-auto"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/mission-bg.png)`,
        backgroundSize: "cover",
      }}
    >
      {/* background circle */}
      <div className="yellow-border absolute bottom-0 right-0 aspect-square w-[50vw] translate-x-[60%] translate-y-[60%] rounded-full border-[5vw] border-solid"></div>

      {/* row */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center pb-24 text-center max-md:ml-0 max-md:w-full">
        <h1 className="mb-8 text-6xl font-bold uppercase   leading-none max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Our Mission
        </h1>
        <p className="mb-8 text-3xl">
          At Webtek Digital, our mission is to empower your business with
          innovative and effective SEO solutions.
        </p>

        <hr className="yellow-bg h-1 w-[80px] border-t-0 dark:bg-white/10" />
      </div>
      {/* row */}
      <div className="flex gap-5 px-16 max-lg:px-5 max-md:flex-col max-md:gap-0">
        {/* column 1/4 */}
        <div className="relative z-10 flex basis-2/4 flex-col pb-8 max-md:ml-0 max-md:w-full">
          <p className="">
            <mark className="text-white">
              We are dedicated to driving exceptional growth and success
            </mark>{" "}
            by enhancing your online presence, optimizing your search engine
            performance, and delivering measurable results that exceed your
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;

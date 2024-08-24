import * as React from "react";
import ServiceSlider from "../components/ServiceSlider";

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative z-[8] flex flex-col items-center bg-[#F7F7F7] py-16  max-md:px-5"
    >
      <div
        className="content-wrapper flex w-full flex-col"
        style={{ maxWidth: "calc((280px * 4) + 3em)" }}
      >
        {/* row */}
        <div className="relative flex gap-5 px-16 max-lg:px-5 max-md:flex-col  max-md:gap-0">
          <div className="basis-3/4">
            <h1 className="mb-8 text-6xl font-bold uppercase   leading-none max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Our Services
            </h1>
          </div>
          <div className="basis-1/4">
            <p className="mb-8">
              At Webtek Digital, we provide a full range of SEO services to
              boost your online presence and drive business growth. Our expert
              team employs advanced techniques to optimize your website, engage
              your audience, and convert visitors into loyal customers. Discover
              how our tailored solutions can help you achieve your digital
              marketing goals.
            </p>
          </div>
        </div>
        <div className="max-w-full">
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
}

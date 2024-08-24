import * as React from "react";
import ServiceSlider from "../components/ServiceSlider";
import { MoveUpRightIcon } from "lucide-react";

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
              Industries We Serve
            </h1>
            <p>
              At Webtek Digital, we partner with diverse industries to enhance
              their online visibility and generate more leads.
            </p>

            <hr className="yellow-bg h-1 w-[80px] border-t-0 dark:bg-white/10" />
          </div>
          <div className="basis-1/4">
            <p className="mb-8 text-sm">
              <mark>We ensure your website attracts visitors</mark> effectively.
              Our tailored solutions help your business stand out in search
              results, driving growth and success. Let us elevate your digital
              presence and bring your goals to fruition.
            </p>

            <button className="yellow-bg inline-flex aspect-square w-[150px] items-center justify-center rounded-full">
              Read More
              <MoveUpRightIcon />
            </button>
          </div>
        </div>
        <div className="max-w-full">
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import ServiceSlider from "../components/ServiceSlider";

export default function Industries() {
  return (
    <section
      id="services"
      className="relative z-[8] -mb-5 flex flex-col items-center rounded-bl-3xl rounded-br-3xl  bg-neutral-900 p-20 text-white max-md:px-5"
    >
      <div
        className="content-wrapper flex w-full flex-col"
        style={{ maxWidth: "calc((280px * 4) + 3em)" }}
      >
        <div className="mt-2 h-[3px] w-[45px] shrink-0 self-start bg-orange-100 max-md:ml-2.5"></div>
        <div className="mt-4 self-start text-left font-medium max-md:max-w-full">
          Why Choose Webtek Digital for Website Development Services?
        </div>
        <div className="mt-4 text-left text-sm max-md:max-w-full">
          Look no further than Webtek Digital for your business transformation.
          With a proven track record of crafting successful websites for our
          clients, we stand out as the perfect partner for your digital journey.
          <br />
        </div>
        <div className="max-w-full">
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
}

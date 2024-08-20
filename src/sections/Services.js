import * as React from "react";
import ServiceSlider from "../components/ServiceSlider";

export default function Services() {
  return (
    <section
      id='services'
      className='-mb-5 relative z-[8] flex flex-col items-center p-20 text-white  rounded-br-3xl rounded-bl-3xl bg-neutral-900 max-md:px-5'>
      <div
        className='content-wrapper w-full flex flex-col'
        style={{ maxWidth: "calc((280px * 4) + 3em)" }}>
        <div className='shrink-0 self-start mt-2 bg-orange-100 h-[3px] w-[45px] max-md:ml-2.5'></div>
        <div className='mt-4 self-start text-left font-medium max-md:max-w-full'>
          Why Choose Webtek Digital for Website Development Services?
        </div>
        <div className='mt-4 text-sm max-md:max-w-full text-left'>
          Look no further than Webtek Digital for your business
          transformation. With a proven track record of crafting
          successful websites for our clients, we stand out as the
          perfect partner for your digital journey.
          <br />
        </div>
        <div className='max-w-full'>
          <ServiceSlider />
        </div>
      </div>
    </section>
  );
}

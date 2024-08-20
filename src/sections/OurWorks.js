import WorksSlider from "../components/WorksSlider";
import * as React from "react";

export default function OurWorks() {
  return (
    <section
      id='works'
      className='-mb-5 relative z-[7] rounded-br-3xl rounded-bl-3xl flex flex-col p-3 md:p-20 md:pl-0 bg-white'>
      <div className='max-md:max-w-full flex flex-col relative md:absolute md:w-[33.333%] self-end rounded-none text-neutral-900 max-md:px-5'>
        <div className='mt-11 self-start bg-violet-700 h-[3px] w-[45px] max-md:mt-10 max-md:mr-2.5' />
        <div className='mt-4 text-base font-medium max-md:mr-2.5'>
          WHAT MAKES US UNIQUE?
        </div>
        <div className='mt-4 text-sm w-auto max-md:mr-2.5'>
          Our Exceptional Website Development Services At Webtek
          Digital, we stand out by providing a comprehensive array of
          website development services tailored to your exact business
          needs.
          <br />
        </div>
      </div>
      <WorksSlider />
    </section>
  );
}

import TestSlider from "../components/TestSlider";
import React from "react";

function Testimonials() {
  return (
    <section
      id='testimonials'
      className='rounded-br-3xl rounded-bl-3xl -mb-5 relative z-[5] rounded-br-3xl rounded-bl-3xl  flex flex-col justify-center items-center px-16 py-16 rounded-none bg-[#121212] max-md:px-5'>
      <div className='flex flex-col items-start mt-4 w-full max-w-[1200px] max-md:max-w-full'>
        <div className='shrink-0 bg-orange-100 h-[3px] w-[45px]' />
        <div className='mt-4 text-base font-medium text-white max-md:max-w-full'>
          Success Stories
        </div>
        <div className='mt-4 text-sm text-white max-md:max-w-full'>
          Here's what our customers have to say about their
          experiences with us!
        </div>
        <TestSlider />
      </div>
    </section>
  );
}

export default Testimonials;

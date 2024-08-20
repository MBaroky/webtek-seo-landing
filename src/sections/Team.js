import * as React from "react";
import rightArrow from "../assets/right-arrow.svg";
import { Button } from "../components/ui/button";
import BookSheet from "../components/BookSheet";

export default function Team() {
  const { PUBLIC_URL } = process.env;
  return (
    <section
      id='team'
      className='-mb-5 relative z-[9] flex justify-center items-center px-16 py-20 text-base font-medium rounded-none bg-[linear-gradient(180deg,#F9E1D0_0%,#EEEEFD_100%)] text-neutral-900 max-md:px-5 rounded-br-3xl rounded-bl-3xl '>
      <div className='flex flex-col w-full max-w-[1214px] max-md:max-w-full'>
        <div className='shrink-0 w-12 bg-violet-700 h-[3px]' />
        <div className='mt-4 max-md:max-w-full'>
          Trust the leading Website Development Company in Dubai
        </div>
        <div className='mt-4 text-4xl font-bold max-md:max-w-full'>
          From dynamic e-commerce platforms to captivating gaming
          websites and versatile utility sites, we have the expertise
          to transform your ideas into stunning digital realities. At
          Webtek Digital, we don't just create exceptional websites;
          we also offer comprehensive post-launch support and
          maintenance to
          <span className='font-outline-1 text-[#EEEEFD]'>
            &nbsp; keep your online presence cutting-edge and
            operating flawlessly.
          </span>
          <br />
        </div>
        <BookSheet>
          <Button
            variant='gohst'
            className='flex px-0 justify-between gap-2 self-start mt-4'>
            <div>Read More</div>
            <img
              loading='lazy'
              src={rightArrow}
              className='shrink-0 w-5 aspect-square'
              alt=''
            />
          </Button>
        </BookSheet>
        <img
          loading='lazy'
          src={`${PUBLIC_URL}/img/Banners-06.webp`}
          className='mt-12 w-full object-cover rounded-xl aspect-[3.7] max-md:mt-10 max-md:max-w-full'
          alt=''
        />
      </div>
    </section>
  );
}

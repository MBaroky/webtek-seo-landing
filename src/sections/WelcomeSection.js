import * as React from "react";
import rightArrow from "../assets/right-arrow.svg";
import coverImg from "../assets/cover-image.svg";
import { LogosCarousel } from "../components/LogosCarousel";
import BookSheet from "../components/BookSheet";
import { Button } from "../components/ui/button";

function WelcomeSection() {
  return (
    <section
      id='welcome'
      className='-mb-5 relative flex justify-center items-center px-16 py-20 rounded-none bg-neutral-900 max-md:px-5 rounded-br-3xl rounded-bl-3xl z-[11]'>
      <div className='mt-24 w-full max-w-[1223px] max-md:mt-10 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col min-h-[300px] pb-[150px] w-[67%] max-md:ml-0 max-md:w-full relative z-10'>
            <h1 className='text-6xl max-w-[556px] font-bold text-white  max-md:mt-10 max-md:max-w-full max-md:text-4xl'>
              Leading Website Design & Development
              <span className='text-black font-outline-2 '>
                &nbsp; Agency in Dubai
              </span>
            </h1>
            <img
              src={coverImg}
              className='absolute right-0 w-[250px] h-auto bottom-0 md:h-full md:w-auto -z-10'
              alt='cover'
            />
          </div>
          <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col items-start self-stretch my-auto text-white max-md:mt-10'>
              <div className='shrink-0 bg-orange-100 h-[3px] w-[45px]' />
              <p className='self-stretch mt-4 text-sm'>
                Ready to elevate your online presence? Look no further
                than Webtek Digital. We excel in creating visually
                striking, user-friendly websites that captivate
                attention, engage visitors, and deliver tangible
                results. Backed by our team of skilled developers,
                designers, and digital strategists, we bring your
                vision to life with a captivating online presence.
              </p>
              <BookSheet>
                <Button className='flex gap-2 mt-4 text-base font-medium'>
                  <span>Get Exclusive Discounts! </span>
                  <img
                    loading='lazy'
                    src={rightArrow}
                    alt='Arrow icon'
                    className='shrink-0 w-5 aspect-square'
                  />
                </Button>
              </BookSheet>
            </div>
          </div>
        </div>
        <LogosCarousel />
      </div>
    </section>
  );
}

export default WelcomeSection;

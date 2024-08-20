import * as React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  // } from "@/components/ui/carousel";
} from "./ui/carousel_mod";

import arrowRight from "../assets/works-arrow-right.svg";
import arrowLeft from "../assets/works-arrow-left.svg";

function HeroSection({ title, backgroundImage }) {
  return (
    <section className='aspect-video flex flex-col max-md:ml-0 max-md:w-full'>
      <div className='flex flex-col grow justify-center text-3xl font-bold leading-10 text-white max-md:mt-8 max-md:max-w-full'>
        <div className='overflow-hidden relative flex-col px-0 max-md:pt-10 max-md:pr-8 max-md:pl-5 max-md:max-w-full'>
          <img
            src={backgroundImage}
            alt=''
            className='  inset-0 w-full'
          />
          <h2 className='z-10 absolute bottom-5 px-5 text-xl'>
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioSlider({ data }) {
  return (
    <div className='flex flex-col'>
      <div className='w-full max-md:max-w-full'>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className='w-full  mt-5'>
          <CarouselContent className='-ml-1'>
            {data.map((section, index) => (
              <CarouselItem
                key={index}
                className='pl-3  md:basis-6/12'>
                <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                  <HeroSection
                    key={index}
                    title={section.title}
                    backgroundImage={section.backgroundImage}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
        <CarouselNext /> */}

          <div className='flex  items-center justify-center max-w-[350px] mx-auto mt-10 gap-10'>
            <CarouselPrevious className='relative mt-0 left-auto ml-0 bg-transparent border-none w-[120px] bg-image'>
              <img className='max-w-[120px]' src={arrowLeft} alt='' />
            </CarouselPrevious>
            <CarouselNext className='relative right-auto mr-0 bg-transparent border-none w-[120px] bg-image'>
              <img
                className='max-w-[120px]'
                src={arrowRight}
                alt=''
              />
            </CarouselNext>

            {/* <img
              className='max-w-[120px]'
              // onClick={emblaApi.scrollNext}
              src={arrowLeft}
              alt=''
            />
            <img className='max-w-[120px]' src={arrowRight} alt='' /> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
}

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
  // } from "@/components/ui/carousel";
} from "./ui/carousel_mod";

// import arrowRight from "../assets/works-arrow-right.svg";
// import arrowLeft from "../assets/works-arrow-left.svg";

function HeroSection({ title, backgroundImage }) {
  return (
    <section className="flex aspect-video flex-col max-md:ml-0 max-md:w-full">
      <div className="flex grow flex-col justify-center text-3xl font-bold leading-10 text-white max-md:mt-8 max-md:max-w-full">
        <div className="relative flex-col overflow-hidden px-0 max-md:max-w-full max-md:pl-5 max-md:pr-8 max-md:pt-10">
          <img src={backgroundImage} alt="" className="  inset-0 w-full" />
          <h2 className="absolute bottom-5 z-10 px-5 text-xl">{title}</h2>
        </div>
      </div>
    </section>
  );
}

export default function ClientsSlider({ data }) {
  return (
    <div className="flex flex-col">
      <div className="w-full max-md:max-w-full">
        <Carousel
          opts={{
            align: "start",
            // loop: true,
          }}
          plugins={
            [
              // Autoplay({
              //   delay: 2000,
              // }),
            ]
          }
          className="mt-5  w-full"
        >
          <CarouselContent className="-ml-3">
            {data.map((section, index) => (
              <CarouselItem key={index} className="pl-3  lg:basis-1/3">
                <div className="flex aspect-video gap-5 max-md:flex-col max-md:gap-0">
                  <HeroSection
                    key={index}
                    title={section.title}
                    backgroundImage={section.backgroundImage}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mx-auto  mt-10 flex max-w-[350px] items-center justify-center gap-10">
            <CarouselDots />
            {/* <CarouselPrevious className="bg-image relative left-auto ml-0 mt-0 w-[120px] border-none bg-transparent">
              <img className="max-w-[120px]" src={arrowLeft} alt="" />
            </CarouselPrevious>
            <CarouselNext className="bg-image relative right-auto mr-0 w-[120px] border-none bg-transparent">
              <img className="max-w-[120px]" src={arrowRight} alt="" />
            </CarouselNext> */}
          </div>
        </Carousel>
      </div>
    </div>
  );
}

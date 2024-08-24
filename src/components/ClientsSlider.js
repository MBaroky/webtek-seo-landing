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

function HeroSection({ title, body }) {
  return (
    <section className="flex aspect-[3/1] flex-col  p-5 py-8  max-md:ml-0 max-md:w-full">
      <div className="text-dark flex grow flex-col justify-center   max-md:max-w-full">
        <div className="relative flex-col overflow-hidden px-0 leading-none max-md:max-w-full max-md:pt-10">
          <p className="py-5 text-sm first-letter:text-yellow-400">{title}</p>
          <p className="text-xs">{body}</p>
        </div>
      </div>
    </section>
  );
}

export default function ClientsSlider({ data }) {
  return (
    <div className="realtive my-8 flex flex-col xl:absolute xl:left-[50%] xl:min-w-[1280px] xl:translate-x-[-50%]">
      <div className="w-full max-md:max-w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            // dragFree: true,
          }}
          plugins={[
            Autoplay({
              delay: 12000,
            }),
          ]}
          className="shadcn-slider mt-5 w-full"
        >
          <CarouselContent className="shadcn-slider-wrapper -ml-3">
            {data.map((section, index) => (
              <CarouselItem
                key={index}
                className="shadcn-slider-item  pl-3 xl:basis-1/3"
              >
                <div className="slider_item_inner flex gap-5 max-md:flex-col max-md:gap-0">
                  <HeroSection
                    key={index}
                    title={section.title}
                    body={section.body}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mx-auto  mt-16 flex max-w-[350px] items-center justify-center gap-10">
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

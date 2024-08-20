import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { logos } from "../data/logos";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
  // } from "@/components/ui/carousel";
} from "./ui/carousel_mod";

export function LogosCarousel() {
  return (
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
        {logos?.map((url, index) => (
          <CarouselItem
            key={index}
            className='pl-1 basis-1/3 md:basis-1/4 lg:basis-2/12'>
            <div className='p-1'>
              <div className='flex aspect-video items-center justify-center '>
                <img
                  style={{ filter: "grayscale(1) invert(1)" }}
                  src={url}
                  alt=''
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}

import * as React from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonials";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "./ui/carousel_mod";

export default function TestSlider() {
  return (
    <Carousel
      opts={{
        breakpoints: {
          "(min-width: 768px)": { loop: false },
        },
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className='w-full  mt-5'>
      <CarouselContent className='flex justify-between items-start self-stretch mt-12 max-md:mt-10 items-stretch'>
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className={`md:basis-1/3 flex ${
              index !== 0
                ? "md:pl-5  md:border-l-[1px] border-white border-solid"
                : ""
            } ${index < testimonials.length - 1 ? "md:pr-5" : ""}`}>
            <TestimonialCard {...testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}

import * as React from "react";
import { servicesList } from "../data/servicesData";
import Service from "./Service";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "./ui/carousel_mod";

export default function ServiceSlider() {
  return (
    <div className='flex flex-col'>
      <div className='w-full'>
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
          <CarouselContent className='-ml-1 lg:flex lg:flex-wrap lg:w-full mt-9 lg:flex-row lg:items-stretch'>
            {servicesList.map((service, index) => (
              <CarouselItem
                key={index}
                className='pl-3 mb-2 max-w-[280px] lg:basis-1/4'>
                <Service
                  img={service.img}
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>
      </div>
    </div>
  );
}

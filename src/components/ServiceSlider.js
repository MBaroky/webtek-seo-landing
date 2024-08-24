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
    <div className="flex flex-col">
      <div className="w-full">
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
          className="mt-5  w-full"
        >
          <CarouselContent className="-ml-1 mb-8 mt-9 lg:flex lg:w-full  lg:flex-row lg:items-stretch">
            {servicesList.map((service, index) => (
              <CarouselItem key={index} className="mb-2 pl-3 md:basis-1/3">
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

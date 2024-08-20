import React from "react";
import { logos } from "../data/logos";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "../components/ui/carousel_mod";

function Clients() {
  return (
    <section
      id="clients"
      className=" z- relative z-[4] -mb-5 flex flex-col items-center justify-center rounded-none rounded-bl-3xl rounded-br-3xl bg-white px-16 py-20 max-md:px-5"
    >
      <div className="mt-2.5 flex w-full max-w-[1200px] flex-col items-center max-md:max-w-full">
        <div className="flex gap-5 text-6xl font-bold max-md:flex-wrap max-md:text-4xl">
          <div className="flex-auto text-center text-neutral-900 max-md:text-4xl">
            Join our growing list of{" "}
            <span className="font-outline-1 text-white">happy clients</span>
          </div>
        </div>
        <Carousel
          opts={{
            breakpoints: {
              // "(min-width: 768px)": { loop: false },
            },
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="-ml-1 w-full"
        >
          <div className="absolute left-[25%] top-[50%] h-[80%] w-[1px] translate-y-[-50%] bg-black max-md:hidden"></div>
          <div className="absolute left-[50%] top-[50%] h-[80%] w-[1px] translate-y-[-50%] bg-black max-md:hidden"></div>
          <div className="absolute left-[75%] top-[50%] h-[80%] w-[1px] translate-y-[-50%] bg-black max-md:hidden"></div>
          <CarouselContent className="relative ml-0  mt-9 w-full ">
            {logos.map((item, index, array) => {
              if (index % 2 === 0) {
                return (
                  <CarouselItem
                    key={index}
                    className={`${index > 0 ? "" : ""}
                    clients-slide relative flex
              flex-row items-center justify-center  border-none px-4 max-md:w-full md:basis-1/4 md:flex-col`}
                  >
                    <img
                      src={item}
                      className=" aspect-square object-contain max-md:w-[50%] "
                      alt=""
                    />
                    <img
                      src={array[index + 1]}
                      className="aspect-square  object-contain max-md:w-[50%]  "
                      alt=""
                    />

                    <div className="absolute left-[50%] top-0 h-full w-[1px] bg-black md:left-0 md:top-[50%] md:h-[1px] md:w-full"></div>
                  </CarouselItem>
                );
              } else {
                return <></>;
              }
            })}
          </CarouselContent>
          <CarouselDots className="mt-5" />
        </Carousel>
      </div>
    </section>
  );
}

export default Clients;

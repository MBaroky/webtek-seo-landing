import * as React from "react";
// import rightArrow from "../assets/right-arrow.svg";
// import coverImg from "../assets/cover-image.svg";
import { LogosCarousel } from "../components/LogosCarousel";
// import BookSheet from "../components/BookSheet";
// import { Button } from "../components/ui/button";

function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="relative z-[11] -mb-5 flex items-center justify-center rounded-none rounded-bl-3xl rounded-br-3xl px-16 py-20 max-md:px-5"
    >
      <div className="mt-24 w-full max-w-[1223px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="relative z-10 flex min-h-[300px] w-[67%] flex-col pb-[150px] max-md:ml-0 max-md:w-full">
            <h1 className="max-w-[556px] text-6xl font-bold   max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Leading Website Design & Development
              <span className="font-outline-2 text-black ">
                &nbsp; Agency in Dubai
              </span>
            </h1>
            <img
              src={`${process.env.PUBLIC_URL}/img/body-bg.svg`}
              className="absolute bottom-0 right-0 -z-10 h-auto w-[250px] md:h-full md:w-auto"
              alt="cover"
            />
          </div>
          <div className="ml-5 flex w-[33%] flex-col max-md:ml-0 max-md:w-full">
            <div className="my-auto flex flex-col items-start self-stretch text-white max-md:mt-10">
              <div className="h-[3px] w-[45px] shrink-0 bg-orange-100" />
              <p className="mt-4 self-stretch text-sm">
                Ready to elevate your online presence? Look no further than
                Webtek Digital. We excel in creating visually striking,
                user-friendly websites that captivate attention, engage
                visitors, and deliver tangible results. Backed by our team of
                skilled developers, designers, and digital strategists, we bring
                your vision to life with a captivating online presence.
              </p>
              {/* <BookSheet>
                <Button className="mt-4 flex gap-2 text-base font-medium">
                  <span>Get Exclusive Discounts! </span>
                  <img
                    loading="lazy"
                    src={rightArrow}
                    alt="Arrow icon"
                    className="aspect-square w-5 shrink-0"
                  />
                </Button>
              </BookSheet> */}
            </div>
          </div>
        </div>
        <LogosCarousel />
      </div>
    </section>
  );
}

export default WelcomeSection;

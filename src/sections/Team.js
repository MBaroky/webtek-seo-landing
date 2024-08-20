import * as React from "react";
import rightArrow from "../assets/right-arrow.svg";
import { Button } from "../components/ui/button";
import BookSheet from "../components/HeaderForm";

export default function Team() {
  const { PUBLIC_URL } = process.env;
  return (
    <section
      id="team"
      className="relative z-[9] -mb-5 flex items-center justify-center rounded-none rounded-bl-3xl rounded-br-3xl bg-[linear-gradient(180deg,#F9E1D0_0%,#EEEEFD_100%)] px-16 py-20 text-base font-medium text-neutral-900 max-md:px-5 "
    >
      <div className="flex w-full max-w-[1214px] flex-col max-md:max-w-full">
        <div className="h-[3px] w-12 shrink-0 bg-violet-700" />
        <div className="mt-4 max-md:max-w-full">
          Trust the leading Website Development Company in Dubai
        </div>
        <div className="mt-4 text-4xl font-bold max-md:max-w-full">
          From dynamic e-commerce platforms to captivating gaming websites and
          versatile utility sites, we have the expertise to transform your ideas
          into stunning digital realities. At Webtek Digital, we don't just
          create exceptional websites; we also offer comprehensive post-launch
          support and maintenance to
          <span className="font-outline-1 text-[#EEEEFD]">
            &nbsp; keep your online presence cutting-edge and operating
            flawlessly.
          </span>
          <br />
        </div>
        <BookSheet>
          <Button
            variant="gohst"
            className="mt-4 flex justify-between gap-2 self-start px-0"
          >
            <div>Read More</div>
            <img
              loading="lazy"
              src={rightArrow}
              className="aspect-square w-5 shrink-0"
              alt=""
            />
          </Button>
        </BookSheet>
        <img
          loading="lazy"
          src={`${PUBLIC_URL}/img/Banners-06.webp`}
          className="mt-12 aspect-[3.7] w-full rounded-xl object-cover max-md:mt-10 max-md:max-w-full"
          alt=""
        />
      </div>
    </section>
  );
}

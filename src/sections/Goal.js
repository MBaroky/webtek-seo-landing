import * as React from "react";
import arrowIcon from "../assets/right-arrow.svg";
import BookSheet from "../components/HeaderForm";

export default function Goal() {
  return (
    <section className="relative z-[3] -mb-5 flex min-h-[442px] flex-col items-center justify-center overflow-hidden rounded-bl-3xl rounded-br-3xl bg-black px-16 py-20 max-md:px-5">
      <img
        src={`${process.env.PUBLIC_URL}/img/goal.png`}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="relative mt-2.5 w-full max-w-[1187px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex w-[66%] flex-col max-md:ml-0 max-md:w-full">
            <h1 className="relative flex grow flex-col text-6xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <span className="text-white max-md:max-w-full max-md:text-4xl">
                Join Hands with a Leading All-inclusive Website Development{" "}
                <span className="font-outline-2 text-[#252524]">
                  Agency in Dubai
                </span>
              </span>
            </h1>
          </div>
          <div className="ml-5 flex w-[34%] flex-col max-md:ml-0 max-md:w-full">
            <div className="relative mt-2 flex flex-col items-start text-white max-md:mt-10">
              <div className="h-[3px] w-[45px] shrink-0 bg-orange-100" />
              <p className="mt-5 self-stretch text-sm">
                Webtek Digital is committed to providing innovative and scalable
                solutions to elevate your online presence.
              </p>
              <BookSheet>
                <button className="mt-4 flex items-center gap-2 text-base font-medium">
                  <span>Book A Demo</span>
                  <img
                    src={arrowIcon}
                    alt=""
                    className="aspect-square w-5 shrink-0"
                  />
                </button>
              </BookSheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
// import rightArrow from "../assets/right-arrow.svg";
// import coverImg from "../assets/cover-image.svg";
import { LogosCarousel } from "../components/LogosCarousel";
// import BookSheet from "../components/BookSheet";
// import { Button } from "../components/ui/button";
import { MoveUpRightIcon } from "lucide-react";
import HeaderForm from "../components/HeaderForm";

function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="relative z-[11] -mb-5 flex items-center justify-center rounded-none rounded-bl-3xl rounded-br-3xl py-20"
    >
      <div className="mt-5 w-full max-md:mt-10 max-md:max-w-full">
        <div
          className="flex gap-5 px-16 max-lg:px-5 max-md:flex-col-reverse max-md:gap-0"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/img/body-bg.svg')`,
            backgroundSize: "70%",
            backgroundPosition: "right 20%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 flex min-h-[300px] w-[60%] flex-col pb-8 max-md:ml-0 max-md:w-full">
            <h1 className="mb-8 max-w-[556px] text-6xl font-bold uppercase   leading-none max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              SEO Conversion Experts
            </h1>
            <p className="mb-8">
              <mark>Webtek Digital</mark> is the conversion-best SEO agency that
              helps global brands attract and convert more customers from Google
              Search.
            </p>
            <p className="mb-8">
              Specializing in <mark>advanced SEO strategies</mark>, we combine
              content marketing, digital PR, technical SEO, and CRO in a
              complete end-to-end service that has generated more revenue for
              our clients than most agencies have client accounts.
            </p>
            <button className="yellow-bg inline-flex aspect-square max-w-[200px] items-center justify-center rounded-full">
              Read More
              <MoveUpRightIcon />
            </button>
          </div>
          <div className="relative ml-5 flex w-[40%] flex-col overflow-clip bg-white max-md:ml-0 max-md:w-full">
            <div className="my-auto flex flex-col items-start self-stretch text-white max-md:mt-10">
              <HeaderForm />
            </div>
            {/* background circle */}
            <div className="yellow-border absolute bottom-0 right-0 aspect-square w-[250px] translate-x-1/2 translate-y-1/2 rounded-full border-[80px] border-solid"></div>
          </div>
        </div>
        <LogosCarousel />
      </div>
    </section>
  );
}

export default WelcomeSection;

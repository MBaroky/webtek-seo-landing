import React, { useRef } from "react";
import { Check } from "lucide-react";
import { useIsVisible } from "../hooks/useIsVisible";

function PricingItem({ item, index }) {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  const { title, target, price, features } = item;
  return (
    <div
      ref={ref}
      className={`relative z-10 flex min-h-[300px] basis-1/3 items-stretch px-3 pb-8 transition-all

       duration-700 delay-${(index + 1) * 100} max-md:ml-0 max-md:w-full ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}

       `}
    >
      <div className="flex w-full flex-col items-stretch justify-start gap-3 bg-white p-16 text-start max-lg:p-8">
        <h6 className="text-xl font-bold">{title}</h6>
        <hr className="yellow-bg h-1 w-[80px] border-t-0 dark:bg-white/10" />
        <p className="max-w-[200px]">
          <small>{target}</small>
        </p>
        <p className="text-xl">
          AED <span className="text-2xl font-bold">{price}</span>
        </p>
        <ul>
          {features.map((feature, index) => (
            <li className="nowrap flex pb-3" key={index}>
              <span className=" me-3">
                <Check />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <hr />

        <div className="mt-5 flex justify-center gap-2.5 text-base font-medium">
          <button className="rounded-full border border-solid border-black bg-white px-5 py-2">
            Let’s Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  const items = [
    {
      title: "Basic",
      target: `For Growing Teams`,
      price: `250`,
      features: [
        "1 project per month",
        "Basic design consultation",
        "Limited revisions",
        "Email support",
      ],
    },
    {
      title: "Pro",
      target: `For Scaling Businesses`,
      price: `700`,
      features: [
        "5 projects per month",
        "Basic design consultation",
        "Limited revisions",
        "Email support",
      ],
    },
    {
      title: "Enterprise",
      target: `For Big Corporation`,
      price: `1500`,
      features: [
        "10 projects per month",
        "Basic design consultation",
        "Limited revisions",
        "Email support",
      ],
    },
  ];
  return (
    <section
      id="about"
      className="relative z-[11] -mb-5 flex items-center justify-center rounded-none rounded-bl-3xl rounded-br-3xl py-8 "
    >
      {/* yellow background */}
      <div className="yellow-bg absolute left-0 top-0 h-[60%] w-full opacity-30"></div>

      <div className="mt-5 w-full max-md:mt-10 max-md:max-w-full">
        {/* row */}
        <div className="relative flex gap-5 px-16 max-lg:px-5 max-md:flex-col  max-md:gap-0">
          <div className="basis-3/4">
            <h1 className="mb-8 text-6xl font-bold uppercase   leading-none max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Pricing
            </h1>
          </div>
          <div className="basis-1/4">
            <p className="mb-8">
              Webtek Digital offers competitive, transparent pricing with
              flexible plans for businesses of all sizes. Achieve your digital
              marketing goals affordably with our tailored solutions.
            </p>
          </div>
        </div>
        {/* row */}
        <div className="flex items-stretch gap-5 px-16 max-lg:gap-1 max-lg:px-0 max-md:flex-col ">
          {/* column 1/3 */}
          {items.map((item, index) => (
            <PricingItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;

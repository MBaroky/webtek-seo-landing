import React from "react";
import seoIcon from "../assets/services-1.svg";
import contentIcon from "../assets/services-2.svg";
import croIcon from "../assets/services-3.svg";

function ServicesItem({ icon, title, desc }) {
  return (
    <div className="relative z-10 flex min-h-[300px] basis-1/3 items-stretch px-3 pb-8 max-md:ml-0 max-md:w-full">
      <div className="flex w-full flex-col items-center justify-start gap-3 bg-white px-5 py-8 text-center">
        <img src={icon} className="h-[70px] w-auto" alt="" />
        <h6 className="font-bold">{title}</h6>
        <hr class="yellow-bg h-1 w-[80px] border-t-0 dark:bg-white/10" />
        <p className="w-1/2">
          <small>{desc}</small>
        </p>
      </div>
    </div>
  );
}

function Services() {
  const items = [
    {
      icon: seoIcon,
      title: "Advanced SEO & Technical Optimization",
      desc: `Enhance your website’s search rankings and performance with
                  our cutting-edge SEO techniques and comprehensive technical
                  audits. We ensure your site is fully optimized for speed,
                  mobile use, and overall search engine visibility, delivering
                  the best possible performance.`,
    },
    {
      icon: contentIcon,
      title: `Content Marketing
      & Digital PR`,
      desc: `Engage your audience with compelling, high-quality content tailored to your brand's voice and goals. Our digital PR strategies help build a strong online presence by securing high-quality backlinks and media coverage, boosting your SEO and brand credibility.`,
    },
    {
      icon: croIcon,
      title: "Conversion Rate Optimization (CRO) & Ongoing Support",
      desc: `Turn visitors into customers with our CRO services, which focus on analyzing user behavior and optimizing your site’s design and content. We provide continuous support to keep your SEO strategies effective and up-to-date, ensuring sustained growth and success for your business.`,
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
              Our Services
            </h1>
          </div>
          <div className="basis-1/4">
            <p className="mb-8">
              At Webtek Digital, we provide a full range of SEO services to
              boost your online presence and drive business growth. Our expert
              team employs advanced techniques to optimize your website, engage
              your audience, and convert visitors into loyal customers. Discover
              how our tailored solutions can help you achieve your digital
              marketing goals.
            </p>
          </div>
        </div>
        {/* row */}
        <div className="flex items-stretch gap-5 px-16 max-lg:px-5 max-md:flex-col max-md:gap-0">
          {/* column 1/3 */}
          {items.map((item) => (
            <ServicesItem
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

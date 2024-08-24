import ClientsSlider from "../components/ClientsSlider";
// import PortfolioSlider from "../components/PortfolioSlider";
import * as React from "react";

function Clients() {
  const { PUBLIC_URL } = process.env;

  const slides = [
    {
      title: "— Ahmed Mansour, CEO of EcoHome Innovations",
      body: "Partnering with Webtek Digital was one of the best decisions we made for our business. Their technical SEO and CRO (Conversion Rate Optimization) skills are unmatched. They took the time to understand our unique needs and tailored their strategies accordingly. The increase in our organic search traffic and customer conversion rates has been phenomenal. Highly recommend their services!",
      backgroundImage: `${PUBLIC_URL}/img/mission-bg.png`,
    },
    {
      title: "— Sarah Al-Tamimi, Marketing Director at GlobalTech Solutions",
      body: "Webtek Digital transformed our online presence. Their advanced SEO strategies and comprehensive approach significantly boosted our search rankings and increased our website traffic. The team's expertise in content marketing and digital PR was evident from the start. We saw a marked improvement in our conversion rates and overall revenue. We couldn't be happier with the results!",
      backgroundImage: `${PUBLIC_URL}/img/mission-bg.png`,
    },
    {
      title: "— Fatima Rashed, VP of Marketing at FreshFoods International",
      body: "Webtek Digital's holistic approach to SEO and digital marketing has delivered outstanding results for our brand. Their dedication to combining technical SEO, content marketing, and digital PR has not only improved our search engine rankings but also our customer engagement and sales. The team's commitment to our success is evident in the exceptional revenue growth we've experienced. Truly a top-notch agency!",
    },
    {
      title: "— Fatima Rashed, VP of Marketing at FreshFoods International",
      body: "Webtek Digital's holistic approach to SEO and digital marketing has delivered outstanding results for our brand. Their dedication to combining technical SEO, content marketing, and digital PR has not only improved our search engine rankings but also our customer engagement and sales. The team's commitment to our success is evident in the exceptional revenue growth we've experienced. Truly a top-notch agency!",
    },
    {
      title: "— Fatima Rashed, VP of Marketing at FreshFoods International",
      body: "Webtek Digital's holistic approach to SEO and digital marketing has delivered outstanding results for our brand. Their dedication to combining technical SEO, content marketing, and digital PR has not only improved our search engine rankings but also our customer engagement and sales. The team's commitment to our success is evident in the exceptional revenue growth we've experienced. Truly a top-notch agency!",
    },
  ];
  return (
    <section
      id="clients"
      className="relative z-[10] -mb-3 flex min-h-[600px] flex-col items-center px-3 pt-24 tracking-tighter max-md:text-4xl md:p-24"
    >
      <div className="max-w-full  lg:max-w-[1200px]">
        <h2 className=" w-full text-6xl font-bold uppercase leading-[1.2em] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[1em]">
          See what our clients say about us
        </h2>
        <p>
          Discover the experiences of our <mark>satisfied clients</mark>{" "}
        </p>
        <ClientsSlider data={slides} />
      </div>
    </section>
  );
}

export default Clients;

import ClientsSlider from "../components/ClientsSlider";
// import PortfolioSlider from "../components/PortfolioSlider";
import * as React from "react";

function Clients() {
  const { PUBLIC_URL } = process.env;

  const slides = [
    {
      title: "dummy first",
      backgroundImage: `${PUBLIC_URL}/img/mission-bg.png`,
    },
    {
      title: "dummy second",
      backgroundImage: `${PUBLIC_URL}/img/mission-bg.png`,
    },
    {
      title: "dummy third",
      backgroundImage: `${PUBLIC_URL}/img/mission-bg.png`,
    },
    {
      title: "dummy fourth",
      backgroundImage: `${PUBLIC_URL}/img/mission-bg.png`,
    },
    {
      title: "dummy fifth",
      backgroundImage: `${PUBLIC_URL}/img/mission-bg.png`,
    },
  ];
  return (
    <section
      id="about"
      className="relative z-[10] -mb-3 flex min-h-[450px] flex-col items-center rounded-bl-3xl rounded-br-3xl px-3 pt-24 tracking-tighter max-md:text-4xl md:p-24"
      style={{
        backgroundColor: "#F7F7F7",
      }}
    >
      <div className="max-w-full uppercase lg:max-w-[1200px]">
        <h2 className=" w-full text-6xl font-bold leading-[1.2em] text-neutral-900 max-md:max-w-full max-md:text-4xl max-md:leading-[1em]">
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

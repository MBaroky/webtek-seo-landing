import * as React from "react";
import BookSheet from "../components/HeaderForm";
import rightArrow from "../assets/right-arrow.svg";
import { Button } from "../components/ui/button";

function FAQItem({ question, answer }) {
  return (
    <div className="flex w-full flex-col ">
      <h3 className="mt-5 text-xl max-md:max-w-full">{question}</h3>
      <div className="mt-3.5 text-sm max-md:max-w-full">{answer}</div>
      <div className="mt-4 flex gap-2">
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
      </div>
      <hr className="mt-3.5 h-px shrink-0 self-stretch border border-solid border-neutral-900 bg-neutral-900 max-md:max-w-full" />
    </div>
  );
}

export default function FAQ() {
  const faqData = [
    {
      question: "1.	What's Involved In Website Design And Development Services?",
      answer:
        "Website design and development services create and build websites for businesses or individuals, covering everything from how they look to how they function online.",
    },
    {
      question: "2.	How does a good website design benefit your business?",
      answer:
        "A well-designed website can enhance your business by attracting more customers, improving user experience, and increasing credibility and trustworthiness online.",
    },
    {
      question: "3.	How can a well-designed website help your business?",
      answer:
        "A well-designed website can help your business by attracting more visitors, increasing customer engagement, and improving conversion rates, ultimately leading to higher sales and greater online visibility.",
    },
    {
      question:
        "4. What are the services required for a start-up business website?",
      answer:
        "For a startup business website, essential services include web design, development, hosting, domain registration, content creation, SEO, and possibly e-commerce integration, ensuring a professional online presence to attract customers and establish credibility.",
    },
    {
      question:
        "5. What are the key factors to consider when choosing a web hosting provider?",
      answer:
        "When selecting a web hosting provider, consider factors such as uptime reliability, server speed, security measures, scalability options, customer support quality, and pricing plans to ensure optimal performance and support for your website.",
    },
  ];

  return (
    <section className="relative z-[2] -mb-5   flex items-center justify-center rounded-none rounded-bl-3xl rounded-br-3xl bg-gray-200 px-16 py-16 text-base font-medium text-neutral-900 max-md:px-5">
      <div className="flex w-full max-w-[1200px] flex-col items-start max-md:max-w-full">
        <div className="h-[3px] w-[45px] shrink-0 bg-violet-700" />
        <h2 className="mt-4">FAQs</h2>
        <p className="mt-4 w-[371px] text-sm">
          Our dynamic digital marketing agency has empowered a wide array of
          businesses and organizations to meet their advertising goals. Drawing
          from rich experience across various industries, we possess the
          insights and skills to unlock your true potential.
          <br />
        </p>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

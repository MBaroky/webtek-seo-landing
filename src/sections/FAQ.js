import * as React from "react";
import BookSheet from "../components/BookSheet";
import rightArrow from "../assets/right-arrow.svg";
import { Button } from "../components/ui/button";

function FAQItem({ question, answer }) {
  return (
    <div className='flex flex-col w-full '>
      <h3 className='mt-5 text-xl max-md:max-w-full'>{question}</h3>
      <div className='mt-3.5 text-sm max-md:max-w-full'>{answer}</div>
      <div className='flex gap-2 mt-4'>
        <BookSheet>
          <Button
            variant='gohst'
            className='flex px-0 justify-between gap-2 self-start mt-4'>
            <div>Read More</div>
            <img
              loading='lazy'
              src={rightArrow}
              className='shrink-0 w-5 aspect-square'
              alt=''
            />
          </Button>
        </BookSheet>
      </div>
      <hr className='shrink-0 self-stretch mt-3.5 h-px border border-solid bg-neutral-900 border-neutral-900 max-md:max-w-full' />
    </div>
  );
}

export default function FAQ() {
  const faqData = [
    {
      question:
        "1.	What's Involved In Website Design And Development Services?",
      answer:
        "Website design and development services create and build websites for businesses or individuals, covering everything from how they look to how they function online.",
    },
    {
      question:
        "2.	How does a good website design benefit your business?",
      answer:
        "A well-designed website can enhance your business by attracting more customers, improving user experience, and increasing credibility and trustworthiness online.",
    },
    {
      question:
        "3.	How can a well-designed website help your business?",
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
    <section className='rounded-br-3xl rounded-bl-3xl -mb-5   relative z-[2] flex justify-center items-center px-16 py-16 text-base font-medium bg-gray-200 rounded-none text-neutral-900 max-md:px-5'>
      <div className='flex flex-col items-start w-full max-w-[1200px] max-md:max-w-full'>
        <div className='shrink-0 bg-violet-700 h-[3px] w-[45px]' />
        <h2 className='mt-4'>FAQs</h2>
        <p className='mt-4 text-sm w-[371px]'>
          Our dynamic digital marketing agency has empowered a wide
          array of businesses and organizations to meet their
          advertising goals. Drawing from rich experience across
          various industries, we possess the insights and skills to
          unlock your true potential.
          <br />
        </p>
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
}

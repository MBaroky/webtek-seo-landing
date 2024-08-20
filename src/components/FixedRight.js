import * as React from "react";
import fixedPhone from "../assets/fixed-phone.svg";
import fixedWhatsapp from "../assets/fixed-whatsapp.svg";

function ImageSquare({ src, alt, link, className }) {
  return (
    <a href={link}>
      <img
        loading='lazy'
        src={src}
        alt={alt}
        className={`w-full aspect-square ${className}`}
      />
    </a>
  );
}

function FixedRight() {
  const images = [
    {
      src: fixedPhone,
      alt: "phone-icon",
      link: "tel:+971557872779",
    },
    {
      src: fixedWhatsapp,
      alt: "whatsapp-icon",
      link: "https://api.whatsapp.com/send?phone=971557872779&text=I%20would%20like%20to%20know%20more%20about%20your%20services%20(Website,%20App%20Development,%20Digital%20Marketing,%20Google%20/%20Social%20Ads%20Management,%20SEO).",
    },
  ];

  return (
    <div
      id='fixed-right'
      className='flex flex-col max-w-[50px] fixed top-[20vh] right-0'>
      {images.map((image, index) => (
        <ImageSquare
          key={index}
          src={image.src}
          alt={image.alt}
          link={image.link}
          className={index > 0 ? "mt-5" : ""}
        />
      ))}
    </div>
  );
}

export default FixedRight;

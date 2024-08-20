import React from "react";
import Social from "../components/Social";
import { footerLinks } from "../data/footerData";
function BottomFooter({ logo }) {
  return (
    <>
      <div className='shrink-0 mt-10 h-px bg-white max-md:mt-10 max-md:max-w-full' />
      <div className='self-end mt-6 mr-5 max-w-full aspect-[33.33] w-[135px] max-md:mr-2.5'></div>
      <footer className='flex gap-5 justify-between text-white max-md:flex-wrap'>
        <h2 className='my-auto text-2xl font-semibold uppercase'>
          <img src={logo} alt='logo' className='max-h-[50px]' />
        </h2>
        <nav className='flex gap-5 justify-between self-start mt-5 text-sm font-medium whitespace-nowrap'>
          {footerLinks.map(link => (
            <a key={link.label} href={link.url}>
              {link.label}
            </a>
          ))}
        </nav>
        <Social />
      </footer>
    </>
  );
}

export default BottomFooter;

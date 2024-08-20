// import FixedRight from "../components/FixedRight";
import MainNav from "../components/MainNav";
import MobileNav from "../components/MobileNav";
// import BookSheet from "../components/BookSheet";
// import { Button } from "../components/ui/button";
import { Mail, Phone } from "lucide-react";

function Header({ logo }) {
  return (
    <header
      id="main-header"
      className="text-dark left-0 top-0 z-50 flex w-full items-center justify-center px-16 py-2 font-medium max-md:px-5"
    >
      <div id="top" />
      {/* <FixedRight /> */}
      <div className="flex w-full max-w-[1196px] items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <a href="/" className="my-auto shrink">
          <img
            src={logo}
            alt="logo"
            className="aspect-video max-h-[80px] object-cover brightness-0 grayscale"
          />
        </a>
        <MainNav />
        <MobileNav logo={logo} />
        <div className="hidden lg:inline">
          <a href="tel:+97155 123 4534" className="me-5 inline">
            <Phone className="me-2 inline" size="18" />
            +97155 123 4534
          </a>
          <a href="mailto:email@gmail.com" className="inline">
            <Mail className="me-2 inline" size="18" />
            email@gmail.com
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

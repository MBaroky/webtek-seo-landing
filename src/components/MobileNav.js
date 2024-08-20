import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu as MenuIcon, X as CloseIcon, Phone, Mail } from "lucide-react";
import { navItems } from "../data/navItems";
import NavItem from "./NavItem";
// import BookSheet from "./BookSheet";

export default function MobileNav({ logo }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="bg-black text-white">
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center pb-20 text-base font-bold text-white">
          <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-center bg-[#000] px-16 py-2 font-medium text-white max-md:px-5">
            <div className="flex w-full max-w-[1196px] items-center gap-5 max-md:max-w-full max-md:flex-wrap">
              <img src={logo} alt="logo" className="max-h-[80px]" />
            </div>
            <SheetClose>
              <Button variant="ghost" size="icon">
                <CloseIcon />
              </Button>
            </SheetClose>
          </header>
          <nav className="my-24 flex flex-col items-center justify-center gap-4">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </nav>
          <a href="tel:+97155 123 4534" className="">
            <Phone className="me-2 inline" size="18" />
            +97155 123 4534
          </a>
          <a href="mailto:email@gmail.com" className="">
            <Mail className="me-2 inline" size="18" />
            email@gmail.com
          </a>
          {/* <BookSheet /> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}

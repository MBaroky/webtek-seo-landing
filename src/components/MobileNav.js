import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { navItems } from "../data/navItems";
import NavItem from "./NavItem";
import BookSheet from "./BookSheet";

export default function MobileNav({ logo }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* This button will trigger open the mobile sheet menu */}
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='lg:hidden'>
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side='top' className='bg-black text-white'>
        <div className='flex flex-col items-center pb-20 mx-auto w-full text-base font-bold text-white max-w-[480px]'>
          <header className='bg-[#000] flex justify-center items-center px-16 py-2 font-medium text-white max-md:px-5 fixed top-0 left-0 w-full z-50'>
            <div className='flex gap-5 items-center w-full max-w-[1196px] max-md:flex-wrap max-md:max-w-full'>
              <img src={logo} alt='logo' className='max-h-[80px]' />
            </div>
            <SheetClose>
              <Button variant='ghost' size='icon'>
                <CloseIcon />
              </Button>
            </SheetClose>
          </header>
          <nav className='my-24 flex flex-col justify-center items-center gap-4'>
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </nav>
          <BookSheet />
        </div>
      </SheetContent>
    </Sheet>
  );
}

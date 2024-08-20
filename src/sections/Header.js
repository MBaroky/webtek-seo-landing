import FixedRight from "../components/FixedRight";
import MainNav from "../components/MainNav";
import MobileNav from "../components/MobileNav";
import BookSheet from "../components/BookSheet";

function Header({ logo }) {
  return (
    <header
      id='main-header'
      className='flex justify-center items-center px-16 py-2 font-medium text-white bg-neutral-900 max-md:px-5 fixed top-0 left-0 w-full z-50'>
      <div id='top' />
      <FixedRight />
      <div className='flex gap-5 items-center w-full max-w-[1196px] max-md:flex-wrap max-md:max-w-full'>
        <a href='/' className='flex-auto shrink my-auto'>
          <img src={logo} alt='logo' className='max-h-[80px]' />
        </a>
        <MainNav />
        <MobileNav logo={logo} />
      </div>
      <div className='hidden lg:inline'>
        {/* <BookButton /> */}
        <BookSheet />
      </div>
    </header>
  );
}

export default Header;

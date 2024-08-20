// MainNav.tsx
import NavItem from "./NavItem";
import { navItems } from "../data/navItems";

export default function MainNav() {
  return (
    <div className='mr-4 text-white hidden gap-2 lg:flex'>
      <nav className='flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap'>
        {navItems.map(item => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
    </div>
  );
}

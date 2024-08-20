// MainNav.tsx
import NavItem from "./NavItem";
import { navItems } from "../data/navItems";

export default function MainNav() {
  return (
    <div className="text-dark mr-4 hidden gap-2 lg:flex">
      <nav className="my-auto flex justify-between gap-5 self-stretch max-md:flex-wrap">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>
    </div>
  );
}

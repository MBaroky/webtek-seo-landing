export default function NavItem({ label, href }) {
  return (
    <a href={href} className='text-sm'>
      {label}
    </a>
  );
}

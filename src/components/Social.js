import facebook from "../assets/facebook-f.svg";
import twitter from "../assets/x-twitter.svg";
import linkedin from "../assets/linkedin-in.svg";

const social = [
  { icon: facebook, link: "https://www.facebook.com" },
  { icon: twitter, link: "https://www.x.com" },
  { icon: linkedin, link: "https://www.linkedin.com" },
];

export default function Social() {
  return (
    <ul className='flex flex-row'>
      {social.map((item, index) => (
        <li key={index}>
          <a
            target='_blank'
            rel='noreferrer'
            style={{ filter: "grayscale(1) invert(1)" }}
            className='ml-3 flex items-center justify-center aspect-square w-[40px] rounded-full border-solid border-2 border-neutral-500'
            href={item.link}>
            <img
              src={item.icon}
              className='w-[20px] h-[20px]'
              alt=''
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

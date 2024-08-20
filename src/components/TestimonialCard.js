// import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

export default function TestimonialCard({
  imageSrc,
  testimonial,
  authorImageSrc,
  authorName,
  authorTitle,
  className,
}) {
  return (
    <div
      className={`flex flex-col justify-between bg-transparent border-none card mb-5 ${className}`}>
      <div>
        <img
          loading='lazy'
          src={imageSrc}
          alt=''
          className='max-w-full aspect-[2.63] w-[140px]'
        />
        <p className='mt-4 text-justify text-sm text-white'>
          {testimonial}
        </p>
      </div>
      <div className='flex gap-2.5 p-0 mt-4 text-white justify-self-end '>
        <img
          loading='lazy'
          src={authorImageSrc}
          alt=''
          className='shrink-0 rounded-full aspect-square w-[57px] object-cover object-top'
        />
        <div className='flex flex-col  py-0.5 my-auto'>
          <cite className='text-base italic font-bold'>
            {authorName}
          </cite>
          <div className='text-sm italic font-light'>
            {authorTitle}
          </div>
        </div>
      </div>
    </div>
  );
}

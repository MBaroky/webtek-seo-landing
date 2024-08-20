export default function Service({ img, icon, title, desc }) {
  return (
    <div className='services-item flex bg-white justify-between h-full flex-col pt-7 '>
      <div className='flex flex-col px-7 w-full text-neutral-900'>
        <div className='flex gap-2.5 text-base font-medium'>
          <img
            loading='lazy'
            src={icon}
            className='shrink-0 aspect-square w-[34px]'
            alt=''
          />
          <div className='services-item-title my-auto leading-none'>
            {title}
          </div>
        </div>
        <div className='mt-6 text-xs'>
          {desc}
          <br />
        </div>
      </div>
      <div className='service-img  flex overflow-hidden relative flex-col pb-12 mt-14 w-full aspect-[1.2]'>
        <img
          loading='lazy'
          src={img}
          className='object-cover aspect-square absolute inset-0 w-full'
          alt=''
        />
        <div className='img-overlay relative bg-[linear-gradient(#fff_0,rgba(255,255,255,0))] w-full min-h-[178px]' />
      </div>
    </div>
  );
}

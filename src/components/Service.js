export default function Service({ img, icon, title, desc }) {
  return (
    <div className=" flex h-full flex-col justify-between bg-white pb-7 ">
      <div className=" relative mt-0 flex  w-full flex-col overflow-hidden pb-12">
        <img
          loading="lazy"
          src={img}
          className=" inset-0 aspect-[0.7] w-full object-cover"
          alt=""
        />
      </div>
      <div className="flex w-full grow flex-col justify-start px-7 text-neutral-900">
        <div className="flex gap-2.5 text-base font-medium">
          <button className="rounded-full border border-solid border-black bg-white px-5 py-1">
            {title}
          </button>
        </div>
        <div className="mt-6 text-xs">
          {desc}
          <br />
        </div>
      </div>
    </div>
  );
}

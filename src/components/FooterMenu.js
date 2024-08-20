import React from "react";

function FooterMenu({ data, title }) {
  return (
    <div className='flex flex-col grow pt-2 text-sm text-white max-md:mt-10'>
      <h2 className='text-base font-bold leading-7'>{title}</h2>
      {data.map(item => (
        <div key={item.name} className='mt-3.5'>
          <button className='w-full text-left'>{item.name}</button>
        </div>
      ))}
    </div>
  );
}

export default FooterMenu;

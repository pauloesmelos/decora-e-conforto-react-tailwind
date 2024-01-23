import React from 'react';

const Card = ({ img, title, text }) => {
  return (
    <div className="shadow-sm hover:shadow-lg duration-300 cursor-pointer group hover:translate-y-[-10px]">
      <div className="overflow-hidden">
        <img 
            className="object-cover w-full h-[250px] group-hover:scale-[1.2] duration-300"
            src={img} 
        />
      </div>
      <div className="p-3">
        <h4 className="text-xl font-bold my-3 text-center group-hover:text-orange-400 duration-200">
            {title}
        </h4>
        <p className="text-sm text-slate-500">{text}</p>
      </div>
    </div>
  )
}

export default Card;
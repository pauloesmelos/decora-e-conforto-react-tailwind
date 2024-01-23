import React from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
import Slide from './slide/Slide';

const data = {
    fotos: [
        {
            id: 0,
            src: "https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1632935187086-49a9d8027292?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1589271243958-d61e12b61b97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
}
const Slider = () => {
  const [active, setActive] = React.useState(0);
  const next = () => {
    setActive(e => (e + 1 < data.fotos.length ? e + 1: 0));
  }
  const prev = () => {
    setActive(e => (e - 1 >= 0 ? e  - 1 : e));
  }

  return (
    <section className="w-full max-w-[1200px] mx-auto py-16">
      <div className="px-9">
        <div>
            <h2 className="text-center text-black mb-16">
                Visuais Deslumbrantes
            </h2>
        </div>
        <div className="relative my-8 ">
            <div className="w-full h-full absolute top-0 flex justify-between px-6 lg:px-16 items-center z-10">
                <IoIosArrowBack 
                    onClick={prev}
                    className="text-slate-200 hover:bg-black/40 cursor-pointer text-3xl sm:text-6xl
                    hover:rounded-full"
                />
                <IoIosArrowForward 
                    onClick={next}
                    className="text-slate-200 hover:bg-black/40 cursor-pointer text-3xl sm:text-6xl
                    hover:rounded-full"
                />
            </div>
            <div className="w-full max-w-[1000px] h-[580px]">
                <Slide 
                    src={data.fotos[active].src}
                />
            </div>
            <div className="w-full flex justify-center gap-4 mt-9">
                {data.fotos.map((element, index) => (
                    <div className={index === active ? `sm:w-5 sm:h-5 w-4 h-4 bg-slate-400 rounded-full cursor-pointer` : `
                    sm:w-5 sm:h-5 w-4 h-4 bg-slate-200 rounded-full cursor-pointer`} 
                        key={index * Math.random()}
                    >
                        
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Slider;
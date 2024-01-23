import React from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Decoration1 from '../../assets/decoration1.jpg';
import Decoration2 from '../../assets/decoration2.jpg';
import Decoration3 from '../../assets/decoration3.jpg';
import Slide from './slide/Slide';

const data = {
    fotos: [
        {
            id: 0,
            src: Decoration1
        },
        {
            id: 1,
            src: Decoration2
        },
        {
            id: 2,
            src: Decoration3
        },
        {
            id: 3,
            src: Decoration2
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
            <div className="w-full h-full absolute top-0 flex justify-between px-6 lg:px-24 items-center z-10">
                <FaArrowCircleLeft 
                    onClick={prev}
                    className="text-slate-300 hover:text-slate-200 cursor-pointer text-3xl sm:text-6xl"
                />
                <FaArrowCircleRight 
                    onClick={next}
                    className="text-slate-300 hover:text-slate-200 cursor-pointer text-3xl sm:text-6xl"
                />
            </div>
            {data.fotos.map((element, index) => (
                <Slide
                    active={active}
                    index={index}
                    setActive={setActive} 
                    img={element.src}
                    key={index * Math.random()}
                />
            ))}
            <div className="w-full flex justify-center gap-4 mt-9">
                {data.fotos.map((element, index) => (
                    <div className={index === active ? `sm:w-8 sm:h-8 w-4 h-4 bg-slate-400 rounded-full cursor-pointer` : `
                    sm:w-8 sm:h-8 w-4 h-4 bg-slate-200 rounded-full cursor-pointer`} 
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
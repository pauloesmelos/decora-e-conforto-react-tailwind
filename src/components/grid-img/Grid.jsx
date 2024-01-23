import React from 'react';
import Decoration1 from '../../assets/decoration1.jpg';
import Decoration2 from '../../assets/decoration2.jpg';
import Decoration3 from '../../assets/decoration3.jpg';
import Decoration4 from '../../assets/decoration4.jpg';
import Decoration5 from '../../assets/decoration5.jpg';

const Grid = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-9">
        <div>
            <div className="text-center">
                <h2 className="text-black mt-5">
                    Destrave Idéias Conosco
                </h2>
                <p className="text-lg text-slate-500 my-7">
                    Referência no mercado nacional há 25 anos
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <img 
                    className=" w-full h-[560px] object-cover col-span-2 row-span-2 shadow-md" 
                    src={Decoration5}
                />
                <img 
                    className="w-[300px] h-[280px] object-cover shadow-md" 
                    src={Decoration2}
                />
                <img 
                    className="w-[300px] h-[280px] object-cover shadow-md" 
                    src={Decoration3}
                />
                <img 
                    className="w-[300px] h-[280px] object-cover shadow-md" 
                    src={Decoration4}
                />
                <img 
                    className="w-[300px] h-[280px] object-cover shadow-md" 
                    src={Decoration1}
                />
            </div>
        </div>
    </section>
  )
}

export default Grid;
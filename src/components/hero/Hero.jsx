import React from 'react'

const Hero = () => {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full relative">
        <div className="bg-found bg-center bg-no-repeat bg-cover object-cover w-full h-full brightness-[55%]"></div>
        <div className="absolute w-full h-full top-0 flex justify-center items-center flex-col gap-16 px-3">
            <h2 className="lg:w-full lg:max-w-[400px]">
                Feito à mão para sua casa
            </h2>
            <button className="w-[240px] duration-500">
                COMPRE
            </button>
        </div>
      </div>
    </section>
  )
}

export default Hero

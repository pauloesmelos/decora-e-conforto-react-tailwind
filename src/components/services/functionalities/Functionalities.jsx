import React from 'react';
import Plant from '../../../assets/item1.jpg';
import Arch from '../../../assets/item2.jpg';
import Card from '../../card/Card';

const Functionalities = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-16 px-9">
      <h2 className="text-black text-center">
        Beleza & Funcionalidade
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-16 gap-8 p-8 lg:p-2">
        <div className="w-full flex flex-col justify-center items-center lg:block">
            <h4 className="text-black font-bold text-2xl mb-6">
                O Melhor para sua casa
            </h4>
            <button className="w-[200px]">
                CONFIRA
            </button>
        </div>
        <Card
            img={Arch} 
            title={"Enfeites"}
            text={"Designs com arte que fazem de cada dia uma ocasião especial."}
        />
        <Card
            img={Plant} 
            title={"Decoração"}
            text={"Itens de bom gosto para visuais de impacto."}
        />
      </div>
    </section>
  )
}

export default Functionalities;
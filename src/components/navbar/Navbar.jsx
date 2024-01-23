import React from 'react';
import { IoMdMenu } from "react-icons/io";
import Mobile from './mobile/Mobile';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="p-2 w-full absolute z-10">
      <nav className="flex justify-between w-full max-w-[1150px] mx-auto py-6">
        <h1 className="text-white px-4 lg:px-0">Decora & Conforto</h1>
        <ul className="text-white hidden lg:flex gap-5">
            <li className="cursor-pointer text-lg font-semibold text-white border-2 border-orange-400 rounded-lg
            hover:bg-white hover:text-orange-400 duration-300 hover:border-white">
              Home
            </li>
            <li className="cursor-pointer text-lg font-semibold text-white border-2 border-orange-400 rounded-lg
            hover:bg-white hover:text-orange-400 duration-300 hover:border-white">
              About
            </li>
            <li className="cursor-pointer text-lg font-semibold text-white border-2 border-orange-400 rounded-lg
            hover:bg-white hover:text-orange-400 duration-300 hover:border-white">
              Contact
            </li>
            <li className="cursor-pointer text-lg font-semibold text-white border-2 border-orange-400 w-[80px] text-center rounded-lg
            hover:bg-white hover:text-orange-400 duration-300 hover:border-white">
              Buy
            </li>
        </ul>
        <div className="flex lg:hidden">
            <IoMdMenu 
                className="text-4xl text-white cursor-pointer hover:text-slate-600 duration-300"
                onClick={() => setOpen(!open)}
            />
        </div>
      </nav>
      <Mobile
        open={open}
        setOpen={setOpen} 
      />
    </header>
  )
}

export default Navbar;
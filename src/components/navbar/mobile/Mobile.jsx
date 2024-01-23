import React from 'react';
import { FaRegUser, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Mobile = ({ open, setOpen }) => {
  const handleOpen = () => {
    setOpen(e => !e);
  }
  return (
    <div className={open ? `w-full absolute top-0 left-0 bg-white shadow-md duration-300` : `w-full absolute top-0 left-0 bg-white shadow-md 
    ml-[-100%] duration-300`}>
      <div>
        <div className="flex justify-between p-2 py-6">
            <h1 className="text-orange-400 px-4">
                Decora & Conforto
            </h1>
            <IoMdClose 
                className="text-4xl text-orange-400 cursor-pointer hover:text-slate-600 duration-300"
                onClick={handleOpen}
            />
        </div>
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <ul className="mb-8">
                <li className="font-bold text-orange-400 cursor-pointer text-3xl hover:text-orange-200 duration-300">
                    Home
                </li>
                <li className="font-bold text-orange-400 cursor-pointer text-3xl hover:text-orange-200 duration-300">
                    About
                </li>
                <li className="font-bold text-orange-400 cursor-pointer text-3xl hover:text-orange-200 duration-300">
                    Buy
                </li>
                <li>
                    <button className="w-full max-w-[180px] my-2">
                        LOGIN
                    </button>
                </li>
            </ul>
            <div className="flex flex-col items-center gap-7 py-5 mr-9">
                <FaRegUser 
                    className="text-orange-400 text-4xl cursor-pointer hover:text-orange-200 duration-300"
                />
                <FaSearch 
                    className="text-orange-400 text-4xl cursor-pointer hover:text-orange-200 duration-300"
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mobile;
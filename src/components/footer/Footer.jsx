import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-100/80 py-9 mt-16">
        <div className="flex flex-col md:flex-row justify-between px-4">
            <h3 className="font-roboto font-semibold text-slate-500 text-xl sm:text-3xl">
                DECORA & CONFORTO.
            </h3>
            <div className="flex justify-between w-full max-w-[300px] my-5">
                <FaFacebook 
                    className="icon"
                />
                <FaTwitter 
                    className="icon"
                />
                <FaYoutube 
                    className="icon"
                />
                <FaInstagram
                    className="icon"
                />
                <FaWhatsapp 
                    className="icon"
                />
            </div>
        </div>
        <div className="flex justify-between px-5">
            <ul className="text-gray-500 flex flex-col md:flex-row">
                <li className="cursor-pointer hover:text-orange-400">Home</li>
                <li className="cursor-pointer hover:text-orange-400">Contact</li>
                <li className="cursor-pointer hover:text-orange-400">About</li>
                <li className="cursor-pointer hover:text-orange-400">Buy</li>
            </ul>
            <ul className="text-gray-500 flex flex-col md:flex-row">
                <li className="cursor-pointer hover:text-orange-400">CNPJ</li>
                <li className="cursor-pointer hover:text-orange-400">Legal</li>
                <li className="cursor-pointer hover:text-orange-400">Services</li>
                <li className="cursor-pointer hover:text-orange-400">Recruitment</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;
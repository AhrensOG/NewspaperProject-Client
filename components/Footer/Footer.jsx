import logo from "../../public/logo.png"
import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer () {
  return (
    <div className="bg-black">  
      <div className="ml-[2rem] mr-[2rem] h-[500px] divide-y divide-gray-700">
      <div className="grid grid-cols-[2fr_1fr_1fr] h-[300px]">
        <div>
          <div className=" w-full">
            <h5 className="text-red-50 pt-12 pb-[1rem] pr-[8rem] pl-[1rem] text-justify font-roboto">
            CHAINED is the world leader in online chained news and information and seeks to inform, engage and empower the world. We expose the information that wasn't known before or current events broadcast over the radio, television, online or in print media. Our content is now available through your mobile phone. No matter where your on-the-go lifestyle takes you, CN brings the news directly to you.
            </h5>
          </div>
          <div className="grid grid-cols-8  ml-4 mb-11 pl-[2rem] w-[80%]">
          <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
            <div>
              <FaFacebookF className="h-[90px] pt-[10px]"/>
            </div>
          </IconContext.Provider>;
          <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
            <div>
              <FaInstagram className="h-[90px] pt-[10px] w-[25px]"/>
            </div>
          </IconContext.Provider>;
          <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
            <div>
              <FaTwitter className="h-[90px] pt-[10px] w-[25px] "/>
            </div>
          </IconContext.Provider>;
          <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
            <div>
              <FaYoutube className="h-[90px] pt-[10px] w-[25px]"/>
            </div>
          </IconContext.Provider>;
          </div>
        </div>
        <div className="pt-12">
          <h5 className="text-red-50 pb-2 font-roboto">
            Más de Opinión Formoseña
          </h5>
          <div className=" flex flex-col font-roboto">
            <span className="text-stone-400 font-roboto pt-[10px] pb-[15px]">FAQ</span>
            <span className="text-stone-400 font-roboto pb-[15px]">Staff</span>
            <span className="text-stone-400 font-roboto pb-[15px]">Editorial</span>
          </div>
          
        </div>
        <div className="pt-12">
          <h5 className="text-red-50 pb-2 font-roboto">
            Contactos
          </h5>
          <div className="flex flex-col">
            <span className="text-stone-400 font-roboto pt-[10px] pb-[15px]">A cerca de nosotros</span>
            <span className="text-stone-400 font-roboto pt-[10px] pb-[15px]">Contactanos</span>
          </div>
        </div>
      </div>
        <div className="pt-5 divide-x divide-gray-700 text-[14px] font-semibold">
          <span className="text-stone-400 px-3">Disclaimer</span>
          <span className="text-stone-400 px-3">Privacy</span>
          <span className="text-stone-400 px-3">Segurity</span>
          <span className="text-stone-400 px-3">RSS</span>
          <span className="text-stone-400 px-3">Site Map</span>
          <span className="text-stone-400 px-3">Accesibility Help</span>
        </div>
      </div>
    </div>
  )
}
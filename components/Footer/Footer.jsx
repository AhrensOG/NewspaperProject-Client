import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Footer () {
  return (
    <div className="bg-black">  
      <div className="lg:px-8 lg:py-12 px-6 py-8 divide-y divide-gray-700 flex flex-col gap-2">
        <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 px-3">
          <div>
            <div className="w-full pt-2">
              {/* <h5 className="text-red-50 text-justify lg:pb-6 md:pr-10 md:pb-4 font-roboto">
              CHAINED is the world leader in online chained news and information and seeks to inform, engage and empower the world. We expose the information that wasn't known before or current events broadcast over the radio, television, online or in print media. Our content is now available through your mobile phone. No matter where your on-the-go lifestyle takes you, CN brings the news directly to you.
              </h5> */}
              <h5 className="text-red-50 text-justify lg:pb-6 md:pr-10 md:pb-4 font-roboto">
              Somos OPINION FORMOSEÑA, un medio de la Provincia de Formosa. Brindamos noticias e información encadenadas en línea y buscamos informar, involucrar y empoderar a nuestros lectores. Exponemos la información que antes no se conocia o la actualidad difundida por radio, televisión, online o medios impresos. Nuestros contenido ya está disponible a través de su teléfono móvil. ¡GRACIAS POR CONFIAR!
              </h5>
            </div>
            <div className="grid grid-cols-4 px-3 w-[50%] md:w-full">
            <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
              <div>
                <FaFacebookF className="h-[90px] pt-[10px]"/>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
              <div>
                <FaInstagram className="h-[90px] pt-[10px] w-[25px]"/>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
              <div>
                <FaTwitter className="h-[90px] pt-[10px] w-[25px] "/>
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "gray", className: "global-class-name" }}>
              <div>
                <FaYoutube className="h-[90px] pt-[10px] w-[25px]"/>
              </div>
            </IconContext.Provider>
            </div>
          </div>
          {/* <div className="py-2">
            <h5 className="text-red-50 py-2 font-roboto">
              Más de Opinión Formoseña
            </h5>
            <div className=" flex flex-col font-roboto gap-4">
              <span className="text-stone-400 font-roboto">FAQ</span>
              <span className="text-stone-400 font-roboto">Staff</span>
              <span className="text-stone-400 font-roboto">Editorial</span>
            </div>
            
          </div> */}
          <div className="py-2">
            <h5 className="text-red-50 pb-1 font-roboto">
              Contactos
            </h5>
            <div className="flex flex-col gap-2">
              <span className="text-stone-400 font-roboto">A cerca de nosotros</span>
              <span className="text-stone-400 font-roboto">Contactanos</span>
            </div>
          </div>
        </div>
        {/* <div className=" flex flex-row flex-wrap gap-y-6 w-full items-center py-4 divide-x divide-gray-700 text-base font-semibold">
          <span className="text-stone-400 sm:px-3 px-2">Disclaimer</span>
          <span className="text-stone-400 sm:px-3 px-2">Privacy</span>
          <span className="text-stone-400 sm:px-3 px-2">Security</span>
          <span className="text-stone-400 sm:px-3 px-2">RSS</span>
          <span className="text-stone-400 sm:px-3 px-2">Site Map</span>
          <span className="text-stone-400 sm:px-3 px-2">Accesibility Help</span>
        </div> */}
      </div>
    </div>
  )
}
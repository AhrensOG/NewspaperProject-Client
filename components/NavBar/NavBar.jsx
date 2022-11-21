import { SlMenu } from "react-icons/sl";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default function NavBar () {
  const categories = ["Politica", "Deportes", "Clima", "Ciencia" ] 
  
  // const [categories, setCategories] = useState([])

  // useEffect(()=>{
  //   const getCategories = async () => {
  //     const res = await axios.get(`${SERVER_URL}/categories`)
  //     setCategories(res.data)
  //   }
  //   getCategories()
  // })

  return (
    <nav className="flex flex-row w-full bg-slate-50 shadow-md shadow-slate-300 mb-6">
      <div  className="flex basis-[60%]  flex-row">
        <div className="basis-[25%] items-center flex flex-row">
          <IconContext.Provider value={{ color: "black", className: "w-[20px] h-[20px]" }}>
            <div className="basis-[30%] pl-6 hover:cursor-pointer">
              <SlMenu/>
            </div>
          </IconContext.Provider>
          <Link href={`/`}>
            <img
              src='/Logo.png'
              alt='picture for test'
            className="w-full lg:h-[100px] md:h-[70px] lg:pl-1 md:pl-4 basis-[60%]"
            />    
          </Link>
        </div>
        <div className= "basis-[75%] w-full flex flex-nowrap h-50 items-center justify-start">
          <div className=" flex flex-nowrap h-fdivl items-center w-full"  >
            {categories.map(c => {
              return(
                <Link href={`/categorias/${c}`}>
                  <span className="lg:basis-[15%] text-start text-base font-roboto uppercase text-black lg:pl-0 lg:pr-3 md:pl-4 md:text-sm py-2 font-medium h-15 hover:cursor-pointer" key={c}>{c}</span>
                </Link>
            )
            })}
          </div>
        </div>
      </div>
      <div className="flex space-x-4 basis-[40%] items-center justify-end md:">
        <div className="flex flex-row space-x-4">
          <button className=" text-black px-3 py-2 font-medium h-15 rounded-md " >Ingresar</button>      
          <button className="  text-black px-3 py-2 font-medium h-15 rounded-md border-r-slate-200" >Registrarse</button>      
          <button className=" text-black px-3 py-2 font-medium h-15 rounded-md " >Buscar</button>
        </div>
      </div>
    </nav>
  )
}
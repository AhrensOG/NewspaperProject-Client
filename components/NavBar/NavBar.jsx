import Image from "next/image"
import logo from '../../public/logo.png'

export default function NavBar () {
  const categories = ["politics", "world", "climate", "siences&tech" ] 

  return (
    <nav className="flex flex-row w-full bg-slate-50 border-b-2 border-black">
      <div  className="flex basis-1/2  flex-row">
        <div>
          <Image
            src={logo}
            alt='picture for test'
          className="w-[90px] h-[90px]"
          />    
        </div>
        <div className= "flex flex-nowrap h-50 items-center ml-3">
          <ul className=" flex flex-nowrap space-x-4"  >
            {categories.map(c => {
              return(
                <li className=" text-black px-3 py-2 font-medium h-15 rounded-md " key={c}>{c}</li>
            )
            })}
          </ul>
        </div>
      </div>
      <div className="flex space-x-4 basis-1/2 items-center justify-end mr-12">
        <div className="flex flex-row space-x-4">
          <button className=" text-black px-3 py-2 font-medium h-15 rounded-md " >Ingresar</button>      
          <button className="  text-black px-3 py-2 font-medium h-15 rounded-md border-r-slate-200" >Registrarse</button>      
          <button className=" text-black px-3 py-2 font-medium h-15 rounded-md " >Buscar</button>
        </div>
      </div>
    </nav>
  )
}
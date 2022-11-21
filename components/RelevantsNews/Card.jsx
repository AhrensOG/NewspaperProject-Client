import Link from "next/link";
import React from "react";

export default function Card ({image, title, tag, id}) {
  return (
    <div className="">
      <div className="pb-2 ">
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <img className="w-full md:h-[150px] lg:h-[250px] cursor-pointer"  src={image} alt="Image from important card" />
        </Link>  
      </div>
      <div className="pt-2">
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <h2 className="font-custom font-semibold md:text-[1.2rem] lg:text-[1.5rem] cursor-pointer hover:underline underline-offset-1" >{title}</h2>
        </Link>  
      </div> 
    </div>
  )
}
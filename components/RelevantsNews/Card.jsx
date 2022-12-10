import Link from "next/link";
import React from "react";
import Carrousel from "../Carrousel/Carousel";

export default function Card ({image, title, tag, id}) {
  return (
    <div key={id} className="">
      <div className="pb-2 ">
          <Carrousel images={image} id={id} tag={tag}/>
      </div>
      <div className="pt-2">
        <Link href={`/detalle/${id}?tag=${tag}`}>
          <h2 className="font-custom font-semibold text-2xl sm:text-base md:text-[1.2rem] lg:text-[1.5rem] cursor-pointer hover:underline underline-offset-1" >{title}</h2>
        </Link>  
      </div> 
    </div>
  )
}
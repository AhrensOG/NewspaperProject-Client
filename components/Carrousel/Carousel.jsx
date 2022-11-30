import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Carrousel = ({ images, id=false, tag=false }) => {
  const imagesArray = images.split(" ");

  return (
    <div className="h-56 md:h-[150px] lg:h-[250px]">
      <Carousel slideInterval={5000}>
        {
          imagesArray?.length &&
            imagesArray.map((i) => {
              return (
                <Link href={`/detalle/${id}?tag=${tag}`}>
                <img
                  className="w-full md:h-[150px] lg:h-[250px] cursor-pointer" 
                  key={i}
                  src={i}
                  alt="IMG"
                />
                </Link>
              );
            })
        }
      </Carousel>
    </div>
  );
};

export default Carrousel;
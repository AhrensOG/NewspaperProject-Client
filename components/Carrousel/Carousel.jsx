import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Carrousel = ({ images, id=false, tag=false }) => {
  const imagesArray = images.split(" ");

  return (
    <div className="h-[250px] sm:h-[130px] md:h-[150px] lg:h-[250px]">
      <Carousel slideInterval={5000}>
        {
          imagesArray?.length &&
            imagesArray.map((a, i) => {
              return (
                <div key={i}>
                  <Link href={`/detalle/${id}?tag=${tag}`}>
                  <img
                    className="w-full h-[250px] sm:h-[150px] lg:h-[250px] cursor-pointer" 
                    key={i}
                    src={a}
                    alt="IMG"
                  />
                  </Link>
                </div>
              );
            })
        }
      </Carousel>
    </div>
  );
};

export default Carrousel;

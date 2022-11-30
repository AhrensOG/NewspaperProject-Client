import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const PrincipalPostCarousel = ({ images, id=false, tag=false }) => {
  const imagesArray = images.split(" ");

  return (
    <div className="h-[] sm:h-[180px] md:h-[230px] lg:h-[280px]">
      <Carousel slideInterval={5000}>
        {
          imagesArray?.length &&
            imagesArray.map((i) => {
              return (
                <Link href={`/detalle/${id}?tag=${tag}`}>
                <img
                  className="w-full md:h-[230px] lg:h-[280px]" 
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

export default PrincipalPostCarousel;

import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const PrincipalImportantSectionCarousel = ({ images, id=false, tag=false }) => {
  const imagesArray = images.split(" ");

  return (
    <div className="h-56 md:h-[350px] lg:h-[500px]">
      <Carousel slideInterval={5000}>
        {
          imagesArray?.length &&
            imagesArray.map((i) => {
              return (
                <Link key={i} href={`/detalle/${id}?tag=${tag}`}>
                <img
                  className='w-full lg:h-[500px] md:h-[350px] pb-2' 
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

export default PrincipalImportantSectionCarousel;
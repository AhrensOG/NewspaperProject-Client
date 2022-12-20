import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const CenterListPostCarousel = ({ images, id = false, tag = false }) => {
  const imagesArray = images?.split(" ");

  return (
    <div className="sm:h-[180px] md:h-[120px] lg:h-[150px]">
      {imagesArray?.length > 1 ? (
        <Carousel slideInterval={5000}>
          {imagesArray?.length &&
            imagesArray?.map((i) => {
              return (
                <Link href={`/detalle/${id}?tag=${tag}`}>
                  <img
                    className="w-full md:h-[120px] lg:h-[150px]"
                    key={i}
                    src={i}
                    alt="IMG"
                  />
                </Link>
              );
            })}
        </Carousel>
      ) : (
        <div>
          <Link href={`/detalle/${id}?tag=${tag}`}>
            <img className="w-full md:h-[120px] lg:h-[150px]" src={images} alt="Img alone" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CenterListPostCarousel;

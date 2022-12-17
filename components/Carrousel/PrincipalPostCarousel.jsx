import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const PrincipalPostCarousel = ({ images, id = false, tag = false }) => {
  const imagesArray = images.split(" ");

  return (
    <div className="h-[250px] sm:h-[200px] md:h-[230px] lg:h-[280px]">
      {imagesArray.length > 1 ? (
        <Carousel slideInterval={5000}>
          {imagesArray?.length &&
            imagesArray.map((p, i) => {
              return (
                <Link key={i} href={`/detalle/${id}?tag=${tag}`}>
                  <img
                    className="w-full h-[250px] sm:h-[200px] md:h-[230px] lg:h-[280px]"
                    key={i}
                    src={p}
                    alt="IMG"
                  />
                </Link>
              );
            })}
        </Carousel>
      ) : (
        <div>
          <img className="w-full h-[250px] sm:h-[200px] md:h-[230px] lg:h-[280px]" src={images} alt="Img alone" />
        </div>
      )}
    </div>
  );
};

export default PrincipalPostCarousel;

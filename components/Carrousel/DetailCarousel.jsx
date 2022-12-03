import { Carousel } from "flowbite-react";
import React from 'react'


const DetailCarousel = ({ images }) => {
  const imagesArray = images.split(" ");

  return (
    <div className="lg:h-[40rem] md:h-[32rem] sm:h-[24rem] h-[16rem]">
      <Carousel slideInterval={5000}>
        {
          imagesArray?.length &&
            imagesArray.map((i) => {
              return (
                <img
                  className="w-full h-full"
                  key={i}
                  src={i}
                  alt="IMG"
                />
              );
            })
        }
      </Carousel>
    </div>
  )
}

export default DetailCarousel
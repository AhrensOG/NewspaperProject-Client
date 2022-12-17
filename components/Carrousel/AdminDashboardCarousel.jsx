import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const AdminDashboardCarousel = ({ images }) => {
  const imagesArray = images.split(" ");

  return (
    <div className="h-[80px]">
      {imagesArray.length > 1 ? (
        <Carousel slideInterval={5000}>
          {imagesArray?.length &&
            imagesArray.map((i) => {
              return (
                <img className="w-full h-[80px]" key={i} src={i} alt="IMG" />
              );
            })}
        </Carousel>
      ) : (
        <div>
          <img className="w-full h-[80px]" src={images} alt="Img alone" />
        </div>
      )}
    </div>
  );
};

export default AdminDashboardCarousel;

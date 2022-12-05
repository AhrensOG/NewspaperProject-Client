import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const AdminDashboardCarousel = ({ images }) => {
  const imagesArray = images.split(" ");

  return (
    <div className="h-[80px]">
      <Carousel slideInterval={5000}>
        {
          imagesArray?.length &&
            imagesArray.map((i) => {
              return (
                <img
                  className='w-full h-[80px]' 
                  key={i}
                  src={i}
                  alt="IMG"
                />
              );
            })
        }
      </Carousel>
    </div>
  );
};

export default AdminDashboardCarousel;
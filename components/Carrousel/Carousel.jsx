import { Carousel } from "flowbite-react";
import React from "react";

const Carrousel = ({ images }) => {
  const imagesArray = images.slice(' ')
  console.log(imagesArray)
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img
          src="https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/30-696x464.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default Carrousel;

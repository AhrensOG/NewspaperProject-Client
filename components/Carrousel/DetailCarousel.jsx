import { Carousel } from "flowbite-react";
import React from 'react'


const DetailCarousel = ({ images }) => {
  const imagesArray = images.split(" ");

  return (
    <div className="h-56 sm:h-64 lg:h-[40rem] xl:h-[40rem] 2xl:h-[45rem]">
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

// {
//   imagesArray?.length !== 0 && id && tag
//     ? imagesArray.map((i) => {
//         return (
//           <Link href={`/detalle/${id}?tag=${tag}`}>
//           <img
//             key={i}
//             src={i}
//             alt="IMG"
//           />
//           </Link>
//         );
//       })
//     : imagesArray.map(i => {
//       return (
//         <img src={i} alt="detail image" className="w-full lg:h-[45rem] md:h-[35rem]"/>
//       )
//     })
// }
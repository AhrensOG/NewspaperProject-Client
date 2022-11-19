import React from "react";

export default function Card ({image, subtitulo}) {
  return (
    <div>
      <img src={image} alt="Image from important card" />
      <h2>{subtitulo}</h2>
    </div>
  )
}
const axios = require("axios")

import Card from "./Cards"

export default function TrendingSection ({title, image, type}) {
  return (
    
    <div className=" flex basis-1/4 items-center" >
    <Card title={title} image={image} type={type} />
    </div>
  )

}
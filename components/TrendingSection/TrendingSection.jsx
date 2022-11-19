const axios = require("axios")
import {useEffect, useState} from 'react'

import Card from "./Cards"

export default function TrendingSection ({title, image, type}) {
  const [trending, setTrending] = useState([])
  useEffect(() => { async function getAll ()  {
    const data = await axios.get("http://localhost:3001/post?tag=Tendencias&limit=4")
    setTrending(data.data)
  }
  getAll()
}, [])
  return (
    <div className=" flex basis-1/4 items-center" >
    {trending.map ((e) => {
      return(
        <Card title={e.title} image={e.image} type={e.tag.name} />
      )
    })}
    </div>
  )

}
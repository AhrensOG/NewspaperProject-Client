const axios = require("axios")
import {useEffect, useState} from 'react'
import Tag from '../Tag'

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
    <div className='lg:pl-[4rem] lg:pr-[4rem] lg:pt-[1.5rem] md:pt-[1rem] md:pl-[2.5rem] md:pr-[2.5rem]'>
      <div>
        <Tag title={'Tendencias'}/>
      </div>
      <div className="items-center grid grid-cols-4 w-full pt-1 pb-[2rem]" >
      {trending.length !== 0 && trending.map ((e) => {
        const category = e.categories.length === 0 ? '' : e.categories[0].name
        return(
          <Card key={e.title} title={e.title} image={e.image} category={category} />
        )
      })}
      </div>
    </div>
  )

}
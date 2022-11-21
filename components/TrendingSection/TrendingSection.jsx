const axios = require("axios")
import {useEffect, useState} from 'react'
import Tag from '../Tag'
import Card from "./Cards"
import NextNProgress from "nextjs-progressbar";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default function TrendingSection ({loader}) {
  const [trending, setTrending] = useState([])
  useEffect(() => { async function getAll ()  {
      const data = await axios.get(`${SERVER_URL}/post?tag=Tendencias&limit=4`)
      setTrending(data.data)
    }
    getAll()
  }, [])

  return (
    <div className='lg:px-[4rem] lg:pt-[1.5rem] md:pt-[1rem] md:px-[2.5rem]'>
      {
        trending.length === 0 || !loader
        ? <div></div>
        : <div>
            <NextNProgress color="#3b82f1"/>
            <div>
              <Tag key={'Tendencias'} title={'Tendencias'}/>
            </div>
            <div className="items-center grid grid-cols-4 w-full pt-[1.5rem] pb-[2rem]" >
              {trending?.length !== 0 && trending.map ((e) => {
                const category = e.categories.length === 0 ? '' : e.categories[0].name
                return(
                  <Card key={e.title} id={e.id} tag={e.tag.name} title={e.title} image={e.image} category={category} />
                )
              })}
            </div>
          </div>
      }
    </div>
  )

}
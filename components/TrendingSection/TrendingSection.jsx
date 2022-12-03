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
    <div className='lg:px-16 lg:pt-6 md:pt-4 md:px-10 px-4'>
      {
        trending.length === 0 || !loader
        ? <div></div>
        : <div>
            <NextNProgress color="#3b82f1"/>
            <div>
              <Tag key={'Tendencias'} title={'Tendencias'}/>
            </div>
            <div className="items-center grid grid-cols-1 sm:grid-cols-4 gap-4 w-full py-8" >
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
import axios from "axios"
import { useEffect, useState } from "react"
import Tag from "../Tag";
import CenterListPostCard from "./CenterListPostCard";
import ListPostCard from "./ListPostCard";
import PrincipalPostCard from "./PrincipalPostCard";
import NextNProgress from "nextjs-progressbar";
import Loader from "../Loader";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const TopNewSection = ({setLoader}) => {
  const [TodayNews, setTodayNews] = useState([]);
  const [RecentNews, setRecentNews] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const todayNews = await axios.get(`${SERVER_URL}/post?tag=Selecciones de hoy&limit=3`)
      const recentNews = await axios.get(`${SERVER_URL}/post?tag=Recientes&limit=5`)

      setRecentNews(recentNews.data)
      setTodayNews(todayNews.data)
    }
    getData()
  },[])
  
  TodayNews?.length > 0 && RecentNews?.length > 0 ? setLoader(true) : setLoader(false)

  return (
    <div className="p-4 pr-4 pl-4 md:pr-10 md:pl-10 lg:pr-16 lg:pl-16">
      {
        TodayNews?.length === 0 || RecentNews?.length === 0
        ? <Loader/>
        : <div className="w-full flex">
            <NextNProgress color="#3b82f1"/>
            <div className="basis-[75%]" >
              <div>
                <Tag key={'Selecciones de hoy'} title="Selecciones de hoy"/>
              </div>
              <div className="flex">
                <div className="basis-[65%]">
                  <PrincipalPostCard key={TodayNews[0]?.id} id={TodayNews[0]?.id} tag={TodayNews[0]?.tag?.name} title={TodayNews[0]?.title} subTitle={TodayNews[0]?.subTitle} image={TodayNews[0]?.image} category={ TodayNews[0]?.categories[0]?.name} />
                </div>
                <div className="basis-[35%] divide-y pl-4 pr-4">
                  <CenterListPostCard key={TodayNews[1]?.id} id={TodayNews[1]?.id} tag={TodayNews[1]?.tag?.name} title={TodayNews[1]?.title} image={TodayNews[1]?.image} category={ TodayNews[1]?.categories[0]?.name} />
                  <CenterListPostCard key={TodayNews[2]?.id} id={TodayNews[2]?.id} tag={TodayNews[2]?.tag?.name} title={TodayNews[2]?.title} image={TodayNews[2]?.image} category={ TodayNews[2]?.categories[0]?.name} />
                </div>
              </div>
            </div>
            <div className="basis-[25%]">
              <div>
                <Tag key={'Recientes'} title="Recientes"/>
              </div>
            <div className="divide-y flex flex-col gap-2">
                {
                  RecentNews.length !== 0 && RecentNews.map((p) => {
                    return <ListPostCard id={p.id} tag={p.tag?.name} key={p.title} title={p.title} image={p.image} />
                  })
                }
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default TopNewSection
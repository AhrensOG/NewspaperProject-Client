import axios from "axios"
import { useEffect, useState } from "react"
import CenterListPostCard from "./CenterListPostCard";
import ListPostCard from "./ListPostCard";
import PrincipalPostCard from "./PrincipalPostCard";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const TopNewSection = () => {
  const [news, setNews] = useState([]);
  const [TodayNews, setTodayNews] = useState([]);
  const [RecentNews, setRecentNews] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const allNews = await axios.get(`${SERVER_URL}/post`)
      const todayNews = await axios.get(`${SERVER_URL}/post?tag=Selecciones de hoy&limit=3`)
      const recentNews = await axios.get(`${SERVER_URL}/post?tag=Recientes&limit=5`)

      setRecentNews(recentNews.data)
      setTodayNews(todayNews.data)
      setNews(allNews.data)
    }
    getData()
  },[])

  return (
    <div className="w-full flex p-4 pr-4 pl-4 md:pr-10 md:pl-10 lg:pr-16 lg:pl-16">
      <div className="flex basis-[75%]">
        <div className="basis-[65%]">
          <PrincipalPostCard title={TodayNews[0]?.title} subTitle={TodayNews[0]?.subTitle} image={TodayNews[0]?.image} category={ TodayNews[0]?.categories[0]?.name} />
        </div>
        <div className="basis-[35%] divide-y pl-4 pr-4">
          <CenterListPostCard title={TodayNews[1]?.title} image={TodayNews[1]?.image} category={ TodayNews[1]?.categories[0]?.name} />
          <CenterListPostCard title={TodayNews[2]?.title} image={TodayNews[2]?.image} category={ TodayNews[2]?.categories[0]?.name} />
        </div>
      </div>
      <div className="basis-[25%] divide-y flex flex-col gap-2">
        {
          RecentNews.length !== 0 && RecentNews.map((p) => {
            return <ListPostCard title={p.title} image={p.image} />
          })
        }
      </div>
    </div>
  )
}

export default TopNewSection
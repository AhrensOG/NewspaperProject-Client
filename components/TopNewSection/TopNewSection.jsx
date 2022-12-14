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
  const [firstPlain, setFirstPlain] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const todayNews = await axios.get(`${SERVER_URL}/post?tag=Selecciones de hoy&limit=3`)
        const recentNews = await axios.get(`${SERVER_URL}/post?tag=Recientes&limit=5`)
        const plain = await axios.get(`${SERVER_URL}/post/plain?firstPlain=true`)
        setTodayNews(todayNews.data)
        setRecentNews(recentNews.data)
        setFirstPlain(plain.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])
  
  TodayNews?.length > 0 && RecentNews?.length > 0 ? setLoader(true) : setLoader(false)

  return (
    <div className="p-4 pr-4 pl-4 md:pr-10 md:pl-10 lg:pr-16 lg:pl-16">
      {
        TodayNews?.length === 0 || RecentNews?.length === 0
        ? <Loader/>
        : <div className="w-full flex sm:flex-row flex-col md:gap-12 sm:gap-6 gap-4">
            <NextNProgress color="#3b82f1"/>
            <div className="basis-[70%]" >
              <div>
                <Tag key={'Selecciones de hoy'} title="Selecciones de hoy"/>
              </div>
              {/* <div className="flex"> */}
                <div className="basis-[65%]">
                  <PrincipalPostCard key={firstPlain[0]?.id} id={firstPlain[0]?.id} tag={firstPlain[0]?.tag?.name} title={firstPlain[0]?.title} subTitle={firstPlain[0]?.subTitle} image={firstPlain[0]?.image} category={ firstPlain[0]?.categories[0]?.name} />
                </div>
                {/* <div className="basis-[35%] divide-y pl-4 pr-4">
                  <CenterListPostCard key={TodayNews[1]?.id} id={TodayNews[1]?.id} tag={TodayNews[1]?.tag?.name} title={TodayNews[1]?.title} image={TodayNews[1]?.image} category={ TodayNews[1]?.categories[0]?.name} />
                  <CenterListPostCard key={TodayNews[2]?.id} id={TodayNews[2]?.id} tag={TodayNews[2]?.tag?.name} title={TodayNews[2]?.title} image={TodayNews[2]?.image} category={ TodayNews[2]?.categories[0]?.name} />
                </div>
              </div> */}
            </div>
            <div className="basis-[30%]">
              <div>
                <Tag key={'Recientes'} title="Recientes"/>
              </div>
            <div className="divide-y flex flex-col sm:gap-0 md:gap-3 pt-3">
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
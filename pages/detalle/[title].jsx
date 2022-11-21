import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag";
import Card from "../../components/TrendingSection/Cards";
import {useEffect, useState} from "react";
import axios from "axios";
import { useRouter } from 'next/router'

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default function Detail () {

  const router = useRouter();
  const { title } = router.query;

  const [related, setRelated] = useState([])
  const [news, setNews] = useState({})

  useEffect(() => {
    const getRelateds = async () =>{
      const data = await axios.get(`${SERVER_URL}/post?tag=${news.tag?.name}&limit=4`)
      const json = await axios.get(`${SERVER_URL}/post/detail?title=${title}`)
      setRelated(data.data)
      setNews(json.data)
    } 
    getRelateds()
  },[title])
  // console.log(news?.tag?.name);
  console.log(news);

  return (
    <div className=" bg-slate-50 ">
      <NavBar/>
      {
        !title && Object.keys(news).length === 0 && related.length === 0
        ? <div>CARGANDO</div>
        : <div className="pb-[120px]">
            <div>
                <div className="flex pl-20">
                  <div className="pt-14">
                    <Tag title={news?.tag?.name}/>
                  </div>
                  <div className="pt-16 pl-5">
                    <span className="font-mono">Ivix09</span>
                  </div>
                  <div className="pt-16 pl-5" >
                    <span className="font-mono">
                      {news?.createdAt}
                    </span>
                  </div>
                </div>
            </div>
            <div className="pl-20 pt-4 pr-16">
                <h1 className="pb-5 text-5xl font-bold font-noto">
                  {news?.title}
                </h1>
                  <div>
                    <img src={news?.image} alt="detail image" className="w-full h-full"/>
                  </div>
            </div>
            <div className="pl-20 pr-24">
              <div className="text-4xl py-6">
                <h2 className="font-bold">{news?.subTitle}</h2>
              </div>
              <div>
                <h3>{news?.description}</h3>
              </div>
              <span className="text-2xl italic font-semibold">Relacionados:</span> <br/> <br/>
              <div className="flex">
                <div className="basis-2/3 flex flex-col">
                  <div className="list-disc pl-10 text-xl basis-1/4">
                    {related.map((e) => {
                      return(
                        <div>
                          <Card title={e.title} image={e.image} category={e.tag.name} boolean={true}/>
                        </div>
                      )
                    })}
                  </div> 
                </div>
                <div className="basis-1/3">
                  ADVERSTIMENT
                </div>
              </div>
            </div>
          </div>
        }
        <Footer/>
    </div>

  )
}
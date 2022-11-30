import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag";
import {useEffect, useState} from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import NextNProgress from "nextjs-progressbar";
import Loader from "../../components/Loader";
import DetailCard from "../../components/Detail/DetailCard";
import parse from 'html-react-parser'
import Carrousel from "../../components/Carrousel/Carousel";
import DetailCarousel from "../../components/Carrousel/DetailCarousel";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default function Detail () {

  const router = useRouter();
  const { id, tag } = router.query;

  const [related, setRelated] = useState([])
  const [news, setNews] = useState({})

  useEffect(() => {
    const getRelateds = async () =>{
      if(id && tag) {
        const json = await axios.get(`${SERVER_URL}/post/detail?id=${id}`)
        setNews(json.data)
        const data = await axios.get(`${SERVER_URL}/post?tag=${tag}&limit=4`)
        setRelated(data.data)
      }
    } 
    getRelateds()
    return () => setNews([])
  },[id])

  return (
    <div className=" bg-slate-50 ">
      <NavBar/>
      {
        !id || Object.keys(news).length === 0 || related.length === 0
        ? <Loader/>
        : <div className="pb-[120px]">
            <NextNProgress color="#3b82f1"/>
            <div>
                <div className="flex pl-20">
                  <div className="pt-8">
                    <Tag title={news?.tag?.name}/>
                  </div>
                  <div className="pt-10 pl-5">
                    <span className="font-mono">Ivix09</span>
                  </div>
                  <div className="pt-10 pl-5" >
                    <span className="font-mono">
                      {news?.createdAt}
                    </span>
                  </div>
                </div>
            </div>
            <div className="pl-20 pt-4 pr-16">
                <h1 className="pb-5 lg:text-7xl md:text-5xl font-bold font-noto break-words">
                  {news?.title}
                </h1>
                  <div>
                    <DetailCarousel images={news?.image}/>
                  </div>
            </div>
            <div className="pl-20 pr-24">
              <div className="text-4xl py-6">
                <h2 className="font-bold lg:text-5xl md:text-3xl">{news?.subTitle}</h2>
              </div>
              <div className="pb-16">
                <h3 className="text-2xl leading-[3rem]">{parse(news?.description)}</h3>
              </div>
              <div className="lg:pb-[1rem] md:[1rem] flex">
                <span className="basis-1/2 text-2xl italic font-semibold">Relacionados:</span>
                <span className="basis-1/2 text-2xl italic font-semibold">Anuncios:</span>
              </div>
              <div className="flex">
                <div className="basis-1/2 flex flex-col">
                  {related.map((e) => {
                    return(
                      <div className="basis-1/4 w-[80%]">
                        <DetailCard id={e.id} tag={e.tag.name} title={e.title} image={e.image} category={e.tag.name}/>
                      </div>
                    )
                  })}
                </div>
                <div className="basis-1/2">
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
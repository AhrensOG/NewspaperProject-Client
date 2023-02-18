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
import DetailCarousel from "../../components/Carrousel/DetailCarousel";
import SideBar from "../../components/SideBarHome/SideBar";
import Head from "next/head";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default function Detail () {
  const [nav, setNav] = useState(false);
  const [date, setDate] = useState("")

  const router = useRouter();
  const { id, tag } = router.query;

  const [related, setRelated] = useState([])
  const [news, setNews] = useState({})

  useEffect(() => {
    const getRelateds = async () =>{
      if(id && tag) {
        try {
          const json = await axios.get(`${SERVER_URL}/post/detail?id=${id}`)
          setNews(json.data)
          const data = await axios.get(`${SERVER_URL}/post?tag=${tag}&limit=4`)
          setRelated(data.data)
          const dateFiltered = []
          if(json.data.createdAt) {
            let dateArray = json.data.createdAt.split('');
            dateArray.map((e) => {
              if(dateFiltered.length < 10) {
                dateFiltered.push(e)
              }
            })
            setDate(dateFiltered)
          }
        } catch (e) {
          console.log(e.message)
        }
      }
    } 
    getRelateds()
    return () => setNews([])
  },[id])

  return (
    <div className=" bg-slate-50 ">
      <Head>
        <title>OpinionFormoseña | Detalle</title>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <NavBar setNav={setNav} nav={nav}/>
      <SideBar nav={nav} setNav={setNav}/>
      {
        !id || Object.keys(news).length === 0 || related.length === 0
        ? <Loader/>
        : <div className="pb-[120px]">
            <NextNProgress color="#3b82f1"/>
            <div className="flex sm:flex-row flex-col sm:items-center gap-4 py-4 lg:px-20 md:px-16 sm:px-12 px-4">
              <div>
                <Tag title={news?.tag?.name}/>
              </div>
              <div className="flex flex-row gap-4">
                <span className="font-mono">Martín Ortíz</span>
                <span className="font-mono">
                  {date}
                </span>
              </div>
            </div>
            <div className="lg:px-20 md:px-16 sm:px-12 px-4">
                <h1 className="pb-5 lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-bold font-noto break-words">
                  {news?.title}
                </h1>
                  <div>
                    <DetailCarousel images={news?.image}/>
                  </div>
            </div>
            <div className="lg:px-20 md:px-16 sm:px-12 px-4">
              <div className="py-6">
                <h2 className="font-bold lg:text-5xl md:text-3xl sm:text-2xl text-xl">{news?.subTitle}</h2>
              </div>
              <div className="pb-16">
                <h3 className="lg:text-3xl lg:leading-[4rem] md:text-2xl md:leading-[3rem] sm:leading-[2rem] text-xl">{parse(news?.description)}</h3>
              </div>
              <div className="flex md:flex-row flex-col-reverse">
                <div className="basis-1/2 flex flex-col">
                <span className="basis-1/2 text-2xl italic font-semibold">Relacionados:</span>
                  {related.map((e, i) => {
                    return(
                      <div key={i} className="basis-1/4 w-[80%]">
                        <DetailCard id={e.id} tag={e.tag.name} title={e.title} image={e.image} category={e.tag.name}/>
                      </div>
                    )
                  })}
                </div>
                <div className="basis-1/2">
                  <span className="basis-1/2 text-2xl italic font-semibold">Anuncios:</span>

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
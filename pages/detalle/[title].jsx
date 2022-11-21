import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag";
import Card from "../../components/TrendingSection/Cards";
import {useEffect, useState} from "react";
import axios from "axios";
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default function Detail () {

const [related, setRelated] = useState([])
const [news, setNews] = useState([])

useEffect(() => {
  const getRelateds = async () =>{
    const data = await axios.get(`${SERVER_URL}/post?tag=Tendencias&limit=4`)
    const json = await axios.get(`${SERVER_URL}/post?tag=Selecciones de hoy&limit=1`)
    setRelated(data.data)
    setNews(json.data)
  } 
  getRelateds()
},[])
  return (
    <div className=" bg-slate-50 ">
      <NavBar/>
        <div className="pb-[120px]">
          <div>
              <div className="flex pl-20">
                <div className="pt-14">
                  <Tag title={news[0]?.tag.name}/>
                </div>
                <div className="pt-16 pl-5">
                  <span className="font-mono">Ivix09</span>
                </div>
                <div className="pt-16 pl-5" >
                  <span className="font-mono">
                    {news[0]?.createdAt}
                  </span>
                </div>
              </div>
          </div>
          <div className="pl-20 pt-4 pr-16">
              <h1 className="pb-5 text-5xl font-bold font-noto">
                {news[0]?.title}
              </h1>
                <div>
                  <img src={news[0]?.image} alt="detail image" className="w-full h-full"/>
                </div>
          </div>
          <div className="pl-20 pr-24">
            <div className="text-4xl py-6">
              <h2 className="font-bold">{news[0]?.subtitle}</h2>
            </div>
            <div className="text-3xl pb-3">
              <h4 className="font-semibold text-3xl">Where did this come from?</h4>
            </div>
            <span className="text-xl">{news[0]?.description}</span> <br/> <br/>
            <span className="text-xl">During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones.</span> <br /> <br/>
            <span className="text-xl">Doing this also meant the company was able to design the headset so the air filters could be placed in the earcups, minimising some of the unusual bulkiness in previous prototypes.</span> <br /> <br />
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
        <Footer/>
    </div>

  )
}
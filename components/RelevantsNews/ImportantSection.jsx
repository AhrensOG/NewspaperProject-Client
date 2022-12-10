import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Tag from "../Tag"
import PrincipalImportantNewPost from "./PrincipalImportantNewPost";
import NextNProgress from "nextjs-progressbar";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default function ImportantSection ({ loader }) {

  const [news, setNews] = useState([]);
  // const primaryPost = [];
  // const secondaryPost = [];
  const filteredNews = [];
  const upperSection = [];
  const leftColumnSection = [];
  const middleSection = [];
  const rightColumnSection = [];

  const [secondPlain, setSecondPlain] = useState([]);
  const [thirdPlain, setThirdPlain] = useState([]);

  for (let i = 0; i < news?.length; i++) {
    if(news[i]?.title !== secondPlain[0]?.title && news[i]?.title !== thirdPlain[0]?.title) {
      filteredNews.push(news[i])
    }
  }

  for (let i = 0; i < filteredNews.length; i++) {
    if(i >= 0 && i <= 2 ) upperSection.push(news[i]);
    if(i >= 3 && i <= 5) leftColumnSection.push(news[i]);
    if(i >= 6 && i <= 8) middleSection.push(news[i]);
    if(i >= 9 && i <= 11) rightColumnSection.push(news[i]);
  }

  useEffect(()=> {
    const getImportants = async () => {
      try {
        const json = await axios.get(`${SERVER_URL}/post?tag=Importante&limit=14`)
        const plain2 = await axios.get(`${SERVER_URL}/post/plain?secondPlain=true`)
        const plain3 = await axios.get(`${SERVER_URL}/post/plain?thirdPlain=true`)
        setNews(json.data)
        setSecondPlain(plain2.data)
        setThirdPlain(plain3.data)
      } catch (error) {
        console.log(error)
      }
    }
    getImportants()
  }, [])

  return (
    <div className="lg:px-16 md:px-10 px-4 pb-16">
      {
        news?.length === 0 || secondPlain?.length === 0 || thirdPlain?.length === 0 || upperSection?.length === 0 || leftColumnSection?.length === 0 || middleSection?.length === 0 || rightColumnSection?.length === 0 || !loader
        ? <div></div>
        : <div>
            <NextNProgress color="#3b82f1"/>
            {/* TAG SECTION */}
            <div className="md:pt-[.5rem] md:pb-[1.5rem] sm:py-[.5rem]">
              <Tag key={'Importante'} title="Importante"/>
            </div>
            {/* UPPER SECTION */}
            <div className="flex flex-col sm:flex-row gap-10 pt-6 ">
              {
                upperSection?.length !== 0 && upperSection?.map(( p, i ) => {
                return <div key={i}>
                  <Card key={p?.title} id={p?.id} tag={p?.tag.name} image={p?.image} title={p?.title} />
                </div> 
              }) 
              }
            </div>
            {/* MIDDLE SECTION */}
            <div className="flex flex-col-reverse sm:flex-row pt-12 gap-10">

              {/* LEFT COLUMN */}
              <div className="basis-[32%]">
                {
                  leftColumnSection?.length !== 0 && leftColumnSection?.map(( p, i ) => {
                    return <div key={i} className="pb-6"><Card key={p?.title} id={p?.id} tag={p?.tag.name} image={p?.image} title={p?.title} /></div>
                  })
                }
              </div>
              {/* PRIMARY POST */}
              <div className="basis-[68%]">
                <PrincipalImportantNewPost key={secondPlain[0]?.id} id={secondPlain[0]?.id} tag={secondPlain[0]?.tag.name} title={secondPlain[0]?.title} image={secondPlain[0]?.image} description={secondPlain[0]?.description} category={secondPlain[0]?.category}/>
              </div>

            </div>
            {/* MIDDLE POST ROW */}
            <div className="flex flex-col sm:flex-row gap-10 pt-[1rem]">
              {
                middleSection?.length !== 0 && middleSection?.map(( p, i ) => {
                return  ( 
                <div key={i}>
                  <Card key={p?.title} id={p?.id} tag={p?.tag.name} image={p?.image} title={p?.title} />
                </div>  
                )
              }) 
              }
            </div>
            {/* LOWER SECTION */}
            <div className="flex flex-col-reverse sm:flex-row-reverse pt-12 gap-10">

              {/* RIGHT COLUMN */}
              <div className="basis-[32%]">
                {
                  rightColumnSection?.length !== 0 && rightColumnSection?.map(( p, i ) => {
                    return <div key={i} className="pb-6"><Card key={p?.title} id={p?.id} tag={p?.tag.name} image={p?.image} title={p?.title} /></div>
                  })
                }
              </div>
              {/* SECONDARY POST */}
              <div className="basis-[68%]">
                <PrincipalImportantNewPost key={thirdPlain[0]?.id} id={thirdPlain[0]?.id} tag={thirdPlain[0]?.tag.name} title={thirdPlain[0]?.title} image={thirdPlain[0]?.image} description={thirdPlain[0]?.description} category={thirdPlain[0]?.category}/>
              </div>
            </div>
          </div>
      }
    </div>
  )
}
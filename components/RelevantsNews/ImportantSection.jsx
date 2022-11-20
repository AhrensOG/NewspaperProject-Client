import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Tag from "../Tag"
import PrincipalImportantNewPost from "./PrincipalImportantNewPost";

export default function ImportantSection () {

  const [news, setNews] = useState([]);
  const primaryPost = [];
  const secondaryPost = [];
  const upperSection = [];
  const leftColumnSection = [];
  const middleSection = [];
  const rightColumnSection = [];

  for (let i = 0; i < news?.length; i++) {
    if(i === 0) primaryPost.push(news[i]);
    if(i === 1) secondaryPost.push(news[i]);
    if(i >= 2 && i <= 4 ) upperSection.push(news[i]);
    if(i >= 5 && i <= 7) leftColumnSection.push(news[i]);
    if(i >= 8 && i <= 10) middleSection.push(news[i]);
    if(i >= 11 && i <= 13) rightColumnSection.push(news[i]);
  }

  useEffect(()=> {
    const getImportants = async () => {
      const json = await axios.get("http://localhost:3001/post?tag=Importante&limit=14")
      setNews(json.data)
    }
    getImportants()
  }, [])

  return (
    <div className="lg:pl-[4rem] lg:pr-[4rem] md:pl-[2.5rem] md:pr-[2.5rem]">
      {/* TAG SECTION */}
      <div className="pt-[.5rem] pb-[1.5rem]">
        <Tag title="Importante"/>
      </div>
      {/* UPPER SECTION */}
      <div className="flex flex-row gap-10 pt-[1rem]">
        {
          upperSection?.length !== 0 && upperSection?.map(( p ) => {
          return <Card key={p.title} image={p.image} title={p.title} />
        }) 
        }
      </div>
      {/* MIDDLE SECTION */}
      <div className="flex flex-row pt-12 gap-10">

        {/* LEFT COLUMN */}
        <div className="basis-[32%]">
          {
            leftColumnSection?.length !== 0 && leftColumnSection?.map(( p ) => {
              return <div className="pb-6"><Card key={p.title} image={p.image} title={p.title} /></div>
            })
          }
        </div>
        {/* PRIMARY POST */}
        <div className="basis-[68%]">
          <PrincipalImportantNewPost title={primaryPost[0]?.title} image={primaryPost[0]?.image} description={primaryPost[0]?.description} category={primaryPost[0]?.category}/>
        </div>

      </div>
      {/* MIDDLE POST ROW */}
      <div className="flex flex-row gap-10 pt-[1rem]">
        {
          middleSection?.length !== 0 && middleSection?.map(( p ) => {
          return <Card key={p.title} image={p.image} title={p.title} />
        }) 
        }
      </div>
      {/* LOWER SECTION */}
      <div className="flex flex-row-reverse pt-12 gap-10">

        {/* RIGHT COLUMN */}
        <div className="basis-[32%]">
          {
            rightColumnSection?.length !== 0 && rightColumnSection?.map(( p ) => {
              return <div className="pb-6"><Card key={p.title} image={p.image} title={p.title} /></div>
            })
          }
        </div>
        {/* SECONDARY POST */}
        <div className="basis-[68%]">
          <PrincipalImportantNewPost title={secondaryPost[0]?.title} image={secondaryPost[0]?.image} description={secondaryPost[0]?.description} category={secondaryPost[0]?.category}/>
        </div>

      </div>
      
    </div>
  )


}
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/RelevantsNews/Card';
import NextNProgress from "nextjs-progressbar";
import Loader from '../../components/Loader';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      if(category) {
        const res = await axios.get(`${SERVER_URL}/post/category?name=${category}`)
        setNews(res.data)
      }
    }
    getData();
  }, [category]);
  console.log(category)
  return (
    <div>
      <NavBar/>
      {
        !category || news.length === 0
        ? <Loader/>
        : <div className='lg:px-[4rem] md:px-[2.5rem] pb-16'>
            <NextNProgress color="#3b82f1"/>
            <div className='grid grid-cols-3 gap-x-6 gap-y-2 pt-[1rem]'>
              {
                news?.length > 0 && news?.map(( p ) => {
                  return <Card id={p.id} tag={p.tag.name} image={p.image} title={p.title} />
                })
              }
            </div>
          </div>
      }
      <Footer/>
    </div>
  )
}

export default Category
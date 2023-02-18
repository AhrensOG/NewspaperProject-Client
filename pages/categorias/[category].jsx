import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/RelevantsNews/Card';
import NextNProgress from "nextjs-progressbar";
import Loader from '../../components/Loader';
import SideBar from "../../components/SideBarHome/SideBar";
import Head from 'next/head';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const Category = () => {
  const [nav, setNav] = useState(false);

  const router = useRouter();
  const { category } = router.query;
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      try {
        if(category) {
          const res = await axios.get(`${SERVER_URL}/post/category?name=${category}`)
          setNews(res.data)
        }
      } catch (e) {
        console.log(e.message)
      }
    }
    getData();
  }, [category]);

  return (
    <div>
      <Head>
        <title>OpinionFormoseña | Categorias</title>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <NavBar setNav={setNav} nav={nav}/>
      <SideBar nav={nav} setNav={setNav}/>
      {
        !category || news.length === 0
        ? <Loader/>
        : <div className='lg:px-16 md:px-10 px-4 pb-16'>
            <NextNProgress color="#3b82f1"/>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 py-6'>
              {
                news?.length > 0 && news?.map(( p ) => {
                  return <Card key={p.id} id={p.id} tag={p.tag.name} image={p.image} title={p.title} />
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
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import Card from '../../components/RelevantsNews/Card';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const Category = () => {
  const router = useRouter();
  const { category } = router.query;
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${SERVER_URL}/post/category?name=${category}`)
      setNews(res.data)
    }
    getData();
  }, [category]);

  return (
    <div>
      <NavBar/>
      {
        !category && news.length === 0
        ? <div>CARGANDO</div>
        : <div className='lg:px-[4rem] md:px-[2.5rem] pb-16'>
            <div className='grid grid-cols-3 gap-x-6 gap-y-2 pt-[1rem]'>
              {
                news.length && news.map(( p ) => {
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
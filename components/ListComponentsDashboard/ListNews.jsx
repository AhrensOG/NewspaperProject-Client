import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from '../Loader';
import parser from 'html-react-parser'
import AdminDashboardCarousel from '../Carrousel/AdminDashboardCarousel';

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const ListNews = ({ setUpdateData, refreshList, setRefreshList }) => {
  const [allNews, setAllNews] = useState([]);
  const [reload, setReload] = useState(false)

  const [search, setSearch] = useState('')
  const [newsSearch, setNewsSearch] = useState([])

  useEffect(() => {

    const getAllNews = async () => {
      const res = await axios.get(`${SERVER_URL}/post?parsed=${true}`)
      setAllNews(res.data)
    }
    getAllNews()
    if(reload || refreshList) {
      getAllNews()
      setReload(false)
      setRefreshList(false)
    }
  }, [reload, refreshList])

  const handleUpdate = (currentNew) => {
    // console.log(currentNew);
    try {
      const cat = currentNew?.categories?.map(n => {
        return n?.name
      })
      const copyCurrentData = JSON.parse(JSON.stringify(currentNew))
      copyCurrentData.tag = currentNew?.tag?.name
      copyCurrentData.categories = cat
      setUpdateData(copyCurrentData)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (news) => {
    try {
      await axios.delete(`${SERVER_URL}/post?id=${news.id}`)
      setReload(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRefresh = () => {
    const getAllNews = async () => {
      const res = await axios.get(`${SERVER_URL}/post?parsed=${true}`)
      setAllNews(res.data)
    }
    getAllNews()
    setSearch('')
    setNewsSearch([])
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    const filtered = allNews.filter(news => news?.title?.toLowerCase().includes(e.target.value.toLowerCase()))
    setNewsSearch(filtered)
  }

  const Item = ({ currentNew }) => {
    return (
      <div className='flex flex-row gap-3 overflow-auto'>
        <div className='basis-[30%]'>
          <AdminDashboardCarousel images={currentNew.image}/>
        </div>
        <div className='flex flex-row basis-[70%] gap-3'>
          <div className='basis-[70%]'>
            <h5 className='uppercase py-2 text-xs font-roboto text-gray-600 break-all'>{currentNew.title}</h5>
          </div>
          <div className='basis-[30%] flex flex-col gap-2'>
            <button className='bg-white hover:bg-blue-300 hover:text-white text-blue-300 text-sm w-full font-roboto py-1 px-3 rounded border border-blue-300' onClick={() => handleUpdate(currentNew)} >Modificar</button>
            <button className='bg-white hover:bg-red-500 hover:text-white text-red-500 text-sm w-full font-roboto py-1 px-3 rounded border border-red-500' onClick={() => handleDelete(currentNew)} >Eliminar</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className='bg-white'>
        <div className='flex flex-col justify-center items-center px-4 py-2 divide-y divide-blue-200'>
          <h1 className='text-4xl font-roboto w-full text-center p-4'>NOTICIAS</h1>
          <span className='w-full'></span>
        </div>
        <div className='flex flex-row justify-center px-2 py-6 gap-4'>
          <button onClick={handleRefresh} className='basis-[30%] bg-blue-200 hover:bg-white hover:text-blue-200 text-white text-lg font-bold tracking-widest w-full font-roboto py-1 px-3 rounded border border-blue-200' >Refresh</button>
          <input onChange={handleSearch} className='basis-[70%] border border-blue-200 rounded focus:outline-none focus:border-blue-200 focus:ring-1 p-1' type="text" placeholder='Buscar Noticia...'/>
        </div>
      </div>
      <div className='px-2'>
        {
          allNews.length === 0 
          ? <Loader/>
          : search
            ? newsSearch?.length > 0
              ? <div className='flex flex-col gap-6'>
                  {
                    newsSearch.map( ( e ) => {
                      return <Item key={e.id} currentNew={e}/>
                    })
                  }
                </div>
              : <p>No se encontraron noticias</p>

              : allNews?.length > 0 
              ? <div className='flex flex-col gap-6'>
                  {
                    allNews.map( ( e ) => {
                      return <Item key={e.id} currentNew={e}/>
                    })
                  }
                </div>
              : <p>No se encontraron noticias</p>
        }
      </div>
    </div>
  )
}

export default ListNews
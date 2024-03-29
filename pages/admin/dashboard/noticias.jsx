import Head from 'next/head'
import React, { useState } from 'react'
import ListNews from '../../../components/ListComponentsDashboard/ListNews'
import NewForm from '../../../components/PostNewsFormik/NewForm'
import SideBar from '../../../components/SideBarAdmin/SideBar'

const postNews = () => {
  const [updateData, setUpdateData] = useState({})
  const [refreshList, setRefreshList] = useState(false)

  return (
    <div className='flex flex-row'>
      <Head>
        <title>OpinionFormoseña | AdminPanel</title>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <div className='basis-[20%]'>
        <SideBar className='h-full'/>
      </div>

      <div className='basis-[40%]'>
        <ListNews setUpdateData={setUpdateData} setRefreshList={setRefreshList} refreshList={refreshList}/>
      </div>

      <div className='basis-[60%]'>
        {
          updateData.id
          ? <NewForm data={updateData} setRefreshList={setRefreshList}/>
          : <NewForm setRefreshList={setRefreshList}/>
        }
      </div>
    </div>
  )
}

export default postNews
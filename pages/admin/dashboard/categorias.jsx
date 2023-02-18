import Head from 'next/head'
import React, { useState } from 'react'
import DashboardCategory from '../../../components/DashboardCategories/DashboardCategory'
import SideBar from '../../../components/SideBarAdmin/SideBar'


const categorias = () => {
  
  return (
    <div className='flex flex-row'>
      <Head>
        <title>OpinionFormoseña | AdminPanel</title>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <div className='basis-[20%]'>
        <SideBar className='h-full'/>
      </div>
      <div className='basis-[30%]'>
        <DashboardCategory/>
      </div>
      <div className='basis-[50%]'>
        <img className='sticky top-0 w-full h-[550px] pt-16' src="https://www.shutterstock.com/image-vector/journalist-concept-mass-media-news-260nw-1995929273.jpg" alt="" />
      </div>
    </div>
  )
}

export default categorias